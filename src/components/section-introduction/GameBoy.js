import React from 'react';
import gameboy from '../../assets/images/gameboy.png';
import { STYFlexContainer } from '../shared/Container';

const GameBoy = () => {
  return (
    <STYFlexContainer className="justify-ce">
      <img src={gameboy} alt="" />
    </STYFlexContainer>
  );
};

export default GameBoy;
