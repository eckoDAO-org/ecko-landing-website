import React from 'react';
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
      className="justify-ce"
      tabletClassName="column"
      mobileClassName="column"
      style={{ padding: '0 50px' }}
      desktopStyle={{ marginTop: 100 }}
      tabletStyle={{ marginTop: 50 }}
      mobileStyle={{ margin: '30px 0' }}
    >
      <FlexContainer className="column" style={{ paddingRight: 64 }}>
        <Label size="huge" className="nowrap" fontFamily="syncopate">
          the evolution
        </Label>
        <Label size="huge" fontFamily="syncopate">
          of defi on
        </Label>
        <Label
          className="rainbow fit-content"
          gradient="linear-gradient(102deg, #61CFE8 0%, #9580B9 33%, #E37480 55%, #ED8473 70%, #F7D186 100%)"
          fontFamily="syncopate"
          size="huge"
        >
          Kadena
        </Label>
      </FlexContainer>

      <FlexContainer className="column" desktopStyle={{ marginLeft: 120 }} tabletStyle={{ marginTop: 25 }} mobileStyle={{ marginTop: 25 }}>
        <Label size={width < theme.mediaQueries.mobilePixel ? 'tiny' : 'normal'} color="light-blue">
          A revolutionary 0 Gas-Fee DEX.
          <br />
          Free and safe DeFi starts with
          <br />
          Kadena’s infinite scalability PoW.
        </Label>

        <GradientContainer className="desktop-only" style={{ marginTop: 46, height: 50, width: 240, cursor: 'pointer' }}>
          <a href="/#proof-of-dex">
            <Label className="rainbow" size="small" fontFamily="syncopate">
              Learn more
            </Label>
          </a>
        </GradientContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default IntroductionHeader;
