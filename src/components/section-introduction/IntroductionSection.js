import React from 'react';
import { ArrowsDownIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import GameEdition from './GameEdition';
import IntroductionHeader from './IntroductionHeader';

const IntroductionSection = () => {
  return (
    <FlexContainer id="introduction" className="column w-100">
      <IntroductionHeader />

      <GameEdition />
      <a href="/#proof-of-dex" style={{ zIndex: 1 }}>
        <FlexContainer className="w-100 justify-ce mobile-only" style={{ marginTop: 25 }}>
          <ArrowsDownIcon />
        </FlexContainer>
      </a>
    </FlexContainer>
  );
};

export default IntroductionSection;
