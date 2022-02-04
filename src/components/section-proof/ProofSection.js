import React from 'react';
import styled from 'styled-components/macro';
import { STYColumnContainer, STYFlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import { PROOF_DEX } from '../../constants/proof-dex';
import InfoCard from '../shared/InfoCard';
import Stripes from '../shared/Stripes';

const STYCard = styled(STYFlexContainer)`
  background: linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%);
  border-radius: 60px;
  padding: 63px 65px 75px 80px;
  width: 100%;
`;

const ProofSection = () => {
  return (
    <STYCard id="proof-dex" className="relative">
      <STYFlexContainer className="flex-1" gap={60}>
        <STYColumnContainer className="justify-ce" gap={32}>
          <Label fontSize={40} lineHeight={50} fontFamily="syncopate">
            The most
            <br />
            powerful Proof
            <br />
            of Work DEX
          </Label>
          <Label fontSize={15} color="light-blue" lineHeight={26.25}>
            Safe DeFi begins with our Gas free DEX.
            <br />
            Gas will always stay free because the Kadena
            <br />
            blockchain scales horizontally.
          </Label>
        </STYColumnContainer>

        <STYFlexContainer className="justify-sb flex-1">
          {PROOF_DEX.map((proofDex, i) => (
            <InfoCard key={i} type="proof" {...proofDex} />
          ))}
        </STYFlexContainer>
      </STYFlexContainer>
      <Stripes />
    </STYCard>
  );
};

export default ProofSection;
