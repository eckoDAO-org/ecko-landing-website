import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import Introduction from '../components/section-introduction/Introduction';
import ProofCard from '../components/section-proof/ProofCard';
import FeatureSection from '../components/section-features/FeaturesSection';

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
      <FeatureSection />
      {/* <RadiusBackground idRef="proof-dex" /> */}
    </OuterContainer>
  );
};

export default MainContainer;
