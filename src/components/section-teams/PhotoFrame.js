import React from 'react';
import { FlexContainer } from '../shared/Container';
import photoFrame from '../../assets/images/teams/photo-frame.png';

const PhotoFrame = ({ photo, size }) => {
  const getConfig = () => {
    switch (size) {
      case 'small':
        return {
          frameSize: 148,
          photoSize: 'calc(100% - 10px)',
        };
      case 'tiny':
        return {
          frameSize: 120,
          photoSize: 'calc(100% - 8px)',
        };
      default:
        return {
          frameSize: 300,
          photoSize: 'calc(100% - 22px)',
        };
    }
  };

  return (
    <FlexContainer
      className="justify-ce align-ce"
      backgroundImage={photoFrame}
      style={{ height: getConfig().frameSize, width: getConfig().frameSize }}
    >
      <FlexContainer
        className="justify-ce align-ce"
        style={{ background: 'blue', height: getConfig().photoSize, width: getConfig().photoSize, borderRadius: '50%' }}
      >
        <img src={photo} style={{ height: '100%', width: '100%', borderRadius: '50%' }} alt="" />
      </FlexContainer>
    </FlexContainer>
  );
};

export default PhotoFrame;
