import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import Lottie from 'react-lottie';
import { FlexContainer } from '../shared/Container';
import theme from '../../styles/theme';
import ReactPlayer from 'react-player';

import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import { CircleBackground } from '../shared/RadiusBackground';
import gameboy from '../../assets/images/gameboy.json';
import kaddexVideo from '../../assets/images/kaddex-video.mp4';

const Container = styled(FlexContainer)`
  input[type='range'][orient='vertical'] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 8px;
    height: 175px;
    padding: 0 5px;
  }
`;

const VideoFlexContainer = styled(FlexContainer)`
  transition: opacity 0.5s;
  ${({ videoSize }) => console.log('videoSize', videoSize)}

  z-index: 10;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${({ videoSize }) => {
    console.log('videoSize', videoSize);
    return `translate(-51.5%,${videoSize === 'medium' ? '-50%' : '-71.5%'})`;
  }};

  opacity: ${({ showVideo }) => (showVideo ? 1 : 0)};

  video {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

// const initialVideoState = {
//   url: kaddexVideo,
//   playing: false,
//   controls: false,
//   volume: 0.8,
//   muted: false,
//   played: 0,
//   loaded: 0,
//   duration: 0,
//   playbackRate: 1.0,
//   loop: false,
// };

const GameBoy = () => {
  const [width] = useWindowSize();
  const [lottieOptions, setLottieOptions] = useState({ isStopped: true, isPaused: true });
  const [showVideo, setShowVideo] = useState(false);

  const [videoState, setVideoState] = useState(false);

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

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      console.log('ref', videoRef.current.getCurrentTime());
      console.log('ref', videoRef.current.getDuration());
    }
  }, [videoRef]);

  const handlePlayPause = () => {
    setVideoState((prev) => ({ ...prev, playing: !prev.playing }));
  };

  const handleStop = () => {
    setVideoState((prev) => ({ ...prev, playing: false }));
  };

  const handlePlay = () => {
    console.log('onPlay');
    setVideoState((prev) => ({ ...prev, playing: true }));
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setVideoState((prev) => ({ ...prev, playing: true, duration }));
  };

  const handleProgress = (state) => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!videoState.seeking) {
      setVideoState((prev) => ({ ...prev, ...state }));
    }
  };

  const handleSeekChange = (e) => {
    setVideoState((prev) => ({ ...prev, played: parseFloat(e.target.value) }));
  };

  const handleVolumeChange = (e) => {
    setVideoState((prev) => ({ ...prev, volume: parseFloat(e.target.value) }));
  };

  const [videoSize, setVideoSize] = useState({ width: 343, size: 'small' });

  // useEffect(() => {
  //   if (width) {
  //     const w = width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.32 : 340;
  //     const h = width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.4 : 340;
  //     setVideoSize({ width: w, height: h, size: 'small' });
  //   }
  // }, [width]);

  useEffect(() => {
    setVideoState(true);
  }, [videoSize]);

  return (
    <Container id="gameboy-container" className="relative justify-ce">
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
      {console.log('ttt', videoState)}

      <VideoFlexContainer
        className="video-container column"
        videoSize={videoSize.size}
        showVideo={showVideo}
        style={{
          width: videoSize?.width,
          height: videoSize?.height,
          // height: videoSize?.height,
        }}
        onClick={() => {
          if (showVideo) {
            if (videoSize.size === 'small') {
              setVideoSize({ width: width - 250, size: 'medium' });
            }
            if (videoSize.size === 'medium') {
              setVideoSize({ width: 343, height: null, size: 'small' });
            }
          }
        }}
      >
        {/* <video
        
        >
          <source src={kaddexVideo} type="video/mp4" />
        </video> */}
        {/* {console.log('width', videoSize)} */}
        <ReactPlayer
          ref={videoRef}
          url={kaddexVideo}
          pip={false}
          playing={videoState}
          // onProgress={handleProgress}
          // onDuration={handleDuration}
          // handleSeekChange={handleSeekChange}
          controls={videoState}
          width="100%"
          height="100%"
        />
        <FlexContainer>
          {/* <VideoTimeer videoState={videoState} /> */}
          {/* <button
            onClick={() => {
              if (videoSize.size === 'small') {
                setVideoSize({ width: '60%', height: '80%', size: 'medium' });
              }
              if (videoSize.size === 'medium') {
                const w = width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.32 : 340;
                const h = width < theme.mediaQueries.mobilePixel ? width / 2 - (width / 2) * 0.4 : 340;
                setVideoSize({ width: 340, height: 190, size: 'small' });
              }
            }}
          >
            mid-screen
          </button>
          <input type="range" min={0} max={1} step="any" orient="vertical" value={videoState.volume} onChange={handleVolumeChange} /> */}
        </FlexContainer>
      </VideoFlexContainer>
    </Container>
  );
};

const VideoTimeer = ({ videoState }) => {
  const minutes = Math.floor(videoState.duration / 60);
  const seconds = videoState.duration - minutes * 60;

  const playedMinutes = Math.floor(videoState.playedSeconds / 60);
  const playedSeconds = videoState.playedSeconds - playedMinutes * 60;

  return (
    <div>
      {playedMinutes}:{Math.round(playedSeconds) < 10 ? `0${Math.round(playedSeconds)}` : Math.round(playedSeconds)} /{minutes}:{Math.round(seconds)}
    </div>
  );
};

export default GameBoy;
