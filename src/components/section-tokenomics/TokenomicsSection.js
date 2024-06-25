/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { TokenomicsCircleIcon, TokenOmicsIcon, TokenomicsIcon, TokenomicsEckoLogoIcon } from '../../assets';
import Label from '../shared/Label';
import TokenomicsCard from './TokenomicsCard';
import { FlexContainer } from '../shared/Container';
import { TOKENOMICS } from '../../constants/tokenomics';
import { theme } from '../../styles/theme';
import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import RadiusBackground from '../shared/RadiusBackground';

const DESKTOP_PIXEL = 1700;
const MOBILE_PIXEL = 860;

const IconContainer = styled(FlexContainer)`
  width: fit-content;
  height: 100%;
  @media (min-width: 1200px) {
    transform: scale(0.8);
  }
  .tokenomics-circle {
    max-width: 919px;
    max-height: 919px;
    width: 100%;
    height: 100%;
    @media (max-width: ${`${MOBILE_PIXEL}px`}) {
      width: 415px;
      height: 415px;
    }
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
      width: 100%;
      height: 100%;
      max-width: 303px;
      max-height: 303px;
    }
  }
  .tokenomics-triangle {
    position: absolute;
    top: 49.5%;
    left: 50.5%;
    width: 75px;
    transform: translate(-50%, -50%);
    @media (max-width: 1400px) and (min-width: 1200px) {
      width: 60px;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 1200px) and (min-width: 1000px) {
      width: 50px;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 1000px) and (min-width: ${`${MOBILE_PIXEL}px`}) {
      width: 40px;
      transform: translate(-50%, -50%);
    }
    @media (max-width: ${`${MOBILE_PIXEL}px`}) {
      width: 36px;
      transform: translate(-50%, -50%);
    }
  }
`;

const TokenomicsSection = () => {
  const [width, height] = useWindowSize();

  return (
    <FlexContainer
      id="tokenomics"
      className="column relative w-100 align-ce scroll-mt"
      desktopPixel={DESKTOP_PIXEL}
      desktopStyle={{ marginTop: 180, flexWrap: 'wrap', padding: '0 130px' }}
      tabletStyle={{ marginTop: 180, flexWrap: 'wrap', padding: '0 130px' }}
      mobileStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
    >
      {width < theme.mediaQueries.desktopPixel ? (
        <TokenOmicsIcon style={{ marginBottom: 50 }} />
      ) : (
        <TokenomicsIcon style={{ width: '100%', marginBottom: 34, height: 'fit-content' }} />
      )}

      <img src={tokenomicsBackground} style={{ position: 'absolute', height: 740, width: '100%' }} alt="" />
      {width >= theme.mediaQueries.mobilePixel ? (
        <FlexContainer className="column w-100" gap={30} desktopPixel={1430}>
          <FlexContainer className="justify-ce wrap" style={{ rowGap: 24 }}>
            <Label
              className="rainbow"
              fontSize={65 * (width / height) > 100 ? 100 : 65 * (width / height)}
              fontFamily="syncopate"
              desktopStyle={{ width: 'fit-content', marginRight: 40 }}
              gradient="linear-gradient(165deg, #FFC600 -30%, #FF00B8 70%)"
            >
              1,000,000,000
            </Label>
            <Label className="align-fs text-center" fontFamily="syncopate" size="large">
              KDX tokens
              <br />
              max supply
            </Label>
          </FlexContainer>
        </FlexContainer>
      ) : (
        <FlexContainer className="column align-ce w-100">
          <FlexContainer className="align-fe">
            <Label
              className="rainbow block"
              fontSize={170}
              fontFamily="syncopate"
              gradientColors={['#ff00b8', '#ff00b8', '#ff00b8']}
              style={{ height: 136 }}
            >
              1
            </Label>
            <FlexContainer className="column">
              <Label
                className="rainbow"
                fontSize={50}
                fontFamily="syncopate"
                desktopStyle={{ width: 'fit-content' }}
                gradientColors={['#ff00b8', '#ff00b8', '#ff00b8']}
              >
                bln
              </Label>
              <Label className="align-fs nowrap" fontFamily="syncopate" fontSize={22} style={{ lineHeight: '33px' }}>
                KDX tokens
                <br />
                max supply
              </Label>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      )}
      <FlexContainer
        className="align-ce w-100 justify-sb relative"
        desktopPixel={MOBILE_PIXEL}
        tabletClassName="column-reverse"
        mobileClassName="column-reverse"
      >
        {width > MOBILE_PIXEL && <RadiusBackground style={{ top: 150, left: -50 }} />}

        <FlexContainer
          className="column"
          gap={24}
          desktopPixel={MOBILE_PIXEL}
          style={{ marginTop: 32 }}
          desktopStyle={{ width: '40%' }}
          tabletClassName="w-100"
          mobileClassName="w-100"
        >
          {TOKENOMICS.map((tokenomics, i) => (
            <TokenomicsCard key={i} tokenomics={tokenomics} />
          ))}
        </FlexContainer>
        <IconContainer className="relative">
          <TokenomicsCircleIcon className="tokenomics-circle" />
          <TokenomicsEckoLogoIcon className="tokenomics-triangle" />
        </IconContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TokenomicsSection;
