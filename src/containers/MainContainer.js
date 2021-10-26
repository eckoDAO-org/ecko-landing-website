import React from 'react';
import styled from 'styled-components/macro';
import Button from '../shared/Button';
import { KaddexLogo } from '../assets';
import './MainContainer.css';
import { ReactComponent as TwitterLogo } from '../assets/images/shared/twitter.svg';
import { ReactComponent as TelegramLogo } from '../assets/images/shared/telegram.svg';
import { ReactComponent as DiscordLogo } from '../assets/images/shared/discord.svg';
import GameEditionContainer from '../components/game-edition/GameEditionContainer';
import IntroductionSection from './IntroductionSection';
import RoadmapSection from './RoadmapSection';
import FooterSection from './FooterSection';
import FeatureSection from './FeaturesSection';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  /* overflow: auto; */
`;

const MainContainer = () => {
  return (
    <OuterContainer>
      <IntroductionSection />
      <FeatureSection />
      <RoadmapSection />
      <FooterSection />
    </OuterContainer>
  );
};

export default MainContainer;
