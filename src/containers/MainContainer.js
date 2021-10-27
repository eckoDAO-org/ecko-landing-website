import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import IntroductionSection from './IntroductionSection';
import RoadmapSection from './RoadmapSection';
import FooterSection from './FooterSection';
import FeatureSection from './FeaturesSection';
import ProofDexContainer from './ProofDexContainer';
import DiscordContainer from './DiscordContainer';
import TokenomicsContainer from './TokenomicsContainer';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
  /* overflow: auto; */
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <IntroductionSection />
      <ProofDexContainer />
      <FeatureSection />
      <DiscordContainer />
      <TokenomicsContainer />
      <RoadmapSection />
      <FooterSection />
    </OuterContainer>
  );
};

export default MainContainer;
