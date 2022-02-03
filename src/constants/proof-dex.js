import { BuildIcon, PoolIcon, StakeIcon, SwapIcon } from '../assets';

const PROOF_DEX_SWAP = {
  key: 'SWAP',
  icon: <SwapIcon />,
  title: 'Swap',
  description: 'Swap safely with no transaction cost',
  color: 'pink',
};
const PROOF_DEX_POOL = {
  key: 'POOL',
  icon: <PoolIcon />,
  title: 'Pool',
  description: 'Provide liquidity for any SPL token',
  color: 'yellow',
};
const PROOF_DEX_STAKE = {
  key: 'STAKE',
  icon: <StakeIcon />,
  title: 'Stake',
  description: 'Stake KDX and earn 0.05% of all trades',
  color: 'grey',
};
const PROOF_DEX_BUILD = {
  key: 'BUILD',
  icon: <BuildIcon />,
  title: 'Build',
  description: 'Leverage our upcoming DeFi tools: lending, farming and beyond',
  color: 'grey',
};

export const PROOF_DEX = [PROOF_DEX_SWAP, PROOF_DEX_POOL, PROOF_DEX_STAKE, PROOF_DEX_BUILD];