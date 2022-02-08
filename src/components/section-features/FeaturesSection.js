import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import FeatureCard from './FeatureCard';
import { FEATURES, LIQUIDITY_MINING, ZERO_GAS } from '../../constants/features';
import RadiusBackground from '../shared/RadiusBackground';

const DESKTOP_PIXEL = 1700;

const FeaturesSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      id="features"
      className="column relative w-100 align-ce scroll-mt"
      gap={100}
      desktopPixel={DESKTOP_PIXEL}
      desktopStyle={{ marginTop: 170, flexWrap: 'wrap', padding: '0 130px' }}
      tabletStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 130px' }}
      mobileStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
    >
      <RadiusBackground style={{ top: -550, left: 50 }} />
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
          desktopStyle={{ marginTop: 16, maxWidth: 584 }}
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
            <FeatureCard feature={LIQUIDITY_MINING} />
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

      {width < DESKTOP_PIXEL && (
        <FlexContainer className="grid" columns={Math.round((width - 260) / 240)}>
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default FeaturesSection;
