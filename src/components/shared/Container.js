import styled, { css } from 'styled-components/macro';

export const STYRowContainer = styled.div`
  display: flex;
  flex: 1;
  &.align-fs {
    align-items: flex-start;
  }
  &.align-fe {
    align-items: flex-end;
  }
  &.justify-ce {
    justify-content: center;
  }

  &.justify-sb {
    justify-content: space-between;
  }

  &.absolute {
    position: absolute;
  }

  &.fixed {
    position: fixed;
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
`;

export const STYColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  &.align-ce {
    align-items: center;
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

  ${({ gap }) => {
    if (gap) {
      return css`
        & > *:not(:last-child) {
          margin-bottom: ${gap}px;
        }
      `;
    }
  }}
`;
