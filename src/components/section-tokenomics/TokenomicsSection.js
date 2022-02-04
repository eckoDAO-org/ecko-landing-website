import React from 'react';
import { TokenomicsCircleIcon, TokenomicsKaddexLogoIcon } from '../../assets';
import { TOKENOMICS_COMMUNITY_SALES, TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING, TOKENOMICS_TEAM } from '../../constants/tokenomics';
import { STYColumnContainer, STYFlexContainer } from '../shared/Container';
import InfoCard from '../shared/InfoCard';
import Label from '../shared/Label';

const TokenomicsSection = () => {
  return (
    <STYColumnContainer className="relative w-100 align-fs" style={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}>
      <STYFlexContainer className="align-fs">
        <Label
          className="rainbow"
          fontSize={110}
          fontFamily="syncopate"
          lineHeight={0}
          labelStyle={{ width: 'fit-content' }}
          gradientColors={['#b766b6', '#f95197', '#f68861']}
        >
          1,000,000,000
        </Label>
        <Label className="align-fs" fontSize={34} fontFamily="syncopate" lineHeight={50} labelStyle={{ marginLeft: 43 }}>
          KDX tokens
          <br />
          fixed supply
        </Label>
      </STYFlexContainer>
      <STYFlexContainer>
        <STYColumnContainer>
          <Label className="align-fs" color="light-blue" fontSize={15} lineHeight={26.25} labelStyle={{ marginTop: 32, maxWidth: 650 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>

          <STYFlexContainer gap={70} style={{ marginTop: 140 }}>
            {[TOKENOMICS_TEAM, TOKENOMICS_COMMUNITY_SALES].map((tokenomics, i) => (
              <InfoCard
                type="percentage"
                className="h-fit-content"
                titleClassName="rainbow"
                {...tokenomics}
                icon={
                  <Label className="rainbow" fontFamily="syncopate" fontSize={40} gradientColors={tokenomics.gradientColors}>
                    {tokenomics.icon}
                  </Label>
                }
              />
            ))}
          </STYFlexContainer>
          <STYFlexContainer gap={70} style={{ marginTop: 84 }}>
            {[TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING].map((tokenomics, i) => (
              <InfoCard
                type="percentage"
                className="h-fit-content"
                titleClassName="rainbow"
                {...tokenomics}
                icon={
                  <Label className="rainbow" fontFamily="syncopate" fontSize={40} gradientColors={tokenomics.gradientColors}>
                    {tokenomics.icon}
                  </Label>
                }
              />
            ))}
          </STYFlexContainer>
        </STYColumnContainer>
        <STYFlexContainer className="relative">
          <TokenomicsCircleIcon />
          <TokenomicsKaddexLogoIcon style={{ position: 'absolute', top: '49.5%', left: '50.5%', transform: 'translate(-50%, -50%)' }} />
        </STYFlexContainer>
      </STYFlexContainer>
    </STYColumnContainer>
  );
};

export default TokenomicsSection;
