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
      <FlexContainer className="w-100 justify-ce desktop-none" style={{ marginTop: 25 }}>
        <a href="/#proof-of-dex">
          <ArrowsDownIcon />
        </a>
      </FlexContainer>
    </FlexContainer>
  );
};

export default IntroductionSection;
