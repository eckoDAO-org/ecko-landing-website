import React from 'react';
import { STYColumnContainer, STYRowContainer } from '../shared/Container';
import Label from '../shared/Label';
import RadiusBackground from '../shared/RadiusBackground';

const FeatureSection = () => {
  return (
    <STYRowContainer className="relative w-100" style={{ marginTop: 170 }}>
      <STYRowContainer>
        <Label fontSize={40} fontFamily="syncopate">
          unique
          <br />
          features
        </Label>
        <Label color="light-blue" fontSize={15} labelStyle={{ marginLeft: 100, marginTop: 16, marginRight: 100 }}>
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena blockchain scales horizontally.
          <br /> <br />
          The Kaddex DAO will play a large role in how Kaddex operates, controlling the parameters for individual pools. The DAO will have a strong
          focus on ecosystem development, working to help growing the entire Kadena blockchain.
        </Label>
      </STYRowContainer>
    </STYRowContainer>
  );
};

export default FeatureSection;
