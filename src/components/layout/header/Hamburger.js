import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components/macro';
import { CloseIcon, HamburgerIcon } from '../../../assets';
import useWindowSize from '../../../hooks/useWindowSize';
import { FlexContainer } from '../../shared/Container';
import NavigationItems from '../footer/NavigationItems';

const Container = styled(FlexContainer)`
  background: linear-gradient(114.43deg, rgba(29, 36, 47, 0.9) 5.17%, rgba(15, 16, 36, 0.9) 65.62%);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  z-index: 100;
  border-radius: 40px;
  top: 0px;
  left: 0px;
  padding: 100px 0px;
`;

const Hamburger = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [width, height] = useWindowSize();
  return (
    <FlexContainer className="absolute pointer" style={{ right: 24 }}>
      <HamburgerIcon onClick={() => setShowPopup((prev) => !prev)} />

      {showPopup && (
        <Container className="column fixed justify-sb align-ce" style={{ width, height }} gap={12}>
          <FlexContainer className="absolute cursor" style={{ right: 40, top: 60 }} onClick={() => setShowPopup(false)}>
            <CloseIcon />
          </FlexContainer>
          <NavigationItems fontSize={25} onClick={() => setShowPopup(false)} />
        </Container>
      )}
    </FlexContainer>
  );
};

export default Hamburger;
