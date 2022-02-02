import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from '../../styles/theme';
import { STYColumnContainer } from './Container';
import Label from './Label';

const STYCard = styled(STYColumnContainer)`
  width: 210px;
  ${({ hideBorder, color, theme: { colors } }) => {
    if (hideBorder) {
      return css`
        svg {
          path {
            fill: ${colors.pink};
          }
        }
      `;
    } else {
      return css`
        padding: 20px;
        border: 1px solid ${color};
        svg {
          path {
            fill: ${color};
          }
        }
      `;
    }
  }}
`;

const InfoCard = ({ color, hideBorder, title, description }) => {
  const getColor = () => {
    switch (color) {
      case 'white':
        return theme.colors.white;
      case 'primary':
        return theme.colors.primary;
      case 'lightBlue':
        return theme.colors.lightBlue;
      case 'pink':
        return theme.colors.pink;
      case 'yellow':
        return theme.colors.yellow;
      case 'grey':
        return theme.colors.grey;
      default:
        return '#ffffff';
    }
  };

  return (
    <STYCard hideBorder={hideBorder} color={getColor}>
      <Label>{title}</Label>
      <Label>{description}</Label>
    </STYCard>
  );
};

export default InfoCard;
