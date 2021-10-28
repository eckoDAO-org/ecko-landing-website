import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { KaddexLogo } from '../../../assets';
import { ROUTE_INDEX } from '../../../router/routes';
import RightHeaderItems from './RightHeaderItems';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 5em;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0 1.5em;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;

const RightContainer = styled.div`
  display: flex;
`;

const HamburgerListContainer = styled.div`
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.purple} 0% 0% no-repeat
    padding-box;
`;

const HamburgerItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 16px;
  background: ${({ theme: { colors } }) => colors.purple} 0% 0% no-repeat
    padding-box;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    & svg {
      margin-right: 10px;
      & path {
        fill: #ffffff;
      }
    }
  }
  & svg {
    margin-right: 10px;
  }
`;

const DesktopHeader = () => {
  const history = useHistory();
  return (
    <Container>
      <LeftContainer>
        <KaddexLogo
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(ROUTE_INDEX)}
        />
      </LeftContainer>
      <RightContainer>
        <RightHeaderItems pact={[]} />
      </RightContainer>
    </Container>
  );
};

export default DesktopHeader;
