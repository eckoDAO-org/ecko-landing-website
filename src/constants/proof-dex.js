import { FarmIcon, PoolIcon, StakeIcon, SwapIcon } from '../assets';

export const PROOF_DEX_SWAP = {
  key: 'SWAP',
  icon: <SwapIcon />,
  title: 'Swap',
  description: 'Swap safely with no transaction costs',
  color: 'pink',
  link: 'https://swap.ecko.finance',
};
export const PROOF_DEX_POOL = {
  key: 'POOL',
  icon: <PoolIcon />,
  title: 'Pool',
  description: 'Provide liquidity for any pair',
  color: 'yellow',
  link: 'https://swap.ecko.finance/liquidity/add-liquidity-double-sided',
};
export const PROOF_DEX_STAKE = {
  key: 'VOTE',
  icon: <StakeIcon />,
  title: 'Vote',
  description: 'KDX holders lock to gain voting power, and get rewarded.',
  color: 'primary',
  className: 'disabled',
  link: 'https://swap.ecko.finance/stake',
};
export const PROOF_DEX_FARM = {
  key: 'FARM',
  icon: <FarmIcon />,
  title: 'Farm',
  description: 'Access KDX liquidity mining 2.0',
  color: 'white',
  className: 'disabled',
  link: 'https://swap.ecko.finance/liquidity/rewards',
};

export const PROOF_DEX = [PROOF_DEX_SWAP, PROOF_DEX_POOL, PROOF_DEX_STAKE, PROOF_DEX_FARM];
