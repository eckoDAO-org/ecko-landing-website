import React from 'react';
import { ArrowsDownIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const IntroductionHeader = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      columnGap={25}
      className="align-fs"
      tabletClassName="column"
      mobileClassName="column"
      style={{ padding: '0 50px' }}
      desktopStyle={{ marginTop: 100 }}
      mobileStyle={{ marginTop: 50, marginBottom: 30 }}
    >
      <FlexContainer className="column" style={{ flex: 1 }}>
        <Label size="huge" fontFamily="syncopate">
          the evolution
        </Label>
        <Label size="huge" fontFamily="syncopate">
          of defi on
        </Label>
        <Label className="rainbow" gradientColors={['#55BCDD', '#E9787B', '#f7cb79']} fontFamily="syncopate" size="huge">
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
        <Label size={width < theme.mediaQueries.mobilePixel ? 'tiny' : 'normal'} color="light-blue">
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
      <FlexContainer className="w-100 justify-ce desktop-none" style={{ marginTop: 25 }}>
        <ArrowsDownIcon />
      </FlexContainer>
    </FlexContainer>
  );
};

export default IntroductionHeader;
