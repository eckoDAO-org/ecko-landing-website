import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled, { css } from 'styled-components/macro';
import { KaddexLogo } from '../../../assets';
import { ROUTE_INDEX } from '../../../router/routes';
import { FlexContainer } from '../../shared/Container';
import Hamburger from './Hamburger';
import HeaderItems from './HeaderItems';

const Container = styled(FlexContainer)`
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 0px;

  z-index: 10;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    padding: 2em 50px;
  }

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
`;

const DesktopHeader = () => {
  const history = useHistory();

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
  return (
    <div>
      <Container className="justify-sb" id="header-section">
        <KaddexLogo style={{ cursor: 'pointer' }} onClick={() => history.push(ROUTE_INDEX)} />
        <HeaderItems />
        <Hamburger />
      </Container>

      {isSticky && (
        <Container className="justify-sb" isSticky={isSticky}>
          <KaddexLogo style={{ cursor: 'pointer' }} onClick={() => history.push(ROUTE_INDEX)} />
          <HeaderItems />
          <Hamburger />
        </Container>
      )}
    </div>
  );
};

export default DesktopHeader;
