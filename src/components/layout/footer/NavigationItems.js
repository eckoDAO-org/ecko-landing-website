import React, { useState } from 'react';
import styled from 'styled-components/macro';
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

const NavigationItems = ({ fontSize, color, onClick, disableHover, hideWallet, hideDAO }) => {
  return (
    <>
      <NavigationItem href="/#features" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Features
      </NavigationItem>
      <NavigationItem href="/#tokenomics" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Tokenomics
      </NavigationItem>
      <NavigationItem href="/#roadmap" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Roadmap
      </NavigationItem>
      <NavigationItem href="/#partners" fontSize={fontSize} color={color} onClick={onClick} disableHover={disableHover}>
        Partners
      </NavigationItem>

      <NavigationItem
        href="https://blog.ecko.finance"
        target="_blank"
        fontSize={fontSize}
        color={color}
        onClick={onClick}
        disableHover={disableHover}
      >
        Blog
      </NavigationItem>

      {!hideWallet && (
        <NavigationItem
          href="https://wallet.ecko.finance"
          target="_blank"
          fontSize={fontSize}
          color={color}
          onClick={onClick}
          disableHover={disableHover}
        >
          eckoWALLET
        </NavigationItem>
      )}

      {!hideDAO && (
        <NavigationItem
          href="https://dao.ecko.finance"
          target="_blank"
          fontSize={fontSize}
          color={color}
          onClick={onClick}
          disableHover={disableHover}
        >
          eckoDAO
        </NavigationItem>
      )}
    </>
  );
};

export const NavigationItem = ({ id, className, href, children, fontSize, color, onClick, disableHover }) => {
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
        <Label size="small" color={color} fontSize={fontSize}>
          {children}
        </Label>
        {!disableHover && <div className="underline"></div>}
      </>
    </Item>
  );
};

export default NavigationItems;
