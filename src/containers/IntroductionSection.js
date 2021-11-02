import React, { useState } from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import GameEditionContainer from '../components/game-edition/GameEditionContainer';
import { ArrowDownIcon } from '../assets';

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

const BottomTitle = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 16px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
  }

  color: #ffffff;
  margin-top: 32px;
  margin-bottom: 24px;

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: #ffffff;
    height: 3px;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
      width: 0;
    }
  }
`;

const Link = styled.a`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    font-size: 16px !important;
    text-decoration: underline;
  }
`;

const IntroductionSection = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container id='intro'>
      <TextContainer>
        <Title>Kaddex the evolution of DeFi on Kadena</Title>
        <SubTitle>Safe DeFi begins with our Gas free DEX</SubTitle>
        <GameEditionContainer />
      </TextContainer>
      <BottomTitle isHover={isHover}>
        Built on{' '}
        <Link
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href='https://kadena.io/'
          target='_blank'
        >
          Kadena <div className='underline'></div>
        </Link>
      </BottomTitle>
      <a href='#proof_of_dex'>
        <ArrowDownIcon />
      </a>
    </Container>
  );
};

export default IntroductionSection;
