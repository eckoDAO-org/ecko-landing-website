import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import IntroductionSection from '../components/section-introduction/IntroductionSection';
import FeatureSection from '../components/section-features/FeaturesSection';
import TokenomicsSection from '../components/section-tokenomics/TokenomicsSection';
import PartnersSection from '../components/section-partners/PartnersSection';
import ProofOfDexSection from '../components/section-proof-of-dex/ProofOfDexSection';

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
      <IntroductionSection />
      <ProofOfDexSection />
      <FeatureSection />
      {/* <TokenomicsSection /> */}
      {/* <PartnersSection /> */}

      {/* <RadiusBackground idRef="proof-dex" /> */}
    </OuterContainer>
  );
};

export default MainContainer;
