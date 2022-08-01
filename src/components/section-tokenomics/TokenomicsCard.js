import React from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(FlexContainer)`
  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.pink};
    }
  }
  @media (max-width: 1700px) {
    height: auto;
  }
`;

const TokenomicsCard = ({ tokenomics }) => {
  return (
    <STYCard className="column align-fs h-fit-content" color={tokenomics.color}>
      {/* <div>
          <Label className="rainbow" fontFamily="syncopate" size="big" gradientColors={tokenomics.gradientColors}>
            {tokenomics.icon}
          </Label>
        </div> */}

      <Label className="text-fs rainbow" gradientColors={tokenomics.gradientColors} fontFamily="syncopate">
        <span style={{ fontSize: 30, marginRight: 8 }}>{tokenomics.icon}</span>
        {tokenomics.title}
      </Label>
      <Label className="text-fs" color="white" size="nano">
        {tokenomics.description}
      </Label>
    </STYCard>
  );
};

export default TokenomicsCard;
