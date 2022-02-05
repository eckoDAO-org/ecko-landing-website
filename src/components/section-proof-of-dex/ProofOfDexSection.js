import React from 'react';
import styled from 'styled-components/macro';
import { ColumnContainer, FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import { PROOF_DEX } from '../../constants/proof-dex';
import Stripes from '../shared/Stripes';
import ProofOfDexCard from './ProofOfDexCard';
import useWindowSize from '../../hooks/useWindowSize';

const STYCard = styled(FlexContainer)`
  background: linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%);
  border-radius: 60px;
  width: 100%;
  padding: 63px 65px 75px 80px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    padding: 50px 32px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 100px 32px;
  }
`;

const CardsContainer = styled(FlexContainer)``;

const ProofOfDexSection = () => {
  const [width] = useWindowSize();
  return (
    <STYCard id="proof-dex" className="relative" tabletStyle={{ width: 'calc(100% - 40px)' }} mobileStyle={{ width: 'calc(100% - 40px)' }}>
      <FlexContainer className="flex-1 tablet-column tablet-align-ce" gap={60}>
        <ColumnContainer className="justify-ce" gap={32}>
          <Label size="big" fontFamily="syncopate">
            The most
            <br />
            powerful Proof
            <br />
            of Work DEX
          </Label>
          <Label size="small" color="light-blue">
            Safe DeFi begins with our Gas free DEX.
            <br />
            Gas will always stay free because the Kadena
            <br />
            blockchain scales horizontally.
          </Label>
        </ColumnContainer>

        <FlexContainer gap={width >= 1520 ? 30 : 20} className="justify-sb flex-1">
          {PROOF_DEX.map((proofDex, i) => (
            <ProofOfDexCard key={i} proofDex={proofDex} />
          ))}
        </FlexContainer>
      </FlexContainer>
      <Stripes />
    </STYCard>
  );
};

export default ProofOfDexSection;
