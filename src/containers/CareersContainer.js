import React from 'react';
import CareerIntroduction from '../components/careers/CareerIntroduction';
import { FlexContainer } from '../components/shared/Container';
import Label from '../components/shared/Label';
import useWindowSize from '../hooks/useWindowSize';
import theme from '../styles/theme';

const CareersContainer = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer className="column">
      <CareerIntroduction />
    </FlexContainer>
  );
};

export default CareersContainer;
