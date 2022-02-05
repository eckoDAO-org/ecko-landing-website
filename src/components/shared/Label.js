import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getColor, theme } from '../../styles/theme';
import useWindowSize from '../../hooks/useWindowSize';

const getConfiguration = (configuration, size, type) => {
  return theme[configuration][size][type];
};

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ color }) => color};

  font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'desktop') : fontSize)}px;
  line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'desktop')}px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'tablet') : fontSize)}px;
    line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'tablet')}px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'mobile') : fontSize)}px;
    line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'mobile')}px;
  }

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

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    &.tablet-text-center {
      text-align: center;
    }
  }
`;

const Label = ({
  className,
  gradientColors,
  children,
  fontFamily,
  fontSize,
  size,
  lineHeight,
  color,
  style,
  desktopStyle,
  tabletStyle,
  mobileStyle,
  onClick,
}) => {
  const [width] = useWindowSize();
  return (
    <STYText
      className={className}
      color={getColor(color)}
      fontSize={fontSize}
      size={size}
      onClick={onClick}
      lineHeight={lineHeight}
      style={{
        fontFamily: theme.fontFamily[fontFamily],
        ...style,
        ...(width >= theme.mediaQueries.desktopPixel && desktopStyle),
        ...(width < theme.mediaQueries.desktopPixel && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < theme.mediaQueries.mobilePixel && mobileStyle),
      }}
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
  size: PropTypes.oneOf(['huge', 'big', 'large', 'medium', 'normal', 'small', 'tiny', 'nano']),
  fontFamily: PropTypes.oneOf(['basier', 'syncopate']),
  onClose: PropTypes.func,
  color: PropTypes.oneOf(['white', 'primary', 'light-blue', 'pink', 'yellow', 'grey']),
  gradientColors: PropTypes.arrayOf(PropTypes.string),
};

Label.defaultProps = {
  fontSize: null,
  fontFamily: 'basier',
  onClick: null,
  color: 'white',
  gradientColors: ['#55bade', '#cf7098', '#f7cb79'],
};
