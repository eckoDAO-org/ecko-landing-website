import React from 'react';
import gameboy from '../../assets/images/gameboy.png';
import { STYRowContainer } from '../shared/Container';

const GameBoy = () => {
  return (
    <STYRowContainer className="justify-ce">
      <img src={gameboy} alt="" />
    </STYRowContainer>
  );
};

export default GameBoy;
