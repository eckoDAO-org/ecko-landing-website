import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import { STYColumnContainer } from './Container';
import Label from './Label';

const STYCard = styled(STYColumnContainer)`
  width: 210px;
  letter-spacing: -0.1em;
  ${({ type, color, theme: { colors } }) => {
    if (type === 'features') {
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
        border-radius: 250px;
        height: 468px;
        padding: 105px 20px 125px 20px;
        svg {
          height: 64px;
          width: 64px;
          path {
            fill: ${color};
          }
        }
      `;
    }
  }}
`;

const InfoCard = ({ type, color, icon, title, description, style }) => {
  const getColor = () => {
    switch (color) {
      case 'white':
        return theme.colors.white;
      case 'primary':
        return theme.colors.primary;
      case 'light-blue':
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

  const getTitleStyle = () => {
    switch (type) {
      case 'proof':
        return { color, fontSize: 30, labelStyle: { marginTop: 55, marginBottom: 34, lineHeight: '37.5px' } };
      case 'features':
        return { color: 'yellow', fontSize: 20, labelStyle: { marginTop: 55, marginBottom: 22, lineHeight: '35px' } };
      case 'partners':
        return { color: getColor(), fontSize: 20 };
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
        return { color: getColor(), fontSize: 13 };
      default:
        return;
    }
  };
  return (
    <STYCard className="align-ce" type={type} color={getColor} style={style}>
      {icon}
      <Label className="text-center" {...getTitleStyle()} fontFamily="syncopate">
        {title}
      </Label>
      <Label className="text-center" {...getDescriptionStyle()}>
        {description}
      </Label>
    </STYCard>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  type: PropTypes.oneOf(['proof', 'feature', 'partners']).isRequired,
};

InfoCard.defaultProps = {};
