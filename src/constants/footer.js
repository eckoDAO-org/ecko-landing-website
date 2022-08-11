import { ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from '../router/routes';

export const FOOTER_ABOUT = {
  title: 'ABOUT',
  color: 'yellow',
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
      text: 'Kaddex Roadmap',
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
      text: 'X-Wallet',
      link: 'https://xwallet.kaddex.com',
    },
  ],
};
export const FOOTER_SUPPORT = {
  title: 'PRODUCT',
  color: 'primary',
  items: [
    {
      text: 'Documentation',
      href: 'https://docs.kaddex.com/',
      target: '_blank',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/kaddex-org/',
      target: '_blank',
    },
    {
      text: 'X-Wallet',
      href: 'https://xwallet.kaddex.com',
      target: '_blank',
    },
  ],
};
export const FOOTER_LEARN = {
  title: 'LEARN',
  color: 'pink',
  items: [
    {
      text: 'Lite Paper',
      href: '/kaddex litepaper.pdf',
      target: '_blank',
    },
    {
      text: 'Liquidty Mining 2.0',
      href: '/liquidity mining 2.0.pdf',
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
