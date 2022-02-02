import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
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

  z-index: 1000;
`;

const DesktopHeader = ({ className, menuWithMarginBottom }) => {
  const history = useHistory();

  return (
    <Container id="header" className={className}>
      <KaddexLogo style={{ cursor: 'pointer' }} onClick={() => history.push(ROUTE_INDEX)} />
      <HeaderItems />
      <Hamburger />
    </Container>
  );
};

export default DesktopHeader;
