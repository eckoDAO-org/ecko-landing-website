import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const STYCard = styled(FlexContainer)`
  width: 210px;
  padding: 95px 17px;
  border: ${({ color }) => `1px solid ${getColor(color)}`};
  border-radius: 250px;
  height: fit-content !important;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    height: 386px !important;
    min-width: 170px;
    max-width: 170px;
    padding: 60px 17px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) and (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    height: 100% !important;
    min-width: 210px !important;
    max-width: 210px !important;
  }

  /* &:hover {
    .partners-title {
      text-shadow: ${({ color }) => `0 0 4px ${getColor(color)}`};
    }
    box-shadow: ${({ color }) => `0 0 4px ${getColor(color)}`};
    svg {
      -webkit-filter: ${({ color }) => `drop-shadow( 0 0 3px ${getColor(color)})`};
      filter: ${({ color }) => `drop-shadow( 0 0 3px ${getColor(color)})`};
    }
  } */
`;

const PartnerCard = ({ partner }) => {
  return (
    <STYCard className="column align-ce" color={partner.color} tabletClassName="justify-sb">
      <div>{partner.icon}</div>
      <Label
        className="partners-title text-center"
        color={partner.color}
        size="normal"
        desktopStyle={{ marginTop: 55, marginBottom: 40 }}
        tabletStyle={{ margin: '30px 0' }}
        mobileStyle={{ margin: '20px 0' }}
        fontFamily="syncopate"
      >
        {partner.title}
      </Label>
      <Label className="text-center" color={partner.color} size="tiny">
        {partner.description}
      </Label>
    </STYCard>
  );
};

export default PartnerCard;
