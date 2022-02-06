import React from 'react';
import { TokenomicsCircleIcon, TokenomicsKaddexLogoIcon } from '../../assets';
import { TOKENOMICS_COMMUNITY_SALES, TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING, TOKENOMICS_TEAM } from '../../constants/tokenomics';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PercentageCard from './PercentageCard';

const TokenomicsSection = () => {
  return (
    <FlexContainer className="column relative w-100 align-fs" desktopStyle={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}>
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
      <FlexContainer>
        <FlexContainer className="column">
          <Label className="align-fs" color="primary" size="small" desktopStyle={{ marginTop: 32, maxWidth: 650 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>

          <FlexContainer gap={70} mobileGap={40} style={{ marginTop: 140 }}>
            {[TOKENOMICS_TEAM, TOKENOMICS_COMMUNITY_SALES].map((tokenomics, i) => (
              <PercentageCard tokenomics={tokenomics} />
            ))}
          </FlexContainer>
          <FlexContainer gap={70} mobileGap={40} style={{ marginTop: 84 }}>
            {[TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING].map((tokenomics, i) => (
              <PercentageCard key={i} tokenomics={tokenomics} />
            ))}
          </FlexContainer>
        </FlexContainer>
        <FlexContainer className="relative">
          <TokenomicsCircleIcon />
          <TokenomicsKaddexLogoIcon style={{ position: 'absolute', top: '49.5%', left: '50.5%', transform: 'translate(-50%, -50%)' }} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TokenomicsSection;
