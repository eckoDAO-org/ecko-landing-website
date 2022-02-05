import React from 'react';
import styled from 'styled-components';
import { STYColumnContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(STYColumnContainer)`
  width: 210px;

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.pink};
    }
  }
`;

const FeatureCard = ({ feature }) => {
  return (
    <STYCard className="align-ce" color={feature.color}>
      <div>{feature.icon}</div>
      <Label
        className="text-center"
        color="yellow"
        size="normal"
        desktopStyle={{ marginTop: 55, marginBottom: 22 }}
        tabletStyle={{ marginTop: 20, marginBottom: 15 }}
        mobileStyle={{ marginTop: 20, marginBottom: 15 }}
        fontFamily="syncopate"
      >
        {feature.title}
      </Label>
      <Label className="text-center" color="light-blue" size="nano">
        {feature.description}
      </Label>
    </STYCard>
  );
};

export default FeatureCard;
