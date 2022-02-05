import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../../styles/theme';
import { ColumnContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(ColumnContainer)`
  width: 210px;
  padding: 95px 17px;
  border: ${({ color }) => `1px solid ${getColor(color)}`};
  border-radius: 250px;
`;

const PartnerCard = ({ partner }) => {
  return (
    <STYCard
      className="align-ce h-fit-content"
      color={partner.color}
      tabletStyle={{ justifyContent: 'space-between' }}
      mobileStyle={{ justifyContent: 'space-between' }}
    >
      <div>{partner.icon}</div>
      <Label className="text-center" color={partner.color} size="normal" desktopStyle={{ marginTop: 55, marginBottom: 40 }} fontFamily="syncopate">
        {partner.title}
      </Label>
      <Label className="text-center" color={partner.color} size="tiny">
        {partner.description}
      </Label>
    </STYCard>
  );
};

export default PartnerCard;
