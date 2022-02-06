import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

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

  &.h-fit-content {
    height: fit-content;
  }

  column-gap: ${({ gap }) => gap}px;

  &.column {
    flex-direction: column;
    row-gap: ${({ gap }) => gap}px;
    column-gap: 0px;
  }

  &.column-reverse {
    flex-direction: column-reverse;
  }

  &.wrap {
    flex-wrap: wrap;
  }
`;
