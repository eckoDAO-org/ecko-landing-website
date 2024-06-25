import { DaoIcon, DecentralizedIcon, LiquidityMiningIcon, MultiProtocolIcon, FastestSettlementsIcon, StakingIcon, ZeroGasIcon } from '../assets';

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
  color: 'salmon',
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
    'eckoDAO will play a large role in eckoDEX operations, controlling the parameters for individual pools. The DAO will have a strong focus on ecosystem development, working towards Kadena’s blockchain overall growth.',
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
  color: 'salmon',
  title: 'Multi-Protocol',
  description:
    'eckoDEX will be the only multi-protocol DEX with native decentralised bridges, leading to a future where users won’t have to even think about different networks, but just access value through eckoDEX single platform.',
};
export const STAKING = {
  icon: <StakingIcon />,
  color: 'pink',
  title: 'Governance Mining',
  description:
    'KDX Token holders can participate in Governance Mining to gain voting power for governance participation, incentivizing long-term network success. Governance Mining participants receive 0.05% of swaps to encourage continued locking and increase voting power.',
};

export const FEATURES = [ZERO_GAS, LIQUIDITY_MINING, SETTLEMENTS, DAO, DECENTRALIZED, MULTI_PROTOCOL, STAKING];
