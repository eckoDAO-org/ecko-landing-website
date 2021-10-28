import React from 'react';
import styled from 'styled-components/macro';
import { KaddexLogo } from '../assets';
import './MainContainer.css';
import { ReactComponent as TwitterLogo } from '../assets/images/shared/twitter.svg';
import { ReactComponent as TelegramLogo } from '../assets/images/shared/telegram.svg';
import { ReactComponent as DiscordLogo } from '../assets/images/shared/discord.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background: #171b29;
  padding: 30px;
  /* overflow: auto; */
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    margin-top: 40px;
    flex-flow: column;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 1%;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  width: 100%;
`;

const PrivacyElement = styled.p`
  font: normal normal normal 14px/20px montserrat-regular;
`;

const FooterSection = () => {
  return (
    <Container>
      <FooterContainer>
        <KaddexLogo className='mobile-none' />
        <PrivacyElement className='mobile-none'>
          ©2021, Privacy Policy
        </PrivacyElement>

        <div className='desktop-none'>
          <KaddexLogo />
          <PrivacyElement>©2021, Privacy Policy</PrivacyElement>
        </div>

        <IconsContainer>
          <TwitterLogo
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                `https://twitter.com/KaddeXofficial`,
                '_blank',
                'noopener,noreferrer'
              )
            }
          />

          <TelegramLogo
            style={{ cursor: 'pointer', marginLeft: '4%' }}
            onClick={() =>
              window.open(
                `https://t.me/KaddeXofficial`,
                '_blank',
                'noopener,noreferrer'
              )
            }
          />
          <DiscordLogo
            style={{ cursor: 'pointer', marginLeft: '4%' }}
            onClick={() =>
              window.open(
                `https://discord.gg/QSJpHRFDcv`,
                '_blank',
                'noopener,noreferrer'
              )
            }
          />
        </IconsContainer>
      </FooterContainer>
    </Container>
  );
};

export default FooterSection;
