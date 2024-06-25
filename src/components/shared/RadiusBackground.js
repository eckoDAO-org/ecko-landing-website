import React from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from './Container';

const RadiusBox = styled.div`
  height: 100%;
  border: 1px solid;
  border-color: #23454d;
  opacity: 0.5;
  border-radius: 250px;
  position: absolute;
  z-index: -1;
`;

const CircleBox = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid transparent; /*2*/
  background: ${({ theme: { colors } }) => `linear-gradient(170deg, ${colors.grey}, ${colors.grey}) border-box;`}; /*3*/
  /* background: linear-gradient(170deg, #ffd300, #ff00b8) border-box; */

  -webkit-mask: /*4*/ linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-out !important; /*5'*/
  mask-composite: exclude !important; /*5*/
  opacity: 0.5;
  border-radius: 250px;
  position: absolute;
  z-index: -1;
`;

const RadiusBackground = ({ style }) => {
  return (
    <FlexContainer className="absolute" style={{ width: '100%', height: 950, opacity: 0.5, zIndex: -1, ...style }}>
      <RadiusBox style={{ width: '200%' }} />
      <RadiusBox style={{ width: '200%', left: 143 }} />
      <RadiusBox style={{ width: '200%', left: 272 }} />
      <RadiusBox style={{ width: '200%', left: 383 }} />
    </FlexContainer>
  );
};

export const CircleBackground = ({ style }) => {
  return (
    <FlexContainer className="absolute" style={{ width: '100%', height: '100%', opacity: 0.5, zIndex: -1, ...style }}>
      <CircleBox />
      <CircleBox style={{ width: '90%', left: '50%', transform: 'translateX(-50%)' }} />
      <CircleBox style={{ width: '80%', left: '50%', transform: 'translateX(-50%)' }} />
      <CircleBox style={{ width: '70%', left: '50%', transform: 'translateX(-50%)' }} />
    </FlexContainer>
  );
};

export default RadiusBackground;
