import React from 'react';
import { FlexContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const IntroductionHeader = () => {
  return (
    <FlexContainer columnGap={25} className="align-fs" tabletClassName="column" mobileClassName="column" style={{ padding: '0 50px' }}>
      <FlexContainer className="column" style={{ flex: 1 }}>
        <Label size="huge" fontFamily="syncopate">
          the evolution
        </Label>
        <Label size="huge" fontFamily="syncopate">
          of defi on
        </Label>
        <Label className="rainbow" fontFamily="syncopate" size="huge">
          Kadena
        </Label>
      </FlexContainer>

      <FlexContainer
        className="column"
        style={{ flex: 1 }}
        desktopStyle={{ marginLeft: 40 }}
        tabletStyle={{ marginTop: 25 }}
        mobileStyle={{ marginTop: 25 }}
      >
        <Label size="normal" color="light-blue">
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena <br /> blockchain scales horizontally,
        </Label>

        <GradientContainer className="desktop-only" style={{ marginTop: 46, height: 50, width: 240, cursor: 'pointer' }}>
          <Label className="rainbow" size="small" fontFamily="syncopate">
            Learn more
          </Label>
        </GradientContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default IntroductionHeader;
