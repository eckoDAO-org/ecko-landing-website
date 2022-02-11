import React from 'react';
import { FlexContainer } from '../shared/Container';
import photoFrame from '../../assets/images/teams/photo-frame.png';

const PhotoFrame = ({ photo, size }) => {
  const config = {
    frameSize: size === 'small' ? 148 : 300,
    photoSize: size === 'small' ? 'calc(100% - 10px)' : 'calc(100% - 22px)',
  };
  return (
    <FlexContainer className="justify-ce align-ce" backgroundImage={photoFrame} style={{ height: config.frameSize, width: config.frameSize }}>
      <FlexContainer
        className="justify-ce align-ce"
        style={{ background: 'blue', height: config.photoSize, width: config.photoSize, borderRadius: '50%' }}
      >
        <img src={photo} style={{ height: '100%', width: '100%', borderRadius: '50%' }} alt="" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default PhotoFrame;
