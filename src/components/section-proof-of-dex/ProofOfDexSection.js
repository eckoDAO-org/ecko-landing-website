import React from 'react';
import styled from 'styled-components/macro';
import { ColumnContainer, FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import { PROOF_DEX, PROOF_DEX_BUILD, PROOF_DEX_POOL, PROOF_DEX_STAKE, PROOF_DEX_SWAP } from '../../constants/proof-dex';
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

const ProofOfDexSection = () => {
  const [width] = useWindowSize();
  return (
    <STYCard id="proof-dex" className="relative" tabletStyle={{ width: 'calc(100% - 40px)' }} mobileStyle={{ width: 'calc(100% - 40px)' }}>
      <FlexContainer className="flex-1" tabletClassName="align-ce column" tabletPixel={1300} mobileClassName="align-ce column">
        <ColumnContainer className="justify-ce" gap={32} desktopPixel={1300} desktopStyle={{ marginRight: 60 }}>
          <Label size="big" fontFamily="syncopate" tabletPixel={1300} tabletClassName="text-center">
            The most
            <br />
            powerful Proof
            <br />
            of Work DEX
          </Label>
          <Label size="small" color="light-blue" tabletPixel={1300} tabletClassName="text-center justify-ce">
            Safe DeFi begins with our Gas free DEX.
            <br />
            Gas will always stay free because the Kadena
            <br />
            blockchain scales horizontally.
          </Label>
        </ColumnContainer>

        {width >= 840 ? (
          <FlexContainer gap={width >= 1520 ? 30 : 20} className="justify-sb flex-1" style={{ marginTop: width < 1300 && 32 }}>
            {PROOF_DEX.map((proofDex, i) => (
              <ProofOfDexCard key={i} proofDex={proofDex} />
            ))}
          </FlexContainer>
        ) : (
          <ColumnContainer gap={24} style={{ marginTop: 50 }} mobileStyle={{ width: '100%', alignItems: 'center' }}>
            <FlexContainer gap={18}>
              {[PROOF_DEX_SWAP, PROOF_DEX_POOL].map((proofDex, i) => (
                <ProofOfDexCard key={i} proofDex={proofDex} />
              ))}
            </FlexContainer>
            <FlexContainer gap={18}>
              {[PROOF_DEX_STAKE, PROOF_DEX_BUILD].map((proofDex, i) => (
                <ProofOfDexCard key={i} proofDex={proofDex} />
              ))}
            </FlexContainer>
          </ColumnContainer>
        )}
      </FlexContainer>
      <Stripes mobileIconStyle={{ width: 84.51, height: 87 }} />
    </STYCard>
  );
};

export default ProofOfDexSection;