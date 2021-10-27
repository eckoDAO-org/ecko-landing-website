import React from 'react';
import styled from 'styled-components/macro';
import Button from '../shared/Button';
import './MainContainer.css';
import GameEditionContainer from '../components/game-edition/GameEditionContainer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
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
  margin-top: 15px;
  margin-bottom: 25px;
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
    <Container>
      <TextContainer>
        <Title>Kaddex: the evolution of DeFi on Kadena</Title>
        <SubTitle>Safe DeFi begins with our Gas free DEX</SubTitle>
        <GameEditionContainer />
      </TextContainer>
      <Button
        hover={true}
        background='#FFFFFF 0% 0% no-repeat padding-box'
        border='1px solid #FFFFFF'
        color='#4C125A'
        buttonStyle={{ padding: '8px 45px' }}
        boxShadow='0 0 3px #FFFFFF'
        fontSize={14}
        onClick={() =>
          window.open(
            `https://swap.kaddex.com`,
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        Use Kaddex
      </Button>
    </Container>
  );
};

export default IntroductionSection;
