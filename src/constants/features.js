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
  title: 'Zero Gas, Forever',
  description:
    'Gas will always stay free because the Kadena blockchain scales horizontally, which means as the demand for block space goes up, we can increase the number of chains, increasing the number of available blocks.',
};
export const LIQUIDITY_MINING = {
  icon: <LiquidityMiningIcon />,
  color: 'yellow',
  title: 'Liquidity Mining',
  description: (
    <span>
      LPs will have two options:
      <br />
      1) claim the entirety of the swapping fees (0.3%) in the pool native tokens. <br />
      2) claim rewards directly in the KDX token with a programmatic booster that will serve to attract more TVL and Volume.
    </span>
  ),
};
export const SETTLEMENTS = {
  icon: <FastestSettlementsIcon />,
  color: 'primary',
  title: 'Fastest Settlements',
  description:
    'Because the Kadena network can scale infinitively, network congestion will never be a problem. This coupled with gas free transactions will ensure quick settlements and security.',
};
export const DAO = {
  icon: <DaoIcon />,
  color: 'pink',

  title: 'DAO Powered',
  description:
    'The Kaddex DAO will play a large role in Kaddex operations, controlling the parameters for individual pools. The DAO will have a strong focus on ecosystem development, working to help growing the entire Kadena blockchain.',
};
export const DECENTRALIZED = {
  icon: <DecentralizedIcon />,
  color: 'yellow',

  title: 'Decentralized Infrastructure',
  description:
    'Everything from liquidity provision, pricing to swapping is done entirely on-chain, requires no intervention from off chain authorities or oracles, and is fully autonomous with no control by any central on-chain authority either.',
};
export const MULTI_PROTOCOL = {
  icon: <MultiProtocolIcon />,
  color: 'primary',

  title: 'Multi-Protocol',
  description:
    'Kaddex will be the only multi-protocol DEX with native decentralised bridges, leading to a future where users won’t have to even think about different networks, but just access value in Kaddex.',
};
export const STAKING = {
  icon: <StakingIcon />,
  color: 'pink',

  title: 'Staking',
  description:
    'KDX Stakers will earn 0.05% of all swaps happening on Kaddex, giving holders a simple way to earn passive income while still participating in governance.',
};
export const GOVERNANCE = {
  icon: <GovernanceIcon />,

  color: 'yellow',

  title: 'Governance',
  description:
    'Kaddex is built on community, our governance system will give the users control of network incentives, protocol mechanics, and pool rewards, all while maintaining our approach to safe DeFi.',
};

export const FEATURES = [ZERO_GAS, LIQUIDITY_MINING, SETTLEMENTS, DAO, DECENTRALIZED, MULTI_PROTOCOL, STAKING];
