import React from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { TokenomicsCircleIcon, TokenomicsIcon, TokenomicsKaddexLogoIcon } from '../../assets';
import Label from '../shared/Label';
import PercentageCard from './PercentageCard';
import { FlexContainer } from '../shared/Container';
import { TOKENOMICS_COMMUNITY_SALES, TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING, TOKENOMICS_TEAM } from '../../constants/tokenomics';
import { theme } from '../../styles/theme';
import tokenomicsBackground from '../../assets/images/backgrounds/gradient-background.png';
import RadiusBackground from '../shared/RadiusBackground';

const DESKTOP_PIXEL = 1700;
const MOBILE_PIXEL = 860;

const IconContainer = styled(FlexContainer)`
  width: fit-content;
  height: 100%;
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
      desktopStyle={{ marginTop: 400, flexWrap: 'wrap', padding: '0 130px' }}
      tabletStyle={{ marginTop: 400, flexWrap: 'wrap', padding: '0 130px' }}
      mobileStyle={{ marginTop: 100, flexWrap: 'wrap', padding: '0 50px' }}
    >
      <marquee scrollamount="20" style={{ position: 'absolute', top: -300 }}>
        <TokenomicsIcon />
      </marquee>

      <img src={tokenomicsBackground} style={{ position: 'absolute', height: 740, width: '100%' }} alt="" />
      {width >= theme.mediaQueries.mobilePixel ? (
        <FlexContainer className="column w-100" gap={30} desktopPixel={1430}>
          <FlexContainer className="align-fs wrap" style={{ rowGap: 24 }}>
            <Label
              className="rainbow"
              fontSize={65 * (width / height) > 100 ? 100 : 65 * (width / height)}
              fontFamily="syncopate"
              desktopStyle={{ width: 'fit-content', marginRight: 40 }}
              gradientColors={['#b766b6', '#f95197', '#f68861']}
            >
              1,000,000,000
            </Label>
            <Label className="align-fs" fontFamily="syncopate" size="large">
              KDX tokens
              <br />
              fixed supply
            </Label>
          </FlexContainer>

          <Label className="align-fs" color="primary" size="small" desktopStyle={{ marginTop: 32, maxWidth: 650 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>
        </FlexContainer>
      ) : (
        <FlexContainer className="column align-ce w-100">
          <FlexContainer className="align-fe">
            <Label
              className="rainbow block"
              fontSize={170}
              fontFamily="syncopate"
              gradientColors={['#b766b6', '#f95197', '#f68861']}
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
                gradientColors={['#b766b6', '#f95197', '#f68861']}
              >
                bln
              </Label>
              <Label className="align-fs nowrap" fontFamily="syncopate" fontSize={22} style={{ lineHeight: '33px' }}>
                KDX tokens
                <br />
                fixed supply
              </Label>
            </FlexContainer>
          </FlexContainer>
          <Label className="text-center" color="primary" size="small" desktopPixel={DESKTOP_PIXEL} style={{ marginTop: 30 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>
        </FlexContainer>
      )}
      <FlexContainer
        className="align-ce w-100 justify-sb relative"
        desktopPixel={MOBILE_PIXEL}
        tabletClassName="column-reverse"
        mobileClassName="column-reverse"
      >
        <RadiusBackground style={{ top: 150, left: -50 }} />

        <FlexContainer className="column" desktopPixel={MOBILE_PIXEL} tabletClassName="w-100" mobileClassName="w-100" style={{ marginTop: 50 }}>
          <FlexContainer gap={width >= theme.mediaQueries.desktopPixel ? 70 : 40} className="justify-sb">
            {[TOKENOMICS_TEAM, TOKENOMICS_COMMUNITY_SALES].map((tokenomics, i) => (
              <PercentageCard key={i} tokenomics={tokenomics} />
            ))}
          </FlexContainer>
          <FlexContainer gap={width >= theme.mediaQueries.desktopPixel ? 70 : 40} className="justify-sb" style={{ marginTop: 84 }}>
            {[TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING].map((tokenomics, i) => (
              <PercentageCard key={i} tokenomics={tokenomics} />
            ))}
          </FlexContainer>
        </FlexContainer>
        <IconContainer className="relative">
          <TokenomicsCircleIcon className="tokenomics-circle" />
          <TokenomicsKaddexLogoIcon className="tokenomics-triangle" />
        </IconContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TokenomicsSection;
