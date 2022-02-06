import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(FlexContainer)`
  width: 210px;
  padding: 105px 20px 125px 20px;
  border: ${({ color }) => `1px solid ${getColor(color)}`};
  border-radius: 250px;
  height: 468px;

  svg {
    height: 64px;
    width: 64px;
    path {
      fill: ${({ color }) => `${getColor(color)}`};
    }
  }

  @media (max-width: 1520px) {
    width: 160px;
    height: auto;
    padding: 40px 15px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    width: 130px;
  }
`;

const ProofOfDexCard = ({ proofDex }) => {
  return (
    <STYCard className="column align-ce" color={proofDex.color}>
      <div>{proofDex.icon}</div>
      <Label
        className="text-center"
        color={proofDex.color}
        size="medium"
        desktopStyle={{ marginTop: 55, marginBottom: 34 }}
        tabletStyle={{ marginTop: 20, marginBottom: 20 }}
        mobileStyle={{ marginTop: 20, marginBottom: 20 }}
        fontFamily="syncopate"
      >
        {proofDex.title}
      </Label>
      <Label className="text-center" color="grey" size="tiny">
        {proofDex.description}
      </Label>
    </STYCard>
  );
};

export default ProofOfDexCard;
