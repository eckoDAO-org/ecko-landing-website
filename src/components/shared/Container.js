import styled from 'styled-components/macro';

export const STYRowContainer = styled.div`
  display: flex;
  width: 100%;
  &.align-fs {
    align-items: flex-start;
  }
  &.align-fe {
    align-items: flex-end;
  }
  &.justify-ce {
    justify-content: center;
  }
`;

export const STYColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
