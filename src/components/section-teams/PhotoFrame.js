import React from 'react';
import { FlexContainer } from '../shared/Container';
import photoFrame from '../../assets/images/teams/photo-frame.png';

const PhotoFrame = ({ style }) => {
  return (
    <FlexContainer className="justify-ce align-ce" backgroundImage={photoFrame} style={{ height: 320, width: 320, ...style }}>
      <FlexContainer
        className="justify-ce align-ce"
        style={{ background: 'blue', height: 'calc(100% - 24px)', width: 'calc(100% - 24px)', borderRadius: '50%' }}
      >
        photo
      </FlexContainer>
    </FlexContainer>
  );
};

export default PhotoFrame;
