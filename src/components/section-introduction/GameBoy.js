import React, { useEffect, useState } from 'react';
import gameboy from '../../assets/images/gameboy.json';
import Lottie from 'react-lottie-player';
import { FlexContainer } from '../shared/Container';
import gradientBackground from '../../assets/images/backgrounds/gradient-background.png';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

const GameBoy = () => {
  const [width] = useWindowSize();
  const [play, setPlay] = useState(false);

  const setEvent = () => {
    setPlay(true);
  };
  useEffect(() => {
    window.addEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
    return () => window.removeEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
  }, [width]);
  return (
    <FlexContainer className="relative justify-ce">
      <img src={gradientBackground} style={{ position: 'absolute', height: 540, width: '100%' }} alt="" />

      <Lottie loop={false} animationData={gameboy} play={play} style={{ width: 843, height: 556 }} />
    </FlexContainer>
  );
};

export default GameBoy;
