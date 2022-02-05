import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from './Container';

const RadiusBox = styled.div`
  height: 100%;
  width: 40px;
  border: 1px solid;
  border-color: red;
  opacity: 0.5;
  border-radius: 250px;
  position: absolute;
  z-index: -1;
`;

const RadiusBackground = ({ idRef }) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const element = document.getElementById(idRef);
    setTop(element.offsetTop + element.clientHeight / 2);
    console.log('element', element.clientHeight / 2);
  }, [idRef]);

  console.log('top', top);
  return (
    <FlexContainer className="absolute" style={{ width: '100%', height: 2000, top }}>
      <RadiusBox style={{ width: '200%' }} />
      <RadiusBox style={{ width: '200%', left: 143 }} />
      <RadiusBox style={{ width: '200%', left: 272 }} />
      <RadiusBox style={{ width: '200%', left: 383 }} />
    </FlexContainer>
  );
};

export default RadiusBackground;
