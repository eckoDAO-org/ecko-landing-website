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

const AboutList = () => {
  return (
    <ListContainer>
      <HeaderItem
        disabledHover
        textRegular
        shadowHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        Documentation
      </HeaderItem>
      <HeaderItem disabledHover textRegular shadowHover href='/#proof_of_dex'>
        The most powerful
        <br /> Proof of Work DEX
      </HeaderItem>
      <HeaderItem disabledHover shadowHover textRegular href='/#1'>
        Unique Features{' '}
      </HeaderItem>
      <HeaderItem disabledHover shadowHover textRegular href='/#tokenomics'>
        Tokenomics
      </HeaderItem>
      <HeaderItem disabledHover shadowHover textRegular href='/#roadmap'>
        Kaddex Roadmap
      </HeaderItem>
    </ListContainer>
  );
};

export default AboutList;
