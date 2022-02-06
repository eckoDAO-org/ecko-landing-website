import React from 'react';
import styled from 'styled-components/macro';
import { ColumnContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(ColumnContainer)`
  width: 210px;

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.pink};
    }
  }
`;

const PercentageCard = ({ tokenomics }) => {
  return (
    <STYCard className="align-ce h-fit-content" color={tokenomics.color}>
      <div>
        <Label className="rainbow" fontFamily="syncopate" size="big" gradientColors={tokenomics.gradientColors}>
          {tokenomics.icon}
        </Label>
      </div>
      <Label
        className="text-center rainbow"
        gradientColors={tokenomics.gradientColors}
        size="small"
        style={{ marginBottom: 20, marginTop: 15 }}
        fontFamily="syncopate"
      >
        {tokenomics.title}
      </Label>
      <Label className="text-center" color="light-blue" size="nano">
        {tokenomics.description}
      </Label>
    </STYCard>
  );
};

export default PercentageCard;