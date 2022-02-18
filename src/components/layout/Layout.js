import React from 'react';
import styled from 'styled-components/macro';
import Header from './header/Header';
import FooterSection from './footer/FooterSection';
import introductionBackground from '../../assets/images/backgrounds/introduction-background.png';
import { FlexContainer } from '../shared/Container';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { ROUTE_INDEX } from '../../router/routes';
import { useEffect, useState } from 'react/cjs/react.development';
import { GoTopIcon } from '../../assets';

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const GoTopButton = styled.div`
  display: ${({ isSticky }) => (isSticky ? 'block' : 'none')};
  position: fixed;
  bottom: 10px;
  right: 10px;
  line-height: 0;
  opacity: 0.8;
  cursor: pointer;

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

const Layout = ({ children }) => {
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleIsSticky);
    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, []);

  const handleIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };

  // useEffect(() => {
  //   if (isSticky) {
  //     setTimeout(() => {
  //       setIsSticky(false);
  //     }, 3000);
  //   }
  // }, [isSticky]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FlexContainer className="w-100 h-100 relative" id="main-container">
      <img
        src={introductionBackground}
        style={{ position: 'absolute', zIndex: -1, height: location?.pathname !== ROUTE_INDEX ? '100%' : 1375, width: '100%' }}
        alt=""
      />
      <Header isSticky={isSticky} />
      <MainContent>{children}</MainContent>
      <FooterSection />

      <GoTopButton isSticky={isSticky} onClick={goToTop}>
        <GoTopIcon />
      </GoTopButton>
    </FlexContainer>
  );
};

export default Layout;
