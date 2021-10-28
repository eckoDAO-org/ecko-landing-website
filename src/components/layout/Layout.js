import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import CustomParticles from './CustomParticles';
import DesktopHeader from './header/DesktopHeader';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';
import FooterSection from '../../containers/FooterSection';
import useIntersection from '../../hooks/useOnScreen';
import useOnScreen from '../../hooks/useOnScreen';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const PageContent = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const StripesContainer = styled.div`
  position: ${({ isFooterVisible }) =>
    isFooterVisible ? 'absolute' : 'fixed'};
  bottom: 0px;
  left: 0;
  line-height: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (
      window.innerHeight >=
      document.getElementById('footer').getBoundingClientRect().top
    ) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
    console.log(`Hidden element is now visible`);
  };

  return (
    <MainContainer id='main-container'>
      <CustomParticles />
      <PageContent>
        <DesktopHeader />
        <MainContent>{children}</MainContent>
        <StripesContainer isFooterVisible={isFooterVisible}>
          <Stripes />
        </StripesContainer>
      </PageContent>
      <FooterSection />
    </MainContainer>
  );
};

export default Layout;
