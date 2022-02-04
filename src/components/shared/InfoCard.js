import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getColor } from '../../styles/theme';
import { STYColumnContainer } from './Container';
import Label from './Label';

const STYCard = styled(STYColumnContainer)`
  width: 210px;
  letter-spacing: -0.1em;
  ${({ type, color, theme: { colors } }) => {
    if (type === 'features' || type === 'percentage') {
      return css`
        svg {
          path {
            fill: ${colors.pink};
          }
        }
      `;
    } else if (type === 'partners') {
      return css`
        padding: 95px 17px;
        border: 1px solid ${getColor(color)};
        border-radius: 250px;
        height: fit-content;
      `;
    } else {
      return css`
        padding: 105px 20px 125px 20px;
        border: 1px solid ${getColor(color)};
        border-radius: 250px;
        height: 468px;
        svg {
          height: 64px;
          width: 64px;
          path {
            fill: ${getColor(color)};
          }
        }
      `;
    }
  }}
`;

const InfoCard = ({ type, color, icon, title, description, gradientColors, className, titleClassName, descriptionClassName, style }) => {
  const getTitleStyle = () => {
    switch (type) {
      case 'proof':
        return { color, fontSize: 30, labelStyle: { marginTop: 55, marginBottom: 34, lineHeight: '37.5px' } };
      case 'features':
        return { color: 'yellow', fontSize: 20, labelStyle: { marginTop: 55, marginBottom: 22, lineHeight: '35px' } };
      case 'partners':
        return {
          color,
          fontSize: 20,
          labelStyle: {
            marginTop: 55,
            marginBottom: 40,
            lineHeight: '25px',
          },
        };
      case 'percentage':
        return { fontSize: 15, labelStyle: { lineHeight: '26px', marginTop: 20, marginBottom: 20 } };
      default:
        return;
    }
  };

  const getDescriptionStyle = () => {
    switch (type) {
      case 'proof':
        return { color: 'grey', fontSize: 13, labelStyle: { lineHeight: '22.75px' } };
      case 'features':
        return {
          color: 'light-blue',
          fontSize: 12,
          labelStyle: {
            lineHeight: '21px',
          },
        };
      case 'partners':
        return { color, fontSize: 13, labelStyle: { lineHeight: '22.75px' } };
      case 'percentage':
        return { color: 'light-blue', fontSize: 12, labelStyle: { lineHeight: '21px' } };
      default:
        return;
    }
  };
  return (
    <STYCard className={`align-ce ${className}`} type={type} color={color} style={style}>
      <div>{icon}</div>
      <Label className={`text-center ${titleClassName}`} gradientColors={gradientColors} {...getTitleStyle()} fontFamily="syncopate">
        {title}
      </Label>
      <Label className={`text-center ${descriptionClassName}`} {...getDescriptionStyle()}>
        {description}
      </Label>
    </STYCard>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  type: PropTypes.oneOf(['proof', 'feature', 'partners', 'percentage']).isRequired,
};

InfoCard.defaultProps = {};
