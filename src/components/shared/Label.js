import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getColor, theme } from '../../styles/theme';

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ color }) => color};
  ${({ lineHeight }) => {
    if (lineHeight) {
      return css`
        line-height: ${lineHeight}px;
      `;
    }
  }}

  font-size: ${({ fontSize }) => fontSize}px;
  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }

  &.rainbow {
    background-image: ${({ gradientColors }) => {
      return `linear-gradient(94.39deg,${gradientColors[0]} 0.84%, ${gradientColors[1]} 44.14%, ${gradientColors[2]} 90.22%)`;
    }};
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

  &.align-fs {
    align-items: flex-start;
  }
`;

const Label = ({ className, gradientColors, children, fontFamily, fontSize, lineHeight, labelStyle, color, inverted, withShade, onClick }) => {
  return (
    <STYText
      className={className}
      inverted={inverted}
      color={getColor(color)}
      fontSize={fontSize}
      onClick={onClick}
      withShade={withShade}
      lineHeight={lineHeight}
      style={{ fontFamily: theme.fontFamily[fontFamily], ...labelStyle }}
      gradientColors={gradientColors}
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
  gradientColors: PropTypes.arrayOf(PropTypes.string),
};

Label.defaultProps = {
  fontSize: 13,
  fontFamily: 'basier',
  onClick: null,
  color: 'white',
  gradientColors: ['#55bade', '#cf7098', '#f7cb79'],
};
