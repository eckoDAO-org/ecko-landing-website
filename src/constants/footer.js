import { ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from '../router/routes';

export const FOOTER_ABOUT = {
  title: 'ABOUT',
  color: 'grey',
  items: [
    {
      text: 'The Most Powerful Proof of Work DEX',
      href: 'proof-of-dex',
    },
    {
      text: 'Unique Features',
      href: 'features',
    },
    {
      text: 'Tokenomics',
      href: 'tokenomics',
    },
    {
      text: 'eckoDEX Roadmap',
      href: 'roadmap',
    },
    {
      text: 'Partners',
      href: 'partners',
    },
    // {
    //   text: 'Team',
    //   href: 'team',
    // },
    {
      text: 'eckoWALLET',
      link: 'https://wallet.ecko.finance',
    },
  ],
};
export const FOOTER_SUPPORT = {
  title: 'PRODUCT',
  color: 'grey',
  items: [
    {
      text: 'Documentation',
      href: 'https://docs.ecko.finance/eckodao/welcome/introduction',
      target: '_blank',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/eckoDAO-org/ecko-landing-website',
      target: '_blank',
    },
    {
      text: 'eckoWALLET',
      href: 'https://wallet.ecko.finance',
      target: '_blank',
    },
    {
      text: 'eckoDAO',
      href: 'https://dao.ecko.finance',
      target: '_blank',
    },
  ],
};
export const FOOTER_LEARN = {
  title: 'LEARN',
  color: 'grey',
  items: [
    {
      text: 'Lite Paper',
      href: '/litepaper-eckoDEX.pdf',
      target: '_blank',
    },
    {
      text: 'Liquidity Mining 2.0',
      href: '/liquidity-mining-2.0.pdf',
      target: '_blank',
    },
    {
      text: 'KDX Multiplier Preview',
      href: '/kdx-multiplier-preview.pdf',
      target: '_blank',
    },
    {
      text: 'Privacy Policy',
      href: ROUTE_PRIVACY_POLICY,
      target: '_blank',
    },
    {
      text: 'Terms of Use',
      href: ROUTE_TERMS_OF_USE,
      target: '_blank',
    },
  ],
};
