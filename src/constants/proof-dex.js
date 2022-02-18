import { LendingIcon, PoolIcon, StakeIcon, SwapIcon } from '../assets';

export const PROOF_DEX_SWAP = {
  key: 'SWAP',
  icon: <SwapIcon />,
  title: 'Swap',
  description: 'Swap safely with no transaction costs',
  color: 'pink',
};
export const PROOF_DEX_POOL = {
  key: 'POOL',
  icon: <PoolIcon />,
  title: 'Pool',
  description: 'Provide liquidity for any SPL token',
  color: 'yellow',
};
export const PROOF_DEX_STAKE = {
  key: 'STAKE',
  icon: <StakeIcon />,
  title: 'Stake',
  description: 'Stake KDX and earn 0.05% on all trades',
  color: 'grey',
  className: 'disabled',
};
export const PROOF_DEX_LENDING = {
  key: 'LENDING',
  icon: <LendingIcon />,
  title: 'Lend',
  description: 'Leverage on our upcoming DeFi Tools',
  color: 'grey',
  className: 'disabled',
};

export const PROOF_DEX = [PROOF_DEX_SWAP, PROOF_DEX_POOL, PROOF_DEX_STAKE, PROOF_DEX_LENDING];
