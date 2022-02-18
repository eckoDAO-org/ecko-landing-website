import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { KaddexLogo } from '../../../assets';
import useWindowSize from '../../../hooks/useWindowSize';
import { ROUTE_INDEX } from '../../../router/routes';
import { FlexContainer } from '../../shared/Container';
import NavigationItems from '../footer/NavigationItems';
import Hamburger from './Hamburger';

const Container = styled(FlexContainer)`
  min-height: ${({ theme: { header } }) => `${header.height}px`};
  width: 100%;
  padding: 2em 50px;

  z-index: 10;

  transition: all 0.5s ease;

  &.sticky {
    z-index: 100;
    transform: ${({ isSticky }) => (isSticky ? 'translateY(-105px)' : 'translateY(-200px)')};
    position: fixed;
    background-color: rgba(7, 6, 16, 0.5);
    z-index: 50;
    width: 100%;

    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  .kaddex-logo {
    cursor: pointer;
    @media (min-width: 880px) {
      position: absolute;
      left: 50px;
    }
  }
`;

const Header = ({ isSticky, stopTimer, startTimer }) => {
  return (
    <div>
      <CommonHeader />
      <CommonHeader className="sticky" isSticky={isSticky} stopTimer={stopTimer} startTimer={startTimer} />
    </div>
  );
};

const CommonHeader = ({ className, isSticky, stopTimer, startTimer }) => {
  const history = useHistory();
  const [width] = useWindowSize();

  const goToTop = () => {
    history.push(ROUTE_INDEX);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container
      desktopPixel={880}
      className={`align-ce justify-ce ${className}`}
      tabletClassName="justify-ce"
      mobileClassName="justify-ce"
      isSticky={isSticky}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <KaddexLogo className="kaddex-logo" onClick={goToTop} />
      {width >= 880 && (
        <FlexContainer className="align-ce" gap={24}>
          <NavigationItems />
        </FlexContainer>
      )}
      {width < 880 && <Hamburger />}
    </Container>
  );
};

export default Header;
