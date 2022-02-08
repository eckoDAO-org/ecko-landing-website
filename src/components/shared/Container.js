import styled, { css } from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { theme } from '../../styles/theme';

export const FlexContainer = ({
  className,
  desktopClassName,
  desktopPixel,
  tabletClassName,
  mobileClassName,
  tabletBreakpoint,
  children,
  desktopStyle,
  style,
  tabletStyle,
  mobileStyle,
  backgroundImage,
  ...rest
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
    if (width < theme.mediaQueries.mobilePixel && mobileClassName) {
      classname = `${classname} ${mobileClassName} `;
    }
    return classname;
  };
  return (
    <STYFlexContainer
      {...rest}
      className={getClassName()}
      backgroundImage={backgroundImage}
      style={{
        ...style,
        ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < theme.mediaQueries.mobilePixel && mobileStyle),
      }}
    >
      {children}
    </STYFlexContainer>
  );
};

export const STYFlexContainer = styled.div`
  display: flex;

  &.hide-scrollbar {
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }

  &.scroll-mt {
    scroll-margin-top: 100px;
  }
  &.align-fs {
    align-items: flex-start;
  }

  &.align-fe {
    align-items: flex-end;
  }

  &.align-ce {
    align-items: center;
  }

  &.justify-ce {
    justify-content: center;
  }

  &.justify-sb {
    justify-content: space-between;
  }

  &.justify-fe {
    justify-content: flex-end;
  }

  &.justify-fs {
    justify-content: flex-start;
  }

  &.absolute {
    position: absolute;
  }

  &.fixed {
    position: fixed;
  }

  &.relative {
    position: relative;
  }

  &.w-100 {
    width: 100%;
  }
  &.h-100 {
    height: 100%;
  }

  &.flex-1 {
    flex: 1;
  }

  &.h-fit-content {
    height: fit-content;
  }

  &.f-wrap {
    flex-wrap: wrap;
  }

  &.h-fit-content {
    height: fit-content;
  }

  ${({ backgroundImage }) => {
    if (backgroundImage) {
      return css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(${backgroundImage});
      `;
    }
  }}

  ${({ gap }) => {
    if (gap) {
      return css`
        column-gap: ${({ gap }) => gap}px;
      `;
    }
  }}

  &.column {
    flex-direction: column;
    ${({ gap }) => {
      if (gap) {
        return css`
          row-gap: ${({ gap }) => gap}px;
          column-gap: 0px;
        `;
      }
    }}
  }

  &.column-reverse {
    flex-direction: column-reverse;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.grid {
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    row-gap: 30px;
    column-gap: ${({ gridColumnGap = 30 }) => gridColumnGap}px;
  }

  &.x-auto {
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
`;
