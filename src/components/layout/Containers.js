import styled, { css } from 'styled-components';

export const STYPartialScrollableScrollSection = styled.div`
  flex: 1;
  overflow: auto;
  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const STYContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const STYButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  & > *:not(:last-child) {
    margin-right:16px;
  }

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel}px`}) {
    flex-direction:column;
    & > *:not(:last-child) {
    margin-right:0px;
    margin-bottom:16px;
  }
  }
`;
// -----
export const STYResponsiveContainer = styled.div`
  display: flex;
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    ${({ gap }) => {
      if (gap) {
        return css`
          & > *:not(:last-child) {
            margin-right: ${() => (typeof gap === 'number' ? gap : 16)}px;
          }
        `;
      }
    }}
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    flex-direction: column;
    ${({ gap }) => {
      if (gap) {
        return css`
          & > *:not(:last-child) {
            margin-bottom: ${() => (typeof gap === 'number' ? gap : 16)}px;
          }
        `;
      }
    }}
  }
`;
export const STYRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-right: ${() => (typeof gap === 'number' ? gap : 16)}px;
        }
      `;
    }
  }}
`;

export const STYColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${() => (typeof gap === 'number' ? gap : 16)}px;
        }
      `;
    }
    return null;
  }}
`;

export const STYPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const STYPageResponsiveContainer = styled.div`
  display: flex;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel - 1}px`}) {
    & > *:not(:last-child) {
      margin-right: 16px;
    }

    &:not(.short-element) {
      & > * {
        flex: 1;
      }
    }
    .short-element {
      min-width: 267px;
      max-width: 267px;
    }
  }
`;
