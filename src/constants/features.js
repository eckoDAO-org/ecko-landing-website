import {
  DaoIcon,
  DecentralizedIcon,
  GovernanceIcon,
  LiquidityMiningIcon,
  MultiProtocolIcon,
  FastestSettlementsIcon,
  StakingIcon,
  ZeroGasIcon,
} from '../assets';

export const ZERO_GAS = {
  icon: <ZeroGasIcon />,
  color: 'pink',
  title: (
    <span>
      Zero Gas,
      <br />
      Forever
    </span>
  ),
  description:
    'Gas will always remain free as Kadena blockchain scales horizontally. As the demand for block-space goes up, Kadena can increase the number of chains infinitely.',
};
export const LIQUIDITY_MINING = {
  icon: <LiquidityMiningIcon />,
  color: 'yellow',
  title: (
    <span>
      Liquidity
      <br />
      Mining
    </span>
  ),
  description: (
    <span>
      LPs will have two options:
      <br />
      1) Claiming 0.25% of the swapping fees in the pool native tokens.
      <br />
      2) Claiming the rewards in KDX tokens with a programmatic booster.
    </span>
  ),
};
export const SETTLEMENTS = {
  icon: <FastestSettlementsIcon />,
  color: 'primary',
  title: (
    <span>
      Fastest
      <br />
      Settlements
    </span>
  ),
  description:
    'Given Kadena’s endless scalability, Network Congestion will never be an issue. Together with gas-free transaction, it will ensure fast and secure settlments.',
};
export const DAO = {
  icon: <DaoIcon />,
  color: 'pink',
  title: (
    <span>
      DAO
      <br />
      Powered
    </span>
  ),
  description:
    'The Kaddex DAO will play a large role in Kaddex operations, controlling the parameters for individual pools. The DAO will have a strong focus on ecosystem development, working towards Kadena’s blockchain overall growth.',
};
export const DECENTRALIZED = {
  icon: <DecentralizedIcon />,
  color: 'yellow',
  title: (
    <span>
      Decentralized
      <br />
      Infrastructure
    </span>
  ),
  description:
    'Everything from liquidity and provision to pricing and swapping is done entirely on chain. This requires no intervention from off-chain oracles. It is fully autonomous with no control by central on-chain authorities.',
};
export const MULTI_PROTOCOL = {
  icon: <MultiProtocolIcon />,
  color: 'primary',
  title: 'Multi-Protocol',
  description:
    'Kaddex will be the only multi-protocol DEX with native decentralised bridges, leading to a future where users won’t have to even think about different networks, but just access value through Kaddex single platform.',
};
export const STAKING = {
  icon: <StakingIcon />,
  color: 'pink',
  title: (
    <span>
      Staking
      <br />
      &nbsp;
    </span>
  ),
  description:
    'KDX Stakers will earn 0.05% on all swaps taking place on Kaddex. This will give holders a simple way to earn passive income while still participating in the governance.',
};
export const GOVERNANCE = {
  icon: <GovernanceIcon />,
  color: 'yellow',
  title: 'Governance',
  description:
    'Kaddex is built on community, our governance system will give the users control of network incentives, protocol mechanics, and pool rewards, all while maintaining our approach to safe DeFi.',
};

export const FEATURES = [ZERO_GAS, LIQUIDITY_MINING, SETTLEMENTS, DAO, DECENTRALIZED, MULTI_PROTOCOL, STAKING];
