import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import './MainContainer.css';
import { ReactComponent as ZeroGasIcon } from '../assets/images/shared/gru-feature.svg';
import { ReactComponent as BestLPsIcon } from '../assets/images/shared/cup-feature.svg';
import { ReactComponent as DaoPowerIcon } from '../assets/images/shared/dao-feature.svg';
import { ReactComponent as DecentralizedInfrastructureIcon } from '../assets/images/shared/decentralized-feature.svg';
import { ReactComponent as FastestSettlementsIcon } from '../assets/images/shared/fastest-feature.svg';
import { ReactComponent as MultiProtocolIcon } from '../assets/images/shared/multi-protocol-feature.svg';
import { ReactComponent as StakingIcon } from '../assets/images/shared/staking-feature.svg';
import { ReactComponent as GovernanceIcon } from '../assets/images/shared/governance-feature.svg';
import theme from '../styles/theme';
import useWindowSize from '../hooks/useWindowSize';

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
    margin-top: 100px;

    position: sticky;
    top: 100px;
    align-self: start;
  }

  /* 3. ScrollSpy active styles (see JS tab for activation) */
  /*  .section-nav div.active > a {
    color: #39fffc;
    font-weight: 500;
  } */

  /* Sidebar Navigation */
  .section-nav {
    ${({ screenHeight, sectionNavHeight }) => {
      if (screenHeight < sectionNavHeight + 200) {
        return css`
          padding-left: 180px;
        `;
      }
    }}

    /* border-left: 3.5px solid #ffffff60; */
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
      display: none !important;
    }
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

  div {
    /* margin-top: 60px; */
    /* margin-left: -0.2rem; */
    padding: 10px;
  }

  /* div.active {
    border-left: 5px solid #ffa900;
  } */

  h2 {
    font-size: 16px;
    color: #ffffff;
  }

  /** page layout **/
  main {
    display: flex;

    @media (min-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
      display: grid;
      grid-template-columns: 1.2fr 2fr;
      max-width: 100em;
      margin: 0 auto;
    }
  }

  /** enlarge the sections for this demo, so that we have a long scrollable page **/
  section {
    padding: 20px;
    scroll-margin-top: 100px;
    /* width: 180%; */
  }
`;

const FeatureTitle = styled.span`
  text-align: left;
  font: normal normal bold 32px/42px ${theme.fontFamily.bold};
  letter-spacing: 0px;
  color: #ffa900;
  text-transform: capitalize;
  opacity: 1;
`;

const FeatureText = styled.span`
  display: flex;
  text-align: left;
  font: normal normal medium 16px/26px ${theme.fontFamily.regular};
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: capitalize;
  opacity: 1;
`;

const ContainerTitle = styled.div`
  position: relative;
  top: 0;
  padding: 20px;
  margin-bottom: 30px;
  font: normal normal bold 48px/58px ${theme.fontFamily.bold};
  min-height: 80px;
  color: #fff;
  z-index: 10;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    position: relative;
    text-align: center;
  }
`;

const ImageContainer = styled.div``;

const SectionsContainer = styled.div`
  /* @media (min-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel}px`}) {
    margin-bottom: 530px;
  } */
`;

const SectionContainer = styled.div`
  /* -webkit-mask-image: linear-gradient(to top, red 100%, transparent 0%); */
  /* @media (min-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.mobilePixel}px`}) {
    ${({ visibleSection }) => {
    if (!visibleSection) {
      return css`
        opacity: 0.5;
        & > *:nth-last-child(-n + 2) {
          opacity: 0;
        }
      `;
    }
  }}
  } */
`;

const SectionMenuContainer = styled.div`
  a {
    font: normal normal bold 28px/38px ${theme.fontFamily.bold};
  }
`;

const Section = styled.section`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0.3')};
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    transition: opacity 0.2s linear 0.1s;
    opacity: ${({ isVisible, isBeforeActive }) => (isVisible ? '1' : '0.3')};
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

const FeatureSection = () => {
  const sections = [
    {
      section: 'ref1',
      id: 'ref1',
      sectionID: '1',
      color: '#FFA900',
      title: 'Zero Gas, Forever',
      image: (
        <ZeroGasIcon id='zerogas' style={{ width: '104px', height: '120px' }} />
      ),
      text: (
        <span>
          Thanks to Kadena’s gas stations, users will never have to pay gas to
          utilize Kaddex. <br /> Gas will always stay free because the Kadena
          blockchain scales horizontally, which means as the demand for block
          space goes up, we can increase the number of chains, increasing the
          number of available blocks.
        </span>
      ),
    },
    {
      section: 'ref2',
      id: 'ref2',
      sectionID: '2',
      color: '#ED1CB5',
      title: 'The Best LPs Rewards',
      image: <BestLPsIcon style={{ width: '93px', height: '120px' }} />,
      text: (
        <span>
          Kaddex provides unique LPs incentives that will attract new DeFi
          customers to our new network, thanks to the 40% of tokens allocated
          for incentivizing the network. When a swap is performed the user is
          charged a standard 0.3% trading fee, of which 100% goes to Liquidity
          Providers.
        </span>
      ),
    },
    {
      section: 'ref3',
      id: 'ref3',
      sectionID: '3',
      color: '#39FFFC',
      title: 'Fastest Settlements',
      image: (
        <FastestSettlementsIcon style={{ width: '110px', height: '128px' }} />
      ),
      text: (
        <span>
          Because Kadena has the ability to scale TPS infinitively, network
          congestion will never be a problem. This coupled with gas free
          transactions will ensure quick settlements and security, while
          providing the best possible users experience.
        </span>
      ),
    },
    {
      section: 'ref4',
      id: 'ref4',
      sectionID: '4',
      color: '#FFA900',
      title: 'DAO Powered',
      image: <DaoPowerIcon style={{ width: '183px', height: '120px' }} />,
      text: (
        <span>
          The Kaddex DAO will play a large role in how Kaddex operates,
          controlling the parameters for individual pools. On top of this, the
          DAO will have a strong focus on ecosystem development, working to help
          growing the entire Kadena blockchain.
        </span>
      ),
    },
    {
      section: 'ref5',
      id: 'ref5',
      sectionID: '5',
      color: '#ED1CB5',
      title: 'Decentralized Infrastructure',
      image: (
        <DecentralizedInfrastructureIcon
          style={{ width: '99px', height: '120px' }}
        />
      ),
      text: (
        <span>
          Kaddex lives up to the decentralized claim: everything from liquidity
          provision, pricing to swapping is done entirely on-chain, requires no
          intervention from off chain authorities or oracles, and is fully
          autonomous with no control by any central on-chain authority either.
        </span>
      ),
    },
    {
      section: 'ref6',
      id: 'ref6',
      sectionID: '6',
      color: '#39FFFC',
      title: 'Multi-Protocol',
      image: <MultiProtocolIcon style={{ width: '211px', height: '120px' }} />,
      text: (
        <span>
          Kaddex will be the only multi-protocol DEX with native decentralised
          bridges, leading to a future where users won’t have to even think
          about protocols, but just access value wherever it is.
        </span>
      ),
    },
    {
      section: 'ref7',
      id: 'ref7',
      sectionID: '7',
      color: '#FFA900',
      title: 'Staking',
      image: <StakingIcon style={{ width: '76px', height: '120px' }} />,
      text: (
        <span>
          KDX Stakers will earn 0.05% of all swaps happening on Kaddex, giving
          holders a simple way to earn passive income while still participating
          in governance.
        </span>
      ),
    },
    {
      section: 'ref8',
      id: 'ref8',
      sectionID: '8',
      color: '#ED1CB5',
      title: 'Governance',
      image: <GovernanceIcon style={{ width: '140px', height: '120px' }} />,
      text: (
        <span>
          Kaddex is built on community, our governance system will give the
          users control of network incentives, protocol mechanics, and pool
          rewards, all while maintaining our approach to safe DeFi.
        </span>
      ),
    },
  ];

  const ref = useRef();
  const [visibleSection, setVisibleSection] = useState(sections[0].sectionID);
  const [sectionNavHeight, setSectionNavHeight] = useState();
  const [screenWidth, screenHeight] = useWindowSize();

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(
        document.getElementById(sections[0].sectionID)
      );
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sections.find(({ section, sectionID }) => {
        const ele = document.getElementById(sectionID);
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          let offset = 0;
          /* if (screenWidth > theme.mediaQueries.mobilePixel) {
            const element = document
              .getElementById('features')
              .getBoundingClientRect();
            offset = element.height;
          } */
          return (
            scrollPosition + offset > offsetTop &&
            scrollPosition + offset < offsetBottom
          );
        }
      });

      if (selected && selected.sectionID !== visibleSection) {
        setVisibleSection(selected.sectionID);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    const sectionNav = document.getElementById('section-nav');
    if (sectionNav) {
      setSectionNavHeight(sectionNav.getBoundingClientRect().height);
    }
  }, [screenHeight, screenWidth]);

  return (
    <Container
      screenHeight={screenHeight}
      sectionNavHeight={sectionNavHeight}
      ref={ref}
    >
      <ContainerTitle id='features' isSafari={isSafari}>
        Unique Features
      </ContainerTitle>
      <main>
        <nav class='section-nav' id='section-nav'>
          {sections.map((s, i) => {
            return (
              <SectionMenuContainer
                key={i}
                color={s.color}
                className={visibleSection === s.sectionID ? 'active' : ''}
                onClick={() => setVisibleSection(s.sectionID)}
                style={{
                  transition: 'opacity 0.2s linear 0.1s',
                  borderLeft:
                    visibleSection === s.sectionID
                      ? `5px solid ${s.color}`
                      : '3.5px solid #ffffff60',
                }}
              >
                <a
                  href={`#${s.sectionID}`}
                  style={{
                    whiteSpace: 'nowrap',
                    color:
                      visibleSection === s.sectionID ? s.color : '#FFFFFF60',
                  }}
                >
                  {s.title}
                </a>
              </SectionMenuContainer>
            );
          })}
        </nav>

        <SectionsContainer id='sections-container'>
          <SectionContainer visibleSection={visibleSection}>
            {sections.map((s, i) => {
              const isBeforeActive =
                Number(s.sectionID) < Number(visibleSection);
              return (
                <Section
                  isBeforeActive={isBeforeActive}
                  isVisible={visibleSection === s.sectionID}
                  id={s.sectionID}
                  key={i}
                >
                  <ImageContainer
                    style={{ filter: `drop-shadow( 0 0 3px ${s.color})` }}
                  >
                    {s.image}
                  </ImageContainer>
                  <FeatureTitle style={{ color: s.color }}>
                    {s.title}
                  </FeatureTitle>
                  <FeatureText>{s.text}</FeatureText>
                </Section>
              );
            })}
          </SectionContainer>
        </SectionsContainer>
      </main>
    </Container>
  );
};

export default FeatureSection;
