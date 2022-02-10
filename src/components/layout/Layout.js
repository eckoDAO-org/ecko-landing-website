import React from 'react';
import styled from 'styled-components/macro';
import Header from './header/Header';
import FooterSection from './footer/FooterSection';
import introductionBackground from '../../assets/images/backgrounds/introduction-background.png';
import { FlexContainer } from '../shared/Container';

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <FlexContainer className="w-100 h-100 relative" id="main-container">
      <img src={introductionBackground} style={{ position: 'absolute', zIndex: -1, height: 1375, width: '100%' }} alt="" />
      <Header />
      <MainContent>{children}</MainContent>
      <FooterSection />
    </FlexContainer>
  );
};

export default Layout;
