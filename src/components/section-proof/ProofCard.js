import React from 'react';
import styled from 'styled-components/macro';
import { STYRowContainer } from '../shared/Container';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';

const STYCard = styled(STYRowContainer)`
  background: linear-gradient(114.43deg, #293445 5.17%, #292a45 65.62%);
  border-radius: 60px;
  padding: 63px 65px 75px 80px;
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
    <STYCard>
      <STYStripesContainer>
        <Stripes />
      </STYStripesContainer>
    </STYCard>
  );
};

export default ProofCard;
