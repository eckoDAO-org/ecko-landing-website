import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../../shared/HeaderItem';

const IconListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const AboutList = () => {
  return (
    <IconListContainer>
      <HeaderItem
        disabledHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        Documentation
      </HeaderItem>
      <HeaderItem
        disabledHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        The evolution of DeFi <br />
        on Kadena
      </HeaderItem>
      <HeaderItem disabledHover href='/#features'>
        Unique Features{' '}
      </HeaderItem>
      <HeaderItem disabledHover href='/#tokenomics'>
        Tokenomics
      </HeaderItem>
      <HeaderItem disabledHover href='/#roadmap'>
        Kaddex Roadmap
      </HeaderItem>
    </IconListContainer>
  );
};

export default AboutList;
