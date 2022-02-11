import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled, { css } from 'styled-components/macro';
import { KaddexLogo } from '../../../assets';
import useWindowSize from '../../../hooks/useWindowSize';
import { ROUTE_INDEX } from '../../../router/routes';
import { FlexContainer } from '../../shared/Container';
import NavigationItems, { NavigationItem } from '../footer/NavigationItems';
import Hamburger from './Hamburger';

const Container = styled(FlexContainer)`
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 50px;

  z-index: 10;

  ${({ isSticky }) => {
    if (isSticky) {
      return css`
        left: 0px;
        padding: 2em 50px;
        width: 100%;
        position: fixed;
        background-color: rgba(7, 6, 16, 0.5);
        top: 0;

        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);

        transition: all 0.5s ease;
        animation: smoothScrollIn 1s forwards;
      `;
    }
  }}
  &.is-sticky {
  }

  .kaddex-logo {
    cursor: pointer;
    margin-right: 30%;
    @media (max-width: 1120px) and (min-width: 1050px) {
      margin-right: 25%;
    }
    @media (max-width: 1050px) and (min-width: 960px) {
      margin-right: 20%;
    }
    @media (max-width: 960px) and (min-width: 870px) {
      margin-right: 15%;
    }
    @media (max-width: 870px) and (min-width: 830px) {
      margin-right: 10%;
    }
    @media (max-width: 830px) and (min-width: 800px) {
      margin-right: 5%;
    }
    @media (max-width: 799px) {
      margin-right: unset;
    }
  }
`;

const Header = () => {
  const history = useHistory();
  const [width] = useWindowSize();

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleIsSticky);
    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, []);

  /* Method that will fix header after a specific scrollable */
  const handleIsSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };
  const goToTop = () => {
    history.push(ROUTE_INDEX);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Container desktopPixel={800} className="align-ce" tabletClassName="justify-ce" mobileClassName="justify-ce" id="header-section">
        <KaddexLogo className="kaddex-logo" onClick={goToTop} />
        {width >= 800 && (
          <FlexContainer className="align-ce" gap={24}>
            <NavigationItems />
          </FlexContainer>
        )}
        {width < 800 && <Hamburger />}
      </Container>

      {isSticky && (
        <Container desktopPixel={800} className="align-ce" tabletClassName="justify-ce" mobileClassName="justify-ce" isSticky={isSticky}>
          <KaddexLogo className="kaddex-logo" onClick={goToTop} />
          {width >= 800 && (
            <FlexContainer className="align-ce" gap={24}>
              <NavigationItems />
            </FlexContainer>
          )}
          {width < 800 && <Hamburger />}
        </Container>
      )}
    </div>
  );
};

export default Header;
