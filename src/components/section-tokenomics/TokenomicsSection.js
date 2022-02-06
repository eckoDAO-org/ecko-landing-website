import React from 'react';
import styled from 'styled-components/macro';
import { TokenomicsCircleIcon, TokenomicsKaddexLogoIcon } from '../../assets';
import { TOKENOMICS_COMMUNITY_SALES, TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING, TOKENOMICS_TEAM } from '../../constants/tokenomics';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PercentageCard from './PercentageCard';

const IconContainer = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  .tokenomics-circle {
    width: 100%;
    height: 100%;
    @media (max-width: 1260px) {
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
  }
  @media (max-width: 1260px) {
    .tokenomics-triangle {
      width: 51px;
      height: 45px;
      transform: translate(-50%, -50%);
    }
  }
`;

const TokenomicsSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      className="column relative w-100 align-ce"
      desktopPixel={1700}
      desktopStyle={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}
      tabletStyle={{ marginTop: 45, flexWrap: 'wrap', padding: '0 50px' }}
      mobileStyle={{ marginTop: 45, flexWrap: 'wrap', padding: '0 50px' }}
    >
      {width >= 1700 ? (
        <FlexContainer className="column">
          <FlexContainer className="align-fs">
            <Label
              className="rainbow"
              fontSize={110}
              fontFamily="syncopate"
              desktopStyle={{ width: 'fit-content' }}
              gradientColors={['#b766b6', '#f95197', '#f68861']}
            >
              1,000,000,000
            </Label>
            <Label className="align-fs" fontFamily="syncopate" size="large" desktopStyle={{ marginLeft: 43 }}>
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
                mln
              </Label>
              <Label className="align-fs nowrap" fontFamily="syncopate" fontSize={22} style={{ lineHeight: '33px' }}>
                KDX tokens
                <br />
                fixed supply
              </Label>
            </FlexContainer>
          </FlexContainer>
          <Label className="text-center" color="primary" size="small" desktopPixel={1700} style={{ marginTop: 30 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>
        </FlexContainer>
      )}
      <FlexContainer className="align-ce" desktopPixel={1260} tabletClassName="column-reverse" mobileClassName="column-reverse">
        <FlexContainer className="column" desktopPixel={1260} tabletClassName="w-100" mobileClassName="w-100" tabletStyle={{ marginTop: 50 }}>
          <FlexContainer gap={width >= theme.mediaQueries.desktopPixel && 70} className="justify-sb">
            {[TOKENOMICS_TEAM, TOKENOMICS_COMMUNITY_SALES].map((tokenomics, i) => (
              <PercentageCard tokenomics={tokenomics} />
            ))}
          </FlexContainer>
          <FlexContainer gap={width >= theme.mediaQueries.desktopPixel && 70} className="justify-sb" style={{ marginTop: 84 }}>
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
