import React from 'react';
import {
  ARLogo,
  DefinerLogo,
  FluxLogo,
  GenesisBlockLogo,
  HypercentLogo,
  OVCsLogo,
  RoboswapLogo,
  SpotLogo,
  TokensoftLogo,
  UfoGamingLogo,
  ZelcoreLogo,
} from '../../assets';

export const partnersList = [
  {
    section: 'par1',
    id: 'par1',
    sectionID: '0vcs',
    title: '0 VCs',
    image: <OVCsLogo id="0vcs" />,
    text: <span>Kaddex believes that large buyers go against the basic principles of Decentralization.</span>,
  },
  {
    section: 'par2',
    id: 'par2',
    sectionID: 'flux',
    title: 'Flux',
    image: <FluxLogo />,
    text: (
      <span>The Flux infrastructure will empower Kaddex with all the benefits of being Web 3.0 ready - decentralized, scalable, and resilient.</span>
    ),
  },
  {
    section: 'par3',
    id: 'par3',
    sectionID: 'ufo_gaming',
    title: 'UFO Gaming',
    image: <UfoGamingLogo />,
    text: (
      <span>
        Kaddex will assist in the development of Fractal (an UFO Gaming in-house Cross-Chain DEX and AMM). This hub will showcase trending Metaverse
        related items and assets.
      </span>
    ),
  },
  {
    section: 'par4',
    id: 'par4',
    sectionID: 'architech',
    title: 'Architech',
    image: <ARLogo />,
    text: (
      <span>
        Architech is leading the development and design of the GUI, providing a user-friendly and absolutely innovative interface within the DEXes
        universe.
      </span>
    ),
  },
  {
    section: 'par5',
    id: 'par5',
    sectionID: 'roboswap',
    title: 'Roboswap',
    image: <RoboswapLogo />,
    text: <span>Roboswap is building the Software Development Kit for the Kaddex swap contract.</span>,
  },
  {
    section: 'par6',
    id: 'par6',
    sectionID: 'spot',
    title: 'Spot',
    image: <SpotLogo />,
    text: <span>Spot is engaged in the development of the Kaddex DAO.</span>,
  },
  {
    section: 'par7',
    id: 'par7',
    sectionID: 'hypercent',
    title: 'Hypercent',
    image: <HypercentLogo />,
    text: <span>Hypercent will serve as the official Kaddex onboarding platform to identify new projects entering the ecosystem.</span>,
  },
  {
    section: 'par8',
    id: 'par8',
    sectionID: 'tokensoft',
    title: 'Tokensoft',
    image: <TokensoftLogo />,
    text: (
      <span>
        wBTC and wETH will be available soon on Kaddex thanks to Tokensoft Inc. Together, it will support Kaddex in the upcoming KDX pre-launch sale.
      </span>
    ),
  },
  {
    section: 'par9',
    id: 'par9',
    sectionID: 'zelcore',
    title: 'Zelcore',
    image: <ZelcoreLogo />,
    text: (
      <span>
        Zelcore will help bridge Kadena network tokens with a non-custodial multi-asset platform, it will also connect directly to Kaddex dAPP to
        provide easy-to-use user experience.
      </span>
    ),
  },
  // {
  //   section: "par10",
  //   id: "par10",
  //   sectionID: "definer",
  //   title: "DeFiner",
  //   image: <DefinerLogo />,
  //   text: (
  //     <span>
  //       Definer will cooperate to expand Kaddex tools: starting from lending and
  //       borrowing possibilities.
  //     </span>
  //   ),
  // },
  {
    section: 'par11',
    id: 'par11',
    sectionID: 'genesis_block',
    title: 'Genesis Block',
    image: <GenesisBlockLogo />,
    text: <span>Official legal advisory firm.</span>,
  },
];
