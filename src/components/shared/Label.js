import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { theme } from '../../styles/theme';

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ color }) => color};
  ${({ inverted, theme: { colors } }) =>
    inverted &&
    css`
      color: ${colors.primary};
    `}
  font-size: ${({ fontSize }) => fontSize}px;
  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }

  &.rainbow {
    background-image: linear-gradient(94.39deg, #55bade 0.84%, #cf7098 44.14%, #f7cb79 90.22%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.text-center {
    text-align: center;
  }
`;

const Label = ({ className, children, fontFamily, fontSize = 13, labelStyle, color, inverted, withShade, onClick }) => {
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

  return (
    <STYText
      className={className}
      inverted={inverted}
      color={getColor()}
      fontSize={fontSize}
      onClick={onClick}
      withShade={withShade}
      style={{ fontFamily: theme.fontFamily[fontFamily], ...labelStyle }}
    >
      {children}
    </STYText>
  );
};

export default Label;

Label.propTypes = {
  children: PropTypes.any.isRequired,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.oneOf(['basier', 'syncopate']),
  onClose: PropTypes.func,
  color: PropTypes.oneOf(['white', 'primary', 'light-blue', 'pink', 'yellow', 'grey']),
};

Label.defaultProps = {
  fontSize: 13,
  fontFamily: 'basier',
  onClick: null,
  color: 'white',
};
