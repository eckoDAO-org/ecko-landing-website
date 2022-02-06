import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import FeatureCard from './FeatureCard';
import { FEATURES, LPS, ZERO_GAS } from '../../constants/features';

const DESKTOP_PIXEL = 1700;

const FeatureSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      className="column relative w-100 align-fs"
      gap={100}
      desktopPixel={DESKTOP_PIXEL}
      desktopStyle={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}
      tabletStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
      mobileStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
    >
      <FlexContainer className="w-100 wrap justify-sb" tabletClassName="column" mobileClassName="column">
        <Label className="align-fs" fontFamily="syncopate" size="big">
          unique
          <br />
          features
        </Label>
        <Label
          className="align-fs"
          color="primary"
          size="small"
          desktopPixel={DESKTOP_PIXEL}
          desktopStyle={{ marginLeft: 100, marginTop: 16, marginRight: 100, maxWidth: 584 }}
          tabletStyle={{ marginTop: 35 }}
          mobileStyle={{ marginTop: 35 }}
        >
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena blockchain scales horizontally.
          <br /> <br />
          The Kaddex DAO will play a large role in how Kaddex operates, controlling the parameters for individual pools. The DAO will have a strong
          focus on ecosystem development, working to help growing the entire Kadena blockchain.
        </Label>
        {width >= DESKTOP_PIXEL && (
          <>
            <FeatureCard feature={ZERO_GAS} />
            <FeatureCard feature={LPS} />
          </>
        )}
      </FlexContainer>

      {width >= DESKTOP_PIXEL && (
        <FlexContainer className="w-100 wrap justify-sb">
          {FEATURES.slice(2).map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default FeatureSection;
