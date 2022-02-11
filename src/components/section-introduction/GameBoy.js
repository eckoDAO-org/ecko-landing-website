import React, { useEffect, useState } from 'react';
import gameboy from '../../assets/images/gameboy.json';
import Lottie from 'react-lottie-player';
import { FlexContainer } from '../shared/Container';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import RadiusBackground, { CircleBackground } from '../shared/RadiusBackground';

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
    <FlexContainer id="gameboy-container" className="relative justify-ce">
      <img src={tokenomicsBackground} style={{ position: 'absolute', height: 740, width: '100%', top: -50 }} alt="" />
      <CircleBackground style={{ width: '90%', height: 326, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <Lottie loop={false} animationData={gameboy} play={play} style={{ width: 843, height: width >= theme.mediaQueries.mobilePixel && 556 }} />
    </FlexContainer>
  );
};

export default GameBoy;
