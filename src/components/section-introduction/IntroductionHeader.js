import React from 'react';
import { STYRowContainer, STYColumnContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const IntroductionHeader = () => {
  return (
    <STYRowContainer className="align-fs">
      <STYColumnContainer style={{ flex: 1 }}>
        <Label fontSize={60} fontFamily="syncopate" lineHeight={75}>
          the evolution
        </Label>
        <Label fontSize={60} fontFamily="syncopate" lineHeight={75}>
          of defi on
        </Label>
        <Label className="rainbow" fontSize={60} fontFamily="syncopate" lineHeight={75} labelStyle={{ width: 'fit-content' }}>
          Kadena
        </Label>
      </STYColumnContainer>

      <STYColumnContainer style={{ flex: 1, marginLeft: 60 }}>
        <Label fontSize={20} color="light-blue" lineHeight={35}>
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
    </STYRowContainer>
  );
};

export default IntroductionHeader;
