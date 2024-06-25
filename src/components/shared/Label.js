import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getColor, theme } from '../../styles/theme';
import useWindowSize from '../../hooks/useWindowSize';

const getConfiguration = (configuration, size, type) => {
  return theme?.[configuration]?.[size]?.[type] || -1;
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
  @media (max-width: ${({ theme: { mediaQueries }, mobilePixel }) => (mobilePixel ? `${mobilePixel - 1}px` : `${mediaQueries.mobilePixel - 1}px`)}) {
    font-size: ${({ size, fontSize }) => (!fontSize ? getConfiguration('fontSizes', size, 'mobile') : fontSize)}px;
    line-height: ${({ size }) => size && getConfiguration('lineHeight', size, 'mobile')}px;
  }

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }

  &.rainbow {
    display: block;
    background-image: ${({ gradient, gradientColors }) => {
      if (gradient) {
        return gradient;
      }
      return `linear-gradient(92.37deg,${gradientColors[0]} 28.58%, ${gradientColors[1]} 177.54%)`;
    }};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  &.flex {
    display: flex;
  }
  &.fit-content {
    width: fit-content;
  }
  &.h-fit-content {
    height: fit-content;
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

  &.justify-ce {
    justify-content: center;
  }

  &.block {
    display: block;
  }

  &.nowrap {
    white-space: nowrap;
  }
  &.column {
    flex-direction: column;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    &.tablet-text-center {
      text-align: center;
    }
  }
`;

const Label = ({
  id,
  className,
  desktopClassName,
  tabletClassName,
  mobileClassName,
  desktopPixel,
  mobilePixel,
  gradientColors,
  gradient,
  children,
  fontFamily,
  fontSize,
  size,
  color,
  style,
  desktopStyle,
  tabletStyle,
  mobileStyle,
  onClick,
  withShade,
  dangerouslySetInnerHTML,
}) => {
  const [width] = useWindowSize();

  const getClassName = () => {
    let classname = className;
    if (width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopClassName) {
      classname = `${classname} ${desktopClassName} `;
    }
    if (width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletClassName) {
      classname = `${classname} ${tabletClassName} `;
    }
    if (width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileClassName) {
      classname = `${classname} ${mobileClassName} `;
    }
    return classname;
  };

  return (
    <STYText
      id={id}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      gradient={gradient}
      className={`${fontFamily === 'syncopate' ? 'uppercase' : ''} ${getClassName()}`}
      color={withShade ? `${getColor(color)}99` : getColor(color)}
      fontSize={fontSize}
      size={size}
      onClick={onClick}
      mobilePixel={mobilePixel}
      style={{
        fontFamily: theme.fontFamily[fontFamily],
        ...style,
        ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < (mobilePixel || theme.mediaQueries.mobilePixel) && mobileStyle),
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
  fontFamily: PropTypes.oneOf(['basier', 'syncopate', 'syncopate-regular']),
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
