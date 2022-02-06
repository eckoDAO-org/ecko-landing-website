import React from 'react';
import gameboy from '../../assets/images/gameboy.png';
import { FlexContainer } from '../shared/Container';

const GameBoy = () => {
  return (
    <FlexContainer className="justify-ce">
      <img src={gameboy} alt="" style={{ width: '100%' }} />
    </FlexContainer>
  );
};

export default GameBoy;
