import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import GameEditionContainer from '../components/game-edition/GameEditionContainer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: calc(100vh - 56px);
  padding: 30px;
  /* overflow: auto; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Title = styled.span`
  text-align: center;
  font: normal normal bold 56px/64px montserrat-bold;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 28px montserrat-bold;
  }
`;

const SubTitle = styled.span`
  margin-top: 16px;
  margin-bottom: 60px;
  padding: 0px;
  text-align: center;
  font: normal normal normal 32px/40px montserrat-regular;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 18px montserrat-regular;
  }
`;

const IntroductionSection = () => {
  return (
    <Container id='intro'>
      <TextContainer>
        <Title>Kaddex: the evolution of DeFi on Kadena</Title>
        <SubTitle>Safe DeFi begins with our Gas free DEX</SubTitle>
        <GameEditionContainer />
      </TextContainer>
    </Container>
  );
};

export default IntroductionSection;
