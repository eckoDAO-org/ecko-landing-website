import { FarmIcon, PoolIcon, StakeIcon, SwapIcon } from '../assets';

export const PROOF_DEX_SWAP = {
  key: 'SWAP',
  icon: <SwapIcon />,
  title: 'Swap',
  description: 'Swap safely with no transaction costs',
  color: 'pink',
  link: 'https://swap.kaddex.com',
};
export const PROOF_DEX_POOL = {
  key: 'POOL',
  icon: <PoolIcon />,
  title: 'Pool',
  description: 'Provide liquidity for any pair',
  color: 'yellow',
  link: 'https://swap.kaddex.com/liquidity/add-liquidity-double-sided',
};
export const PROOF_DEX_STAKE = {
  key: 'STAKE',
  icon: <StakeIcon />,
  title: 'Stake',
  description: 'Stake KDX and earn 0.05% on all trades',
  color: 'primary',
  className: 'disabled',
  link: 'https://swap.kaddex.com/stake',
};
export const PROOF_DEX_FARM = {
  key: 'FARM',
  icon: <FarmIcon />,
  title: 'Farm',
  description: 'Access KDX liquidity mining 2.0',
  color: 'white',
  className: 'disabled',
  link: 'https://swap.kaddex.com/liquidity/rewards',
};

export const PROOF_DEX = [PROOF_DEX_SWAP, PROOF_DEX_POOL, PROOF_DEX_STAKE, PROOF_DEX_FARM];
