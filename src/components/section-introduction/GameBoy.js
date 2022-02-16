import React, { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Lottie from 'react-lottie';
import { FlexContainer } from '../shared/Container';
import theme from '../../styles/theme';
import gameboy from '../../assets/images/gameboy.json';
import { CircleBackground } from '../shared/RadiusBackground';
import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
const lottieDefaultOptions = {
  loop: false,
  autoplay: false,
  animationData: gameboy,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const GameBoy = () => {
  const [width] = useWindowSize();
  const [lottieOptions, setLottieOptions] = useState({ isStopped: true, isPaused: true });

  const setEvent = () => {
    setLottieOptions({ isStopped: false, isPaused: false });
  };
  useEffect(() => {
    window.addEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
    return () => window.removeEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
  }, [width]);

  return (
    <FlexContainer id="gameboy-container" className="relative justify-ce">
      <img src={tokenomicsBackground} style={{ position: 'absolute', height: 740, width: '100%', top: -50 }} alt="" />
      <CircleBackground
        style={{
          width: width < theme.mediaQueries.mobilePixel ? '100%' : '90%',
          height: width < theme.mediaQueries.mobilePixel ? 120 : 326,
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)${width < theme.mediaQueries.mobilePixel ? ' rotate(90deg)' : ''}`,
        }}
      />

      <Lottie
        options={{ ...lottieDefaultOptions }}
        {...lottieOptions}
        eventListeners={[
          {
            eventName: 'complete',
          },
        ]}
        style={{ width: 843, height: width >= theme.mediaQueries.mobilePixel && 556 }}
      />
    </FlexContainer>
  );
};

export default GameBoy;
