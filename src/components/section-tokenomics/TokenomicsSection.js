import React from 'react';
import { TokenomicsCircleIcon, TokenomicsKaddexLogoIcon } from '../../assets';
import { TOKENOMICS_COMMUNITY_SALES, TOKENOMICS_DAO_TREASURY, TOKENOMICS_LIQUIDITY_MINING, TOKENOMICS_TEAM } from '../../constants/tokenomics';
import { ColumnContainer, FlexContainer } from '../shared/Container';
import InfoCard from '../shared/InfoCard';
import Label from '../shared/Label';

const TokenomicsSection = () => {
  return (
    <ColumnContainer className="relative w-100 align-fs" style={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}>
      <FlexContainer className="align-fs">
        <Label
          className="rainbow"
          fontSize={110}
          fontFamily="syncopate"
          labelStyle={{ width: 'fit-content' }}
          gradientColors={['#b766b6', '#f95197', '#f68861']}
        >
          1,000,000,000
        </Label>
        <Label className="align-fs" fontFamily="syncopate" size="large" labelStyle={{ marginLeft: 43 }}>
          KDX tokens
          <br />
          fixed supply
        </Label>
      </FlexContainer>
      <FlexContainer>
        <ColumnContainer>
          <Label className="align-fs" color="light-blue" size="small" labelStyle={{ marginTop: 32, maxWidth: 650 }}>
            The KDX Token is used to incentivize all the liquidity stakeholders on
            <br />
            the Kaddex platform, while also rewarding its holders for supporting
            <br />
            the network
          </Label>

          <FlexContainer gap={70} style={{ marginTop: 140 }}>
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
          </FlexContainer>
          <FlexContainer gap={70} style={{ marginTop: 84 }}>
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
          </FlexContainer>
        </ColumnContainer>
        <FlexContainer className="relative">
          <TokenomicsCircleIcon />
          <TokenomicsKaddexLogoIcon style={{ position: 'absolute', top: '49.5%', left: '50.5%', transform: 'translate(-50%, -50%)' }} />
        </FlexContainer>
      </FlexContainer>
    </ColumnContainer>
  );
};

export default TokenomicsSection;
