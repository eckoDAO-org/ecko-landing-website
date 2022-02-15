import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { ModalContext } from '../../context/ModalContext';
import useWindowSize from '../../hooks/useWindowSize';
import Lottie from 'react-lottie';
import { FlexContainer } from '../shared/Container';
import theme from '../../styles/theme';
import ReactPlayer from 'react-player';
import gameboy from '../../assets/images/gameboy.json';
import kaddexVideo from '../../assets/images/kaddex-video.mp4';
import { CircleBackground } from '../shared/RadiusBackground';
import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import { PlayIcon } from '../../assets';

const ButtonPlayContainer = styled(FlexContainer)`
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  transform: translate(-66%, 32%);
  svg {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) and (min-width: 500px) {
    transform: translate(-64%, 0%);
    svg {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 500px) and (min-width: 400px) {
    transform: translate(-64%, -10%);
    svg {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 400px) {
    transform: translate(-64%, -20%);
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

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
  const [showVideo, setShowVideo] = useState(false);
  const modalContext = useContext(ModalContext);

  const setEvent = () => {
    setLottieOptions({ isStopped: false, isPaused: false });
  };
  useEffect(() => {
    window.addEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
    return () => window.removeEventListener(width < theme.mediaQueries.desktopPixel ? 'scroll' : 'wheel', setEvent);
  }, [width]);

  const videoRef = useRef(null);

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
            callback: () => setShowVideo(true),
          },
        ]}
        style={{ width: 843, height: width >= theme.mediaQueries.mobilePixel && 556 }}
      />

      {showVideo && (
        <ButtonPlayContainer
          className="absolute pointer"
          onClick={() => {
            modalContext.openModal({
              content: <ReactPlayer ref={videoRef} url={kaddexVideo} playing controls width={width - width * 0.4} height="auto" />,
            });
          }}
        >
          <PlayIcon />
        </ButtonPlayContainer>
      )}
    </FlexContainer>
  );
};

export default GameBoy;
