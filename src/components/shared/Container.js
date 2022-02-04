import styled, { css } from 'styled-components/macro';

export const STYFlexContainer = styled.div`
  display: flex;

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
`;
