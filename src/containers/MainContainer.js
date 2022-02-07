import React from 'react';
import IntroductionSection from '../components/section-introduction/IntroductionSection';
import FeaturesSection from '../components/section-features/FeaturesSection';
import TokenomicsSection from '../components/section-tokenomics/TokenomicsSection';
import PartnersSection from '../components/section-partners/PartnersSection';
import ProofOfDexSection from '../components/section-proof-of-dex/ProofOfDexSection';
import DesktopRoadmap from '../components/roadmap/DesktopRoadmap';
import { FlexContainer } from '../components/shared/Container';

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <IntroductionSection />
      <ProofOfDexSection />
      <FeaturesSection />
      <TokenomicsSection />
      <DesktopRoadmap />
      <PartnersSection />
      {/* <RadiusBackground idRef="proof-dex" /> */}
    </FlexContainer>
  );
};

export default MainContainer;
