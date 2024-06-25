import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import GradientContainer from '../shared/GradientContainer';
import Label from '../shared/Label';

const DESKTOP_PIXEL = 1150;
const IntroductionHeader = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      columnGap={25}
      className="justify-ce"
      tabletClassName="column"
      mobileClassName="column"
      desktopPixel={DESKTOP_PIXEL}
      style={{ padding: '0 50px' }}
      desktopStyle={{ marginTop: 55 }}
      tabletStyle={{ marginTop: 50 }}
      mobileStyle={{ margin: '30px 0' }}
    >
      <FlexContainer className="column" desktopStyle={{ paddingRight: 64 }}>
        <Label size="huge" fontFamily="syncopate">
          End-to-end decentralized
        </Label>
        <Label size="huge" desktopClassName="nowrap" mobileClassName="column align-fs" fontFamily="syncopate">
          trading on{' '}
          <Label
            desktopStyle={{ marginLeft: 20 }}
            tabletStyle={{ marginLeft: 20 }}
            className="rainbow fit-content"
            gradient="linear-gradient(150deg, #FFC600 -20%, #FF00B8 70%)"
            fontFamily="syncopate"
            size="huge"
          >
            Kadena
          </Label>
        </Label>
      </FlexContainer>

      <FlexContainer
        className="column"
        desktopPixel={DESKTOP_PIXEL}
        desktopStyle={{ marginLeft: 120 }}
        tabletStyle={{ marginTop: 25 }}
        mobileStyle={{ marginTop: 25 }}
      >
        {/* <Label size={width < theme.mediaQueries.mobilePixel ? 'tiny' : 'small'} color="light-blue">
          A revolutionary Zero Gas-Fee DEX.
          <br />
          Free and safe DeFi starts with
          <br />
          Kadena’s Infinite PoW scalability.
        </Label> */}

        <GradientContainer
          style={{
            marginTop: width < theme.mediaQueries.mobilePixel ? 26 : 46,
            height: 50,
            width: width < theme.mediaQueries.mobilePixel ? 205 : 240,
            cursor: 'pointer',
            zIndex: 10,
          }}
          onClick={() => {
            window.open('https://swap.ecko.finance/', '_blank');
          }}
        >
          <FlexContainer className="w-100 h-100 justify-ce align-ce pointer">
            <Label size="small" fontFamily="syncopate">
              LAUNCH App
            </Label>
          </FlexContainer>
        </GradientContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default IntroductionHeader;
