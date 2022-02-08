import React from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from './Container';

const RadiusBox = styled.div`
  height: 100%;
  width: 40px;
  border: 1px solid;
  border-color: #23454d;
  opacity: 0.5;
  border-radius: 250px;
  position: absolute;
  z-index: -1;
`;

const RadiusBackground = ({ style }) => {
  return (
    <FlexContainer className="absolute" style={{ width: '100%', height: 1000, opacity: 0.5, zIndex: -1, ...style }}>
      <RadiusBox style={{ width: '200%' }} />
      <RadiusBox style={{ width: '200%', left: 143 }} />
      <RadiusBox style={{ width: '200%', left: 272 }} />
      <RadiusBox style={{ width: '200%', left: 383 }} />
    </FlexContainer>
  );
};

export default RadiusBackground;
