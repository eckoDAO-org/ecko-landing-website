import React from 'react';
import { STYColumnContainer } from '../shared/Container';
import GameBoy from './GameBoy';
import IntroductionHeader from './IntroductionHeader';

const Introduction = () => {
  return (
    <STYColumnContainer style={{ width: '100%', marginTop: 100 }}>
      <IntroductionHeader />
      <GameBoy />
    </STYColumnContainer>
  );
};

export default Introduction;
