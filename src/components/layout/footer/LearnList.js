import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../../shared/HeaderItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const LearnList = () => {
  return (
    <ListContainer>
      <HeaderItem
        disabledHover
        textRegular
        shadowHover
        href="/kaddex litepaper.pdf"
        target="_blank"
      >
        Lite Paper
      </HeaderItem>
      <HeaderItem
        disabledHover
        textRegular
        // shadowHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        FAQ
      </HeaderItem>
    </ListContainer>
  );
};

export default LearnList;
