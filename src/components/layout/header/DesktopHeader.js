import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import styled, { css } from 'styled-components/macro';
import { KaddexLogo } from '../../../assets';
import { ROUTE_INDEX } from '../../../router/routes';
import Hamburger from './Hamburger';
import HeaderItems from './HeaderItems';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 0px;

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
        /* background-color: rgba(255, 255, 255, 0.5);  */

        transition: all 0.5s ease;
        animation: smoothScrollIn 1s forwards;
      `;
    }
  }}
  &.is-sticky {
  }
`;

const DesktopHeader = ({ className }) => {
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
      <Container id="header-section">
        <KaddexLogo style={{ cursor: 'pointer' }} onClick={() => history.push(ROUTE_INDEX)} />
        <HeaderItems />
        <Hamburger />
      </Container>

      {isSticky && (
        <Container isSticky={isSticky}>
          <KaddexLogo style={{ cursor: 'pointer' }} onClick={() => history.push(ROUTE_INDEX)} />
          <HeaderItems />
          <Hamburger />
        </Container>
      )}
    </div>
  );
};

export default DesktopHeader;
