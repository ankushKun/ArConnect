import browser from "webextension-polyfill";
import { useEffect, useState } from "react";
import { ExtensionStorage } from "~utils/storage";
import { useStorage } from "@plasmohq/storage/hook";
import { Loading, Text } from "@arconnect/components";

import { gql } from "~gateways/api";
import styled from "styled-components";
import {
  AO_RECEIVER_QUERY,
  AO_SENT_QUERY,
  AR_RECEIVER_QUERY,
  AR_SENT_QUERY
} from "~notifications/utils";
import { useHistory } from "~utils/hash_router";
import { getArPrice } from "~lib/coingecko";
import useSetting from "~settings/hook";
import { suggestedGateways } from "~gateways/gateway";
import { Spacer } from "@arconnect/components";
import { Heading, ViewAll, TokenCount } from "../Title";
import {
  getFormattedAmount,
  getFormattedFiatAmount,
  getFullMonthName,
  getTransactionDescription,
  processTransactions,
  sortFn,
  type ExtendedTransaction
} from "~lib/transactions";

export default function Transactions() {
  const [transactions, fetchTransactions] = useState<ExtendedTransaction[]>([]);
  const [arPrice, setArPrice] = useState(0);
  const [push] = useHistory();
  const [loading, setLoading] = useState(false);
  const [currency] = useSetting<string>("currency");
  const [activeAddress] = useStorage<string>({
    key: "active_address",
    instance: ExtensionStorage
  });

  useEffect(() => {
    getArPrice(currency).then(setArPrice).catch();
  }, [currency]);

  useEffect(() => {
    const getNotifications = async () => {
      setLoading(true);
      try {
        if (activeAddress) {
          const queries = [
            AR_RECEIVER_QUERY,
            AR_SENT_QUERY,
            AO_SENT_QUERY,
            AO_RECEIVER_QUERY
          ];

          const [rawReceived, rawSent, rawAoSent, rawAoReceived] =
            await Promise.allSettled(
              queries.map((query) =>
                gql(query, { address: activeAddress }, suggestedGateways[1])
              )
            );

          const sent = await processTransactions(rawSent, "sent");
          const received = await processTransactions(rawReceived, "received");
          const aoSent = await processTransactions(rawAoSent, "aoSent", true);
          const aoReceived = await processTransactions(
            rawAoReceived,
            "aoReceived",
            true
          );

          let combinedTransactions: ExtendedTransaction[] = [
            ...sent,
            ...received,
            ...aoReceived,
            ...aoSent
          ];

          combinedTransactions.sort(sortFn);

          combinedTransactions = combinedTransactions.map((transaction) => {
            if (transaction.node.block && transaction.node.block.timestamp) {
              const date = new Date(transaction.node.block.timestamp * 1000);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              return {
                ...transaction,
                day,
                month,
                year,
                date: date.toISOString()
              };
            } else {
              const now = new Date();
              return {
                ...transaction,
                day: now.getDate(),
                month: now.getMonth() + 1,
                year: now.getFullYear(),
                date: null
              };
            }
          });

          fetchTransactions(combinedTransactions);
        }
      } catch (error) {
        console.error("Error fetching transactions", error);
      } finally {
        setLoading(false);
      }
    };

    getNotifications();
  }, [activeAddress]);

  const handleClick = (id: string) => {
    push(`/transaction/${id}?back=${encodeURIComponent("/transactions")}`);
  };

  return (
    <>
      <Heading>
        <ViewAll onClick={() => push("/transactions")}>
          {browser.i18n.getMessage("view_all")}
          <TokenCount>({transactions.length})</TokenCount>
        </ViewAll>
      </Heading>
      <Spacer y={1} />
      <TransactionsWrapper showBorder={transactions.length > 0 && !loading}>
        {!loading &&
          (transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <TransactionItem key={transaction.node.id}>
                <Transaction
                  key={transaction.node.id}
                  onClick={() => handleClick(transaction.node.id)}
                >
                  <Section>
                    <Main>{getTransactionDescription(transaction)}</Main>
                    <Secondary>
                      {transaction.date
                        ? `${getFullMonthName(
                            `${transaction.month}-${transaction.year}`
                          )} ${transaction.day}`
                        : "Pending"}
                    </Secondary>
                  </Section>
                  <Section alignRight>
                    <Main>{getFormattedAmount(transaction)}</Main>
                    <Secondary>
                      {getFormattedFiatAmount(transaction, arPrice, currency)}
                    </Secondary>
                  </Section>
                </Transaction>
              </TransactionItem>
            ))
          ) : (
            <NoTransactions>
              {browser.i18n.getMessage("no_transactions")}
            </NoTransactions>
          ))}
        {loading && (
          <LoadingWrapper>
            <Loading style={{ width: "20px", height: "20px" }} />
          </LoadingWrapper>
        )}
      </TransactionsWrapper>
    </>
  );
}

const TransactionsWrapper = styled.div<{ showBorder: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
${(props) =>
  props.showBorder && `border: 1px solid ${props.theme.backgroundSecondary}`}};
`;

const Main = styled.h4`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

const Secondary = styled.h6`
  margin: 0;
  font-weight: 500;
  color: ${(props) => props.theme.secondaryTextv2};
  font-size: 10px;
`;

const Transaction = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  // border-bottom: 1px solid ${(props) => props.theme.backgroundSecondary};
  padding: 8px 0;
`;

const Section = styled.div<{ alignRight?: boolean }>`
  text-align: ${({ alignRight }) => (alignRight ? "right" : "left")};
`;

const TransactionItem = styled.div`
  padding: 0 10px;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.secondaryBtnHover};
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 1px;
    background-color: ${(props) => props.theme.backgroundSecondary};
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const NoTransactions = styled(Text).attrs({
  noMargin: true
})`
  text-align: center;
`;

const LoadingWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: top;
`;
