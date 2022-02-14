import React from 'react';
import { ArrowsDownIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import GameBoy from './GameBoy';
import IntroductionHeader from './IntroductionHeader';

const IntroductionSection = () => {
  return (
    <FlexContainer id="introduction" className="column w-100">
      <IntroductionHeader />

      <GameBoy />
      <a href="/#proof-of-dex">
        <FlexContainer className="w-100 justify-ce mobile-only" style={{ marginTop: 25 }}>
          <ArrowsDownIcon />
        </FlexContainer>
      </a>
    </FlexContainer>
  );
};

export default IntroductionSection;
