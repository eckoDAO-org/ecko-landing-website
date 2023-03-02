import React, { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import theme from '../../styles/theme';
import { CircleBackground } from '../shared/RadiusBackground';
import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import gameboy_eckoDEX from '../../assets/images/game-edition/gameboy_eckoDEX.png';

/* const lottieDefaultOptions = {
  loop: false,
  autoplay: false,
  animationData: gameEdition,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}; */

const GameEdition = () => {
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
    <FlexContainer id="game-edition-container" className="relative justify-ce">
      <img src={tokenomicsBackground} style={{ position: 'absolute', height: 740, width: '100%', top: -50 }} alt="" />
      <CircleBackground
        style={{
          width: '80%',
          height: '50%',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)${width < theme.mediaQueries.mobilePixel ? ' rotate(90deg)' : ''}`,
        }}
      />
      <img
        src={gameboy_eckoDEX}
        style={{ position: 'relative', width: width >= theme.mediaQueries.mobilePixel ? '50%' : '100%', height: '50%' }}
        alt="game-edition"
      />

      {/* <Lottie
        animationData={lottieDefaultOptions.animationData}
        loop={lottieDefaultOptions.loop}
        autoPlay={lottieDefaultOptions.autoplay}
        rendererSettings={lottieDefaultOptions.rendererSettings}
        isPaused={lottieOptions.isPaused}
        isStopped={lottieOptions.isStopped}
        style={{
          width: width >= theme.mediaQueries.mobilePixel && '50%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      /> */}
    </FlexContainer>
  );
};

export default GameEdition;
