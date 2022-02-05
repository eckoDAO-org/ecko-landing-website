import React from 'react';
import { ColumnContainer } from '../shared/Container';
import GameBoy from './GameBoy';
import IntroductionHeader from './IntroductionHeader';

const IntroductionSection = () => {
  return (
    <ColumnContainer id="introduction" style={{ width: '100%', marginTop: 100 }}>
      <IntroductionHeader />
      <GameBoy />
    </ColumnContainer>
  );
};

export default IntroductionSection;
