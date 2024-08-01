import alexLogo from "url:/assets/ecosystem/alex.svg";
import ardriveLogo from "url:/assets/ecosystem/ardrive.svg";
import aftrmarketLogo from "url:/assets/ecosystem/aftrmarket.png";
import arwikiLogo from "url:/assets/ecosystem/arwiki.png";
import bazarLogo from "url:/assets/ecosystem/bazar.png";
import protocollandLogo from "url:/assets/ecosystem/protocolland.svg";
import permaswapLogo from "url:/assets/ecosystem/permaswap.svg";
import pianityLogo from "url:/assets/ecosystem/pianity.png";
import barkLogo from "url:/assets/ecosystem/bark.png";
import ansLogo from "url:/assets/ecosystem/ans-logo.svg";
import arnsLogo from "url:/assets/ecosystem/arns.svg";
import astroLogo from "url:/assets/ecosystem/astro.png";
import artByCityLogo from "url:/assets/ecosystem/artbycity.png";
import permapagesLogo from "url:/assets/ecosystem/permapages.svg";
import echoLogo from "url:/assets/ecosystem/echo.svg";
import permaFacts from "url:/assets/ecosystem/permafacts.svg";
import betterideaLogo from "url:/assets/ecosystem/betteridea.png";
import arLogoLight from "url:/assets/ar/logo_light.png";

export interface App {
  name: string;
  category: string;
  description: string;
  assets: {
    logo: string;
    thumbnail: string;
    lightBackground?: string;
    darkBackground?: string;
  };
  links: {
    website: string;
    twitter?: string;
    discord?: string;
    github?: string;
  };
}

export const apps: App[] = [
  {
    name: "Bark",
    category: "Exchange",
    description:
      "Bark is the AO Computer's first decentralized Finance. It supports AMM trading pairs and extreme scalability.",
    assets: {
      logo: barkLogo,
      thumbnail: "/apps/bark/thumbnail.png",
      lightBackground: "rgba(230, 235, 240, 1)",
      darkBackground: "rgba(19, 28, 37, 1)"
    },
    links: {
      website: "https://bark.arweave.dev"
    }
  },
  {
    name: "Protocol.Land",
    category: "Storage",
    description:
      "Code collaboration, reimagined. Protocol.Land is a decentralized, source controlled, code collaboration where you own your code.",
    assets: {
      logo: protocollandLogo,
      thumbnail: "/apps/protocolland/thumbnail.png",
      lightBackground: "rgba(230, 235, 240, 1)",
      darkBackground: "rgba(19, 28, 37, 1)"
    },
    links: {
      website: "https://protocol.land",
      twitter: "https://twitter.com/ProtocolLand",
      discord: "https://discord.com/invite/GqxX2vtwRj",
      github: "https://github.com/labscommunity/protocol-land"
    }
  },
  {
    name: "BetterIDEa IDE",
    category: "Development",
    description: "Feature rich web IDE for building on AO",
    assets: {
      logo: betterideaLogo,
      thumbnail: "/apps/betteridea/thumbnail.png",
      lightBackground: "rgba(240, 240, 240, 1)",
      darkBackground: "rgba(20, 34, 19, 1)"
    },
    links: {
      website: "https://betteridea.dev",
      twitter: "https://twitter.com/betteridea-dev",
      discord: "",
      github: "https://github.com/betteridea-dev"
    }
  },
  {
    name: "Astro",
    category: "De-fi",
    description:
      "Astro USD (USDA) is the very first stablecoin in the Arweave (and AO Computer) ecosystem.",
    assets: {
      logo: astroLogo,
      thumbnail: "/apps/astro/thumbnail.png",
      lightBackground: "rgba(230, 235, 240, 1)",
      darkBackground: "rgba(19, 28, 37, 1)"
    },
    links: {
      website: "https://astrousd.com",
      twitter: "https://twitter.com/AstroUSD",
      discord: "https://discord.gg/NpNRtNE6PN"
    }
  },
  {
    name: "AFTR Market",
    category: "Developer Tooling",
    description:
      "AFTR Market provides asset management and governance on-chain for Arweave assets.",
    assets: {
      logo: aftrmarketLogo,
      thumbnail: "/apps/aftr/thumbnail.png"
    },
    links: {
      website: "https://www.aftr.market/",
      twitter: "https://twitter.com/AftrMarket",
      discord: "https://discord.gg/YEy8VpuNXR"
    }
  },
  {
    name: "Bazar",
    category: "Exchange",
    description:
      "The first fully decentralized atomic asset exchange built on the permaweb. Through the power of the Universal Content Marketplace (UCM) protocol and the Universal Data License (UDL) content creators can trade digital assets with real world rights.",
    assets: {
      logo: bazarLogo,
      thumbnail: "/apps/bazar/thumbnail.gif"
    },
    links: {
      website: "https://bazar.arweave.dev",
      twitter: "https://twitter.com/OurBazAR"
    }
  },
  {
    name: "Arweave Name System",
    category: "Social",
    description:
      "The Arweave Name System (ArNS) works similarly to traditional Domain Name Services - but with ArNS, the registry is decentralized, permanent, and stored on Arweave. It's a simple way to name and help you - and your users - find your data, apps, or websites on Arweave.",
    assets: {
      logo: arnsLogo,
      thumbnail: "/apps/arns/thumbnail.jpeg"
    },
    links: {
      website: "https://arns.app",
      twitter: "https://twitter.com/ar_io_network",
      discord: "https://discord.com/invite/HGG52EtTc2",
      github: "https://github.com/ar-io"
    }
  },
  {
    name: "Art By City",
    category: "Publishing",
    description:
      "Art By City is a chain-agnostic Web3 art and creative content protocol built on Arweave. The protocol is governed by the Art By City DAO. The Art By City DAO is a Profit Sharing Community or PSC. The Art By City community governs development of the Art By City protocol, dApps, and tools artists will need to take control of their Web3 experience.",
    assets: {
      logo: artByCityLogo,
      thumbnail: "/apps/artbycity/thumbnail.png",
      lightBackground: "rgba(255, 255, 255, 1)",
      darkBackground: "rgba(255, 255, 255, 1)"
    },
    links: {
      website: "https://artby.city",
      twitter: "https://twitter.com/artbycity",
      discord: "https://discord.gg/w4Yhc95b8p",
      github: "https://github.com/art-by-city"
    }
  },
  {
    name: "ECHO",
    category: "Social",
    description:
      "ECHO is the first decentralized social engagement protocol based on Arweave. Its goal is to provide the fundamental infrastructure of Web3 social by introducing the first comment widget that can be deployed on any Web3 website with permanent data storage, so that users can speak up for themselves in a decentralized, permissionless, and censorship-resistant environment. ",
    assets: {
      logo: echoLogo,
      thumbnail: "/apps/echo/thumbnail.png"
    },
    links: {
      website: "https://0xecho.com",
      twitter: "https://twitter.com/0x_ECHO",
      discord: "https://discord.gg/KFxyaw9Wdj",
      github: "https://github.com/0x-echo"
    }
  },
  {
    name: "Permafacts",
    category: "Publishing",
    description:
      "A provably neutral publishing platform, built on top of the #FactsProtocol, aimed at dis-intermediating the truth. Publish assertions, and take your position in the Fact Marketplace!",
    assets: {
      logo: permaFacts,
      thumbnail: "/apps/permafacts/thumbnail.png"
    },
    links: {
      website: "https://permafacts.arweave.dev",
      twitter: "https://twitter.com/permafacts",
      discord: "https://discord.gg/uGg8VAvqU7",
      github: "https://github.com/facts-laboratory"
    }
  },
  {
    name: "Pianity",
    category: "NFTs",
    description:
      "Pianity is a music NFT platform – built on environmentally-conscious Arweave technology — where musicians and their community gather to create, sell, buy and collect songs in limited editions. Pianity's pioneering approach, which includes free listening for all, enables deeper connections between artists and their audience.",
    assets: {
      logo: pianityLogo,
      thumbnail: "/apps/pianity/thumbnail.png"
    },
    links: {
      website: "https://pianity.com",
      twitter: "https://twitter.com/pianitynft",
      discord: "https://discord.gg/pianity"
    }
  },
  {
    name: "Arweave Name Service (ANS)",
    category: "Social",
    description:
      "ans.gg is a popular name service built on top of the Arweave blockchain. Buy your domain once, own forever.",
    assets: {
      logo: ansLogo,
      thumbnail: "/apps/ans/thumbnail.png"
    },
    links: {
      website: "https://ans.gg",
      twitter: "https://twitter.com/ArweaveANS",
      discord: "https://discord.gg/decentland"
    }
  },
  {
    name: "Permapages",
    category: "Publishing",
    description:
      "Create and manage your own permanent web3 profile and permaweb pages built on Arweave.",
    assets: {
      logo: permapagesLogo,
      thumbnail: "/apps/permapages/thumbnail.png"
    },
    links: {
      website: "https://permapages.app",
      twitter: "https://twitter.com/permapages"
    }
  },
  {
    name: "ArDrive",
    category: "Storage",
    description:
      "ArDrive offers never-ending storage of your most valuable files. Pay once and save your memories forever.",
    assets: {
      logo: ardriveLogo,
      thumbnail: permaswapLogo,
      lightBackground: "rgba(230, 235, 240, 1)",
      darkBackground: "rgba(19, 28, 37, 1)"
    },
    links: {
      website: "https://ardrive.io",
      twitter: "https://twitter.com/ardriveapp",
      discord: "https://discord.com/invite/ya4hf2H",
      github: "https://github.com/ardriveapp"
    }
  },
  {
    name: "ArCode Studio",
    category: "Development",
    description:
      "ArCode Studio is an online IDE for smartweave contracts. As ArCode works on the browser all the files are saved in cache memory and removed when the cache is cleared.",
    assets: {
      logo: arLogoLight,
      thumbnail: "/apps/arcode/thumbnail.jpeg"
    },
    links: {
      website: "https://arcode.ar-io.dev",
      github: "https://github.com/luckyr13/arcode"
    }
  },
  {
    name: "Arwiki",
    category: "Social",
    description:
      "As MediaWiki is the software that powers Wikipedia, ArWiki is the software that powers the Arweave Wiki. However, ArWiki is a Web3 platform -- it is completely decentralized, and is hosted on and served from the Arweave permaweb itself.",
    assets: {
      logo: arwikiLogo,
      thumbnail: "/apps/arwiki/thumbnail.jpeg"
    },
    links: {
      website: "https://arwiki.wiki",
      twitter: "https://x.com/TheArWiki"
    }
  },
  {
    name: "Alex",
    category: "Storage",
    description:
      "A decentralized archival platform that preserves human history and culture digitally.",
    assets: {
      logo: alexLogo,
      thumbnail: "/apps/alex/thumbnail.png"
    },
    links: {
      website: "https://alex.arweave.dev/",
      twitter: "https://twitter.com/thealexarchive",
      discord: "http://discord.gg/2uZsWuTNvN"
    }
  },
  {
    name: "Permaswap",
    category: "Exchange",
    description:
      "Permaswap is an engineering innovation to refactor AMM. Inspired by Arweave's SmartWeave, we've proposed the SCP theory. By exploring SCP, we're certain that the approach to building decentralized applications is not limited to the on-chain VM model and that the future of Dapp development will be diverse. The Permaswap Network will prove with a new architecture that decentralization should break the impossible triangle and provide users with a perfect experience.",
    assets: {
      logo: permaswapLogo,
      thumbnail: permaswapLogo,
      lightBackground: "rgba(230, 235, 240, 1)",
      darkBackground: "rgba(19, 28, 37, 1)"
    },
    links: {
      website: "https://permaswap.network/",
      twitter: "https://twitter.com/permaswap",
      discord: "https://discord.gg/WM5MQZGVPF",
      github: "https://github.com/permaswap"
    }
  }
];
