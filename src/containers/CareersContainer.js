import React from 'react';
import CareerIntroduction from '../components/careers/CareerIntroduction';
import JobPositions from '../components/careers/JobPositions';
import { FlexContainer } from '../components/shared/Container';
import tokenomicsBackground from '../assets/images/backgrounds/gradient-background.png';

const CareersContainer = () => {
  return (
    <FlexContainer className="column relative">
      <img src={tokenomicsBackground} style={{ position: 'absolute', width: '100%', zIndex: -1 }} alt="" />

      <CareerIntroduction />
      <JobPositions />
    </FlexContainer>
  );
};

export default CareersContainer;
