import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import Lottie from 'react-lottie';
import { FlexContainer } from '../shared/Container';
import theme from '../../styles/theme';

import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import { CircleBackground } from '../shared/RadiusBackground';
import gameboy from '../../assets/images/gameboy.json';
import kaddexVideo from '../../assets/images/kaddex-video.mp4';

const Container = styled(FlexContainer)`
  video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-51.5%, -62%);
    transition: opacity 0.5s;
    opacity: ${({ showVideo }) => (showVideo ? 1 : 0)};
  }
`;

const GameBoy = () => {
  const [width] = useWindowSize();
  const [lottieOptions, setLottieOptions] = useState({ isStopped: true, isPaused: true });
  const [showVideo, setShowVideo] = useState(false);

  const setEvent = () => {
    setLottieOptions({ isStopped: false, isPaused: false });
  };
  useEffect(() => {
    window.addEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
    return () => window.removeEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
  }, [width]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: gameboy,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container id="gameboy-container" className="relative justify-ce" showVideo={showVideo}>
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
        options={{ ...defaultOptions }}
        {...lottieOptions}
        eventListeners={[
          {
            eventName: 'complete',
            callback: () => setShowVideo(true),
          },
        ]}
        style={{ width: 843, height: width >= theme.mediaQueries.mobilePixel && 556 }}
      />

      <video
        width={width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.32 : 340}
        height={width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.4 : 340}
        controls={showVideo}
      >
        <source src={kaddexVideo} type="video/mp4" />
      </video>
    </Container>
  );
};

export default GameBoy;
