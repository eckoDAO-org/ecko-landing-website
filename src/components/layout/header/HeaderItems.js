import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../shared/HeaderItem';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderItems = () => {
  return (
    <RightContainerHeader>
      <HeaderItem style={{ marginRight: 24 }} className="mobile-none" href="/#features">
        Features
      </HeaderItem>
      <HeaderItem style={{ marginRight: 24 }} className="mobile-none" href="#tokenomics">
        Tokenomics
      </HeaderItem>
      <HeaderItem className="mobile-none" href="/#roadmap" style={{ marginRight: 24 }}>
        Roadmap
      </HeaderItem>
      <HeaderItem className="mobile-none" href="/#partners" style={{ marginRight: 24 }}>
        Partners
      </HeaderItem>
      <HeaderItem className="mobile-none" href="https://xwallet.kaddex.com" target="_blank">
        X-Wallet
      </HeaderItem>
    </RightContainerHeader>
  );
};

export default HeaderItems;
