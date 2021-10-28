import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Item = styled.a`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  background: transparent;
  cursor: pointer;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: #fff;
    height: 3px;
  }
`;
const HeaderItem = ({
  id,
  className,
  href,
  children,
  disabledHover,
  style,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Item
      id={id}
      className={className}
      href={href}
      isHover={disabledHover ? false : isHover}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={style}
    >
      <>
        {children}
        {!disabledHover && <div className='underline'></div>}
      </>
    </Item>
  );
};

export default HeaderItem;
