import React from 'react';
import { FlexContainer } from '../shared/Container';
import GameBoy from './GameBoy';
import IntroductionHeader from './IntroductionHeader';

const IntroductionSection = () => {
  return (
    <FlexContainer id="introduction" className="column w-100">
      <IntroductionHeader />
      <GameBoy />
    </FlexContainer>
  );
};

export default IntroductionSection;
