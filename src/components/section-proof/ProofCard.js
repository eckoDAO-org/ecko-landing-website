import React from 'react';
import styled from 'styled-components/macro';
import { STYColumnContainer, STYRowContainer } from '../shared/Container';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';
import Label from '../shared/Label';
import { PROOF_DEX } from '../../constants/proof-dex';
import InfoCard from '../shared/InfoCard';

const STYCard = styled(STYRowContainer)`
  background: linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%);
  border-radius: 60px;
  padding: 63px 65px 75px 80px;
  width: 100%;
`;

const STYStripesContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  line-height: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    display: none;
  }
`;

const ProofCard = () => {
  return (
    <STYCard id="proof-dex" className="relative">
      <STYRowContainer gap={60}>
        <STYColumnContainer className="justify-ce" gap={32}>
          <Label fontSize={40}>
            The most
            <br />
            powerful Proof
            <br />
            of Work DEX
          </Label>
          <Label fontSize={15} color="light-blue">
            Safe DeFi begins with our Gas free DEX.
            <br />
            Gas will always stay free because the Kadena
            <br />
            blockchain scales horizontally.
          </Label>
        </STYColumnContainer>

        <STYRowContainer className="justify-sb">
          {PROOF_DEX.map((proofDex, i) => (
            <InfoCard key={i} type="proof" {...proofDex} />
          ))}
        </STYRowContainer>
      </STYRowContainer>
      <STYStripesContainer>
        <Stripes />
      </STYStripesContainer>
    </STYCard>
  );
};

export default ProofCard;
