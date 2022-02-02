import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import CustomParticles from './CustomParticles';
import DesktopHeader from './header/DesktopHeader';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';
import FooterSection from '../../containers/FooterSection';
import { TopUpIcon } from '../../assets';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0 50px;
`;

const PageContent = styled.div`
  position: relative;

  .sticky {
    position: fixed;
    background-color: rgba(7, 6, 16, 0.5);
    top: 0;
    width: 100%;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    /* background-color: rgba(255, 255, 255, 0.5);  */

    transition: all 0.5s ease;
    animation: smoothScrollIn 1s forwards;
  }

  .out {
    top: -56px;
    transition: all 0.5s ease;
    animation: smoothScrollOut 1s forwards;
  }

  @keyframes smoothScrollIn {
    0% {
      transform: translateY(-142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  @keyframes smoothScrollOut {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-142px);
    }
  }
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const StripesContainer = styled.div`
  position: ${({ isFooterVisible }) => (isFooterVisible ? 'absolute' : 'fixed')};
  bottom: 0px;
  left: 0;
  line-height: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    display: none;
  }
`;

const GoTopContainer = styled.div`
  display: ${({ topUpIconIsVisible }) => (topUpIconIsVisible ? 'block' : 'none')};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;

  transition: all 0.5s ease;
  animation: smoothOut 1s;

  @keyframes smoothOut {
    0% {
      transform: translateY(142px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  &:hover {
    opacity: 1;
    text-shadow: 0 0 5px #ffffff;
  }
`;

const ButtonIcon = styled('button')`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: transparent;
`;

const Layout = ({ children }) => {
  return (
    <MainContainer id="main-container">
      <CustomParticles />
      <PageContent>
        <DesktopHeader />

        <MainContent>{children}</MainContent>
      </PageContent>

      <FooterSection />
    </MainContainer>
  );
};

export default Layout;
