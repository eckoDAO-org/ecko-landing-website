import React from 'react';
import styled from 'styled-components/macro';
import { STYFlexContainer, STYColumnContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const Container = styled(STYFlexContainer)`
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    padding: 0 50px;
  }
`;

const IntroductionHeader = () => {
  return (
    <Container columnGap={25} className="align-fs mobile-column">
      <STYColumnContainer style={{ flex: 1 }}>
        <Label size="huge" fontFamily="syncopate">
          the evolution
        </Label>
        <Label size="huge" fontFamily="syncopate">
          of defi on
        </Label>
        <Label className="rainbow" fontFamily="syncopate" size="huge" labelStyle={{ width: 'fit-content' }}>
          Kadena
        </Label>
      </STYColumnContainer>

      <STYColumnContainer style={{ flex: 1 }}>
        <Label size="normal" color="light-blue">
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena <br /> blockchain scales horizontally,
        </Label>

        <GradientContainer className="desktop-none" style={{ marginTop: 46, height: 50, width: 240, cursor: 'pointer' }}>
          <Label className="rainbow" size="small" fontFamily="syncopate">
            Learn more
          </Label>
        </GradientContainer>
      </STYColumnContainer>
    </Container>
  );
};

export default IntroductionHeader;
