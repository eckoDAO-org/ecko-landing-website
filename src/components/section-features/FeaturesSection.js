import React from 'react';
import { FEATURES } from '../../constants/features';
import { STYColumnContainer, STYRowContainer } from '../shared/Container';
import InfoCard from '../shared/InfoCard';
import Label from '../shared/Label';
import RadiusBackground from '../shared/RadiusBackground';

const FeatureSection = () => {
  return (
    <STYRowContainer className="relative w-100 align-fs" style={{ marginTop: 170, flexWrap: 'wrap' }}>
      <STYRowContainer>
        <Label className="align-fs" fontSize={40} fontFamily="syncopate" lineHeight={50}>
          unique
          <br />
          features
        </Label>
        <Label
          className="align-fs"
          color="light-blue"
          fontSize={15}
          lineHeight={26.25}
          labelStyle={{ marginLeft: 100, marginTop: 16, marginRight: 100, maxWidth: 584 }}
        >
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena blockchain scales horizontally.
          <br /> <br />
          The Kaddex DAO will play a large role in how Kaddex operates, controlling the parameters for individual pools. The DAO will have a strong
          focus on ecosystem development, working to help growing the entire Kadena blockchain.
        </Label>

        {FEATURES.map((feature, i) => (
          <InfoCard key={i} type="features" {...feature} style={{ marginRight: 40 }} />
        ))}
      </STYRowContainer>

      {/* <STYRowContainer gap={40}>
      
      </STYRowContainer> */}
    </STYRowContainer>
  );
};

export default FeatureSection;
