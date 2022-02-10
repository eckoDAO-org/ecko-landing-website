import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Item = styled.a`
  cursor: pointer;
  text-decoration: none;
  .underline {
    width: ${({ hover }) => (hover ? '100%' : 0)};
    transition: width 0.3s;
    background: #fff;
    height: 3px;
  }
`;

const HeaderItems = ({ className }) => {
  return (
    <FlexContainer className={`align-ce ${className}`} gap={24}>
      <HeaderItem href="/#features">Features</HeaderItem>
      <HeaderItem href="#tokenomics">Tokenomics</HeaderItem>
      <HeaderItem href="/#roadmap">Roadmap</HeaderItem>
      <HeaderItem href="/#partners">Partners</HeaderItem>
      <HeaderItem href="https://xwallet.kaddex.com" target="_blank">
        X-Wallet
      </HeaderItem>
    </FlexContainer>
  );
};

export const HeaderItem = ({ id, className, href, children, fontSize, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <Item
      id={id}
      className={className}
      href={href}
      hover={hover}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <>
        <Label className="capitalize" size="small" fontSize={fontSize}>
          {children}
        </Label>
        <div className="underline"></div>
      </>
    </Item>
  );
};

export default HeaderItems;
