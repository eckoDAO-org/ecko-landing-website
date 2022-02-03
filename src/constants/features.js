import { DaoIcon, DecentralizedIcon, GovernanceIcon, LpsIcon, MultiProtocolIcon, SettlementsIcon, StakingIcon, ZeroGasIcon } from '../assets';

const ZERO_GAS = {
  icon: <ZeroGasIcon />,
  title: 'Zero Gas, Forever',
  description:
    'Gas will always stay free because the Kadena blockchain scales horizontally, which means as the demand for block space goes up, we can increase the number of chains, increasing the number of available blocks.',
};
const LPS = {
  icon: <LpsIcon />,
  title: 'The Best LPs Rewards',
  description: 'When a swap is performed the user is charged a standard 0.3% trading fee, of which 100% goes to Liquidity Providers.',
};
const SETTLEMENTS = {
  icon: <SettlementsIcon />,
  title: 'Fastest Settlements',
  description:
    'Because Kadena has the ability to scale TPS infinitively, network congestion will never be a problem. This coupled with gas free transactions will ensure quick settlements and security.',
};
const DAO = {
  icon: <DaoIcon />,
  title: 'DAO Powered',
  description:
    'The Kaddex DAO will play a large role in how Kaddex operates, controlling the parameters for individual pools. The DAO will have a strong focus on ecosystem development, working to help growing the entire Kadena blockchain.',
};
const DECENTRALIZED = {
  icon: <DecentralizedIcon />,
  title: 'Decentralized Infrastructure',
  description:
    'Everything from liquidity provision, pricing to swapping is done entirely on-chain, requires no intervention from off chain authorities or oracles, and is fully autonomous with no control by any central on-chain authority either.',
};
const MULTI_PROTOCOL = {
  icon: <MultiProtocolIcon />,
  title: 'Multi-Protocol',
  description:
    'Kaddex will be the only multi-protocol DEX with native decentralised bridges, leading to a future where users won’t have to even think about protocols, but just access value wherever it is.',
};
const STAKING = {
  icon: <StakingIcon />,
  title: 'Staking',
  description:
    'KDX Stakers will earn 0.05% of all swaps happening on Kaddex, giving holders a simple way to earn passive income while still participating in governance.',
};
const GOVERNANCE = {
  icon: <GovernanceIcon />,
  title: 'Governance',
  description:
    'Kaddex is built on community, our governance system will give the users control of network incentives, protocol mechanics, and pool rewards, all while maintaining our approach to safe DeFi.',
};

export const FEATURES = [ZERO_GAS, LPS, SETTLEMENTS, DAO, DECENTRALIZED, MULTI_PROTOCOL, STAKING, GOVERNANCE];
