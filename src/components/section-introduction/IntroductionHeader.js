import React from 'react';
import { STYFlexContainer, STYColumnContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const IntroductionHeader = () => {
  return (
    <STYFlexContainer mobileColumnGap={25} className="align-fs mobile-column">
      <STYColumnContainer style={{ flex: 1 }}>
        <Label fontSize={60} mobileFontSize={25} fontFamily="syncopate" lineHeight={75} mobileLineHeight={31.25}>
          the evolution
        </Label>
        <Label fontSize={60} mobileFontSize={25} fontFamily="syncopate" lineHeight={75} mobileLineHeight={31.25}>
          of defi on
        </Label>
        <Label
          className="rainbow"
          fontSize={60}
          mobileFontSize={25}
          fontFamily="syncopate"
          lineHeight={75}
          mobileLineHeight={31.25}
          labelStyle={{ width: 'fit-content' }}
        >
          Kadena
        </Label>
      </STYColumnContainer>

      <STYColumnContainer style={{ flex: 1 }}>
        <Label fontSize={20} mobileFontSize={10} color="light-blue" lineHeight={35} mobileLineHeight={17.5}>
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena <br /> blockchain scales horizontally,
        </Label>

        <GradientContainer style={{ marginTop: 46, height: 50, width: 240, cursor: 'pointer' }}>
          <Label className="rainbow" fontSize={15} fontFamily="syncopate">
            Learn more
          </Label>
        </GradientContainer>
      </STYColumnContainer>
    </STYFlexContainer>
  );
};

export default IntroductionHeader;
