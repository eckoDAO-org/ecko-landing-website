import React from 'react';
import styled from 'styled-components';
import GameEditionWrapperWithButtons from './GameEditionWrapperWithButtons';

const MainContainer = styled.div`
  display: flex;
  width: 35%;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    width: 100%;
  }
  margin-bottom: 30px;
  justify-content: center;
`;

const GameEditionContainer = ({ children }) => {
  return (
    <MainContainer>
      <GameEditionWrapperWithButtons />
    </MainContainer>
  );
};

export default GameEditionContainer;
