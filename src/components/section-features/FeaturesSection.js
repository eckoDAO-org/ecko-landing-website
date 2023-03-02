import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import FeatureCard from './FeatureCard';
import { FEATURES, ZERO_GAS } from '../../constants/features';
import RadiusBackground from '../shared/RadiusBackground';

const DESKTOP_PIXEL = 1360;

const FeaturesSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      id="features"
      className="column relative w-100 align-ce scroll-mt"
      gap={100}
      desktopPixel={DESKTOP_PIXEL}
      desktopStyle={{ marginTop: 170, flexWrap: 'wrap', padding: '0 18%' }}
      tabletStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 130px' }}
      mobileStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
    >
      <RadiusBackground style={{ top: -550, left: 50 }} />
      <FlexContainer className="w-100 wrap justify-sb" mobileClassName="column">
        <FlexContainer desktopPixel={DESKTOP_PIXEL} className="column" tabletClassName="column">
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
            Lightining speed, at zero cost, on Kadena’s secure infinite scalability. Have a look at the most innovative and game-changing
            characteristics that make eckoDEX a never-seen before DEX.
          </Label>
        </FlexContainer>
        {width >= DESKTOP_PIXEL && <FeatureCard feature={ZERO_GAS} />}
      </FlexContainer>

      {width >= DESKTOP_PIXEL && (
        <FlexContainer className="w-100 column" gap={100} columns="auto-fill" px={210}>
          <FlexContainer className="justify-sb">
            {FEATURES.slice(1, 4).map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </FlexContainer>
          <FlexContainer className="justify-sb">
            {FEATURES.slice(4, FEATURES.length).map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </FlexContainer>
        </FlexContainer>
      )}

      {width < DESKTOP_PIXEL && (
        <FlexContainer
          className="w-100 grid justify-sb"
          columns="auto-fill"
          mobileStyle={{ justifyContent: 'center' }}
          px={210}
          style={{ rowGap: 60 }}
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
