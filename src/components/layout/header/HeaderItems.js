import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { STYFlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Item = styled.a`
  cursor: pointer;

  .underline {
    width: ${({ hover }) => (hover ? '100%' : 0)};
    transition: width 0.3s;
    background: #fff;
    height: 3px;
  }
`;

const HeaderItems = () => {
  return (
    <STYFlexContainer className="align-ce" gap={24}>
      <HeaderItem className="mobile-none" href="/#features">
        Features
      </HeaderItem>
      <HeaderItem className="mobile-none" href="#tokenomics">
        Tokenomics
      </HeaderItem>
      <HeaderItem className="mobile-none" href="/#roadmap">
        Roadmap
      </HeaderItem>
      <HeaderItem className="mobile-none" href="/#partners">
        Partners
      </HeaderItem>
      <HeaderItem className="mobile-none" href="https://xwallet.kaddex.com" target="_blank">
        X-Wallet
      </HeaderItem>
    </STYFlexContainer>
  );
};

const HeaderItem = ({ id, className, href, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <Item id={id} className={className} href={href} hover={hover} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <>
        <Label className="capitalize" size="small">
          {children}
        </Label>
        <div className="underline"></div>
      </>
    </Item>
  );
};

export default HeaderItems;
