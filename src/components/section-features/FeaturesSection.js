import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import FeatureCard from './FeatureCard';
import { FEATURES, ZERO_GAS } from '../../constants/features';
import RadiusBackground from '../shared/RadiusBackground';

const DESKTOP_PIXEL = 1400;

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
          Innovative and game-changing characteristics as never seen before on any other dex.
        </Label>
        {width >= DESKTOP_PIXEL && <FeatureCard feature={ZERO_GAS} />}
      </FlexContainer>

      {width >= 1400 && (
        <FlexContainer className="w-100 justify-sb" gap={35}>
          {FEATURES.slice(1).map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </FlexContainer>
      )}

      {width < DESKTOP_PIXEL && (
        <FlexContainer
          className="w-100 grid justify-sb"
          columns="auto-fill"
          mobileStyle={{ justifyContent: 'center' }}
          px={210}
          style={{ rowGap: 24 }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default FeaturesSection;
