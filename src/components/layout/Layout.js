import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import CustomParticles from './CustomParticles';
import DesktopHeader from './header/DesktopHeader';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';
import FooterSection from '../../containers/FooterSection';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
  const [IsHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const proof = document
        .getElementById('ProofofDex')
        .getBoundingClientRect().top;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      if (proof >= 0) setIsHeaderVisible(false);
      else setIsHeaderVisible(scrollY > lastScrollY ? false : true);

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // console.log(IsHeaderVisible);

    return () => window.removeEventListener('scroll', onScroll);
  }, [IsHeaderVisible]);

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
  };

  return (
    <MainContainer id='main-container'>
      <CustomParticles />
      <PageContent>
        {IsHeaderVisible && (
          <DesktopHeader
            IsHeaderVisible={IsHeaderVisible}
            className={IsHeaderVisible ? 'sticky' : 'out'}
          />
        )}
        <DesktopHeader IsHeaderVisible={IsHeaderVisible} />
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
