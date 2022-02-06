import styled, { css } from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

export const FlexContainer = ({
  className,
  desktopClassName,
  desktopPixel,
  tabletClassName,
  tabletPixel,
  mobileClassName,
  tabletBreakpoint,
  children,
  desktopStyle,
  style,
  tabletStyle,
  mobileStyle,
  ...rest
}) => {
  const [width] = useWindowSize();

  const getClassName = () => {
    let classname = className;
    if (width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopClassName) {
      classname = `${classname} ${desktopClassName} `;
    }
    if (width < (tabletPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletClassName) {
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
      style={{
        ...style,
        ...(width >= (desktopPixel && theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (tabletPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < theme.mediaQueries.mobilePixel && mobileStyle),
      }}
    >
      {children}
    </STYFlexContainer>
  );
};

export const ColumnContainer = ({ children, desktopStyle, style, tabletStyle, mobileStyle, ...rest }) => {
  const [width] = useWindowSize();
  return (
    <STYColumnContainer
      {...rest}
      style={{
        ...style,
        ...(width >= theme.mediaQueries.desktopPixel && desktopStyle),
        ...(width < theme.mediaQueries.desktopPixel && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < theme.mediaQueries.mobilePixel && mobileStyle),
      }}
    >
      {children}
    </STYColumnContainer>
  );
};

export const STYFlexContainer = styled.div`
  display: flex;

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

  &.flex-1 {
    flex: 1;
  }

  &.h-fit-content {
    height: fit-content;
  }

  &.f-wrap {
    flex-wrap: wrap;
  }
  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-right: ${gap}px;
        }
      `;
    }
  }}
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    ${({ mobileGap }) => {
      if (mobileGap) {
        return css`
          & > *:not(:last-child) {
            margin-right: ${mobileGap}px;
          }
        `;
      }
    }}
  }

  &.column {
    flex-direction: column;
    ${({ columnGap }) => {
      if (columnGap) {
        return css`
          flex-direction: column;
          & > *:not(:last-child) {
            margin-bottom: ${columnGap}px;
            margin-right: 0px;
          }
        `;
      }
    }}
  }
`;

export const STYColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  &.align-ce {
    align-items: center;
  }

  &.justify-fe {
    justify-content: flex-end;
  }

  &.justify-sb {
    justify-content: space-between;
  }

  &.justify-ce {
    justify-content: center;
  }

  &.relative {
    position: relative;
  }

  &.w-100 {
    width: 100%;
  }

  &.h-fit-content {
    height: fit-content;
  }

  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${gap}px;
        }
      `;
    }
  }}

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    &.tablet-align-ce {
      align-items: center;
    }
  }
`;
