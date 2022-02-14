import React from 'react';
import CareerIntroduction from '../components/careers/CareerIntroduction';
import JobPositions from '../components/careers/JobPositions';
import { FlexContainer } from '../components/shared/Container';

const CareersContainer = () => {
  return (
    <FlexContainer className="column">
      <CareerIntroduction />
      <JobPositions />
    </FlexContainer>
  );
};

export default CareersContainer;
