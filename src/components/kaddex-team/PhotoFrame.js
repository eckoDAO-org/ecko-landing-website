import React from 'react';
import { FlexContainer } from '../shared/Container';
import photoFrame from '../../assets/images/kaddex-team/photo-frame.png';
import user from '../../assets/images/kaddex-team/user.png';

const PhotoFrame = ({ photo, size }) => {
  const getConfig = () => {
    switch (size) {
      case 'big':
        return {
          frameSize: 200,
          photoSize: 'calc(100% - 14px)',
        };
      case 'normal':
        return {
          frameSize: 148,
          photoSize: 'calc(100% - 10px)',
        };
      case 'small':
        return {
          frameSize: 120,
          photoSize: 'calc(100% - 8px)',
        };
      case 'tiny':
        return {
          frameSize: 80,
          photoSize: 'calc(100% - 4px)',
        };
      case 'nano':
        return {
          frameSize: 70,
          photoSize: 'calc(100% - 4px)',
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
        style={{ background: '#909090', height: getConfig().photoSize, width: getConfig().photoSize, borderRadius: '50%' }}
      >
        <img src={photo || user} style={{ height: '100%', width: '100%', borderRadius: '50%' }} alt={''} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default PhotoFrame;
