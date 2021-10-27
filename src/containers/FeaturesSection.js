import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import { ReactComponent as ZeroGasIcon } from '../assets/images/shared/gru-feature.svg';
import { ReactComponent as BestLPsIcon } from '../assets/images/shared/cup-feature.svg';
import { ReactComponent as DaoPowerIcon } from '../assets/images/shared/dao-feature.svg';
import { ReactComponent as DecentralizedInfrastructureIcon } from '../assets/images/shared/decentralized-feature.svg';
import { ReactComponent as FastestSettlementsIcon } from '../assets/images/shared/fastest-feature.svg';
import { ReactComponent as MultiProtocolIcon } from '../assets/images/shared/multi-protocol-feature.svg';
import { ReactComponent as StakingIcon } from '../assets/images/shared/staking-feature.svg';
import { ReactComponent as GovernanceIcon } from '../assets/images/shared/governance-feature.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  /* overflow: auto; */

  h1 {
    margin-bottom: 60px;
    color: #fff;
  }

  /* 1. Enable smooth scrolling */
  /*  html {
    scroll-behavior: smooth;
  } */

  main {
    justify-content: center;
  }

  /* 2. Make nav sticky */
  main > nav {
    position: sticky;
    top: 5rem;
    align-self: start;
  }

  /* 3. ScrollSpy active styles (see JS tab for activation) */
  .section-nav li.active > a {
    color: #39fffc;
    font-weight: 500;
  }

  /* Sidebar Navigation */
  .section-nav {
    padding-left: 0;
    border-left: 5px solid #ffffff;
  }

  .section-nav a {
    text-decoration: none;
    display: block;
    padding: 0.125rem 0;
    color: #ffffff60;
    transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
  }

  .section-nav a.active:hover,
  .section-nav a.active:focus {
    color: blue;
  }

  /** Poor man's reset **/
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: #fff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;

    padding: 0;
  }
  li {
    margin-left: -0.3rem;
    padding: 10px;
  }

  li.active {
    border-left: 5px solid #ffa900;
  }

  h2 {
    font-size: 16px;
    color: #ffffff;
  }

  /** page layout **/
  main {
    display: grid;
    grid-template-columns: 0.5fr 25em;
    max-width: 100em;
    width: 90%;
    margin: 0 auto;
  }

  /** enlarge the sections for this demo, so that we have a long scrollable page **/
  section {
    margin-bottom: 5rem;
    /* width: 180%; */
  }
`;

const FeatureTitle = styled.span`
  text-align: left;
  font: normal normal bold 32px/42px Montserrat;
  letter-spacing: 0px;
  color: #ffa900;
  text-transform: capitalize;
  opacity: 1;
`;

const ImageContainer = styled.div`
  .image1 {
    position: relative;
    z-index: 1;
  }
  .image2 {
    position: relative;
    left: -48%;
    z-index: 2;
  }
`;

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const FeatureSection = () => {
  const [visibleSection, setVisibleSection] = useState();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const sectionRefs = [
    { section: 'ref1', id: 'ref1', ref: ref1 },
    { section: 'ref2', id: 'ref2', ref: ref2 },
    { section: 'ref3', id: 'ref3', ref: ref3 },
    { section: 'ref4', id: 'ref4', ref: ref4 },
    { section: 'ref5', id: 'ref5', ref: ref5 },
    { section: 'ref6', id: 'ref6', ref: ref6 },
    { section: 'ref7', id: 'ref7', ref: ref7 },
    { section: 'ref8', id: 'ref8', ref: ref8 },
  ];
  console.log('vsection', visibleSection);
  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(ref1.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return (
            scrollPosition > offsetTop - 20 && scrollPosition < offsetBottom
          );
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  console.log('vis sec', visibleSection);

  /* window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('entry', entry);
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add('active');
        } else {
          document
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove('active');
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  }); */

  return (
    <Container>
      <h1>Unique Features</h1>
      <main>
        <nav class='section-nav'>
          <ol>
            <li
              id='ref1'
              onClick={() => {
                scrollTo(ref1.current);
              }}
              className={visibleSection === 'ref1' ? 'active' : ''}
            >
              <a>Zero Gas, Forever</a>
            </li>
            <li
              id='ref2'
              onClick={() => {
                scrollTo(ref2.current);
              }}
              className={visibleSection === 'ref2' ? 'active' : ''}
            >
              <a>The Best LPs Rewards</a>
            </li>
            <li
              id='ref3'
              onClick={() => {
                scrollTo(ref3.current);
              }}
              className={visibleSection === 'ref3' ? 'active' : ''}
            >
              <a>Fastest Settlements</a>
            </li>
            <li
              id='ref4'
              onClick={() => {
                scrollTo(ref4.current);
              }}
              className={visibleSection === 'ref4' ? 'active' : ''}
            >
              <a>DAO Powered</a>
            </li>
            <li
              id='ref5'
              onClick={() => {
                scrollTo(ref5.current);
              }}
              className={visibleSection === 'ref5' ? 'active' : ''}
            >
              <a>Decentralized Infrastructure</a>
            </li>
            <li
              id='ref6'
              onClick={() => {
                scrollTo(ref6.current);
              }}
              className={visibleSection === 'ref6' ? 'active' : ''}
            >
              <a>Multi-Protocol</a>
            </li>
            <li
              id='ref7'
              onClick={() => {
                scrollTo(ref7.current);
              }}
              className={visibleSection === 'ref7' ? 'active' : ''}
            >
              <a>Staking</a>
            </li>
            <li
              id='ref8'
              onClick={() => {
                scrollTo(ref8.current);
              }}
              className={visibleSection === 'ref8' ? 'active' : ''}
            >
              <a>Governance</a>
            </li>
          </ol>
        </nav>

        <div>
          <section id='1' ref={ref1}>
            <ImageContainer>
              <ZeroGasIcon
                id='zerogas'
                style={{ width: '104px', height: '120px' }}
              />
            </ImageContainer>
            <FeatureTitle style={{ color: '#FFA900' }}>
              Zero Gas, Forever
            </FeatureTitle>
            <h2>
              Thanks to Kadena’s gas stations, users will never have to pay gas
              to utilize Kaddex.
              <br /> Gas will always stay free because the Kadena blockchain
              scales horizontally, which means as the demand for block space
              goes up, we can increase the number of chains, increasing the
              number of available blocks.
            </h2>
          </section>
          <section id='2' ref={ref2}>
            <ImageContainer>
              <BestLPsIcon style={{ width: '93px', height: '120px' }} />
            </ImageContainer>
            <FeatureTitle style={{ color: '#ED1CB5' }}>
              The Best LPs Rewards
            </FeatureTitle>
            <h2>
              Kaddex provides unique LPs incentives that will attract new DeFi
              customers to our new network, thanks to the 40% of tokens
              allocated for incentivizing the network. When a swap is performed
              the user is charged a standard 0.3% trading fee, of which 100%
              goes to Liquidity Providers.
            </h2>
          </section>
          <section id='3' ref={ref3}>
            <ImageContainer>
              <FastestSettlementsIcon
                style={{ width: '110px', height: '128px' }}
              />
            </ImageContainer>
            <FeatureTitle style={{ color: '#39FFFC' }}>
              Fastest Settlements
            </FeatureTitle>
            <h2>
              Because Kadena has the ability to scale TPS infinitively, network
              congestion will never be a problem. This coupled with gas free
              transactions will ensure quick settlements and security, while
              providing the best possible users experience.
            </h2>
          </section>
          <section id='4' ref={ref4}>
            <ImageContainer>
              <DaoPowerIcon style={{ width: '183px', height: '120px' }} />
            </ImageContainer>
            <FeatureTitle style={{ color: '#FFA900' }}>
              DAO Powered
            </FeatureTitle>
            <h2>
              The Kaddex DAO will play a large role in how Kaddex operates,
              controlling the parameters for individual pools. On top of this,
              the DAO will have a strong focus on ecosystem development, working
              to help growing the entire Kadena blockchain.
            </h2>
          </section>
          <section id='5' ref={ref5}>
            <ImageContainer>
              <DecentralizedInfrastructureIcon
                style={{ width: '99px', height: '120px' }}
              />
            </ImageContainer>
            <FeatureTitle style={{ color: '#ED1CB5' }}>
              Decentralized Infrastructure
            </FeatureTitle>
            <h2>
              Kaddex lives up to the decentralized claim: everything from
              liquidity provision, pricing to swapping is done entirely
              on-chain, requires no intervention from off chain authorities or
              oracles, and is fully autonomous with no control by any central
              on-chain authority either.
            </h2>
          </section>
          <section id='6' ref={ref6}>
            <ImageContainer>
              <MultiProtocolIcon style={{ width: '211px', height: '120px' }} />
            </ImageContainer>
            <FeatureTitle style={{ color: '#39FFFC' }}>
              Multi-Protocol
            </FeatureTitle>
            <h2>
              Kaddex will be the only multi-protocol DEX with native
              decentralised bridges, leading to a future where users won’t have
              to even think about protocols, but just access value wherever it
              is.
            </h2>
          </section>
          <section id='7' ref={ref7}>
            <ImageContainer>
              <StakingIcon style={{ width: '76px', height: '120px' }} />
            </ImageContainer>
            <FeatureTitle style={{ color: '#FFA900' }}>Staking</FeatureTitle>
            <h2>
              KDX Stakers will earn 0.05% of all swaps happening on Kaddex,
              giving holders a simple way to earn passive income while still
              participating in governance.
            </h2>
          </section>
          <section id='8' ref={ref8}>
            <ImageContainer>
              <GovernanceIcon
                id='governance'
                style={{ width: '140px', height: '120px' }}
              />
            </ImageContainer>
            <FeatureTitle style={{ color: '#ED1CB5' }}>Governance</FeatureTitle>
            <h2>
              Kaddex is built on community, our governance system will give the
              users control of network incentives, protocol mechanics, and pool
              rewards, all while maintaining our approach to safe DeFi.
            </h2>
          </section>
        </div>
      </main>
    </Container>
  );
};

export default FeatureSection;
