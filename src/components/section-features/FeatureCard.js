import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(FlexContainer)`
  width: 210px;

  svg {
    path {
      fill: ${({ color }) => getColor(color)};
    }
  }

  /* &:hover {
    .feature-title {
      text-shadow: ${({ color }) => `0 0 4px ${getColor(color)}`};
    }
    svg {
      -webkit-filter: ${({ color }) => `drop-shadow( 0 0 3px ${getColor(color)})`};
      filter: ${({ color }) => `drop-shadow( 0 0 3px ${getColor(color)})`};
    }
  } */
`;

const FeatureCard = ({ feature }) => {
  return (
    <STYCard className="column align-ce" color={feature.color}>
      <div>{feature.icon}</div>
      <Label
        className="feature-title text-center"
        color={feature.color}
        size="normal"
        desktopStyle={{ marginTop: 55, marginBottom: 22 }}
        tabletStyle={{ marginTop: 20, marginBottom: 15 }}
        mobileStyle={{ marginTop: 20, marginBottom: 15 }}
        fontFamily="syncopate"
      >
        {feature.title}
      </Label>
      <Label className="text-center" color="white" size="nano">
        {feature.description}
      </Label>
    </STYCard>
  );
};

export default FeatureCard;
