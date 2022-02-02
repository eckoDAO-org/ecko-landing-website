import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import IntroductionSection from './IntroductionSection';
import RoadmapSection from './RoadmapSection';
import FeatureSection from './FeaturesSection';
import ProofDexContainer from '../components/shared/ProofDexCard';
import DiscordContainer from './DiscordContainer';
import TokenomicsContainer from './TokenomicsContainer';
import PartnersSection from './PartnersSection';
import Introduction from '../components/section-introduction/Introduction';
import ProofCard from '../components/section-proof/ProofCard';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  padding-bottom: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
  /* overflow: auto; */
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <Introduction />
      <ProofCard />
      {/* <ProofDexContainer />
      <FeatureSection />
      <DiscordContainer />
      <TokenomicsContainer />
      <RoadmapSection />
      <PartnersSection /> */}
    </OuterContainer>
  );
};

export default MainContainer;
