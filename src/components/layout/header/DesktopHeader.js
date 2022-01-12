import React from 'react';
import { useHistory } from 'react-router-dom';
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

  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) and (max-width:916px)  {
    padding: 2em 1.5em;
  }


  z-index: 1000;
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

const DesktopHeader = ({ className, menuWithMarginBottom }) => {
  const history = useHistory();

  return (
    <Container id='header' className={className}>
      <LeftContainer>
        <KaddexLogo
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(ROUTE_INDEX)}
        />
      </LeftContainer>
      <RightContainer>
        <RightHeaderItems
          pact={[]}
          menuWithMarginBottom={menuWithMarginBottom}
        />
      </RightContainer>
    </Container>
  );
};

export default DesktopHeader;
