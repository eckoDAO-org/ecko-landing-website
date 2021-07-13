import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const Item = styled(NavLink)`
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  text-transform: capitalize;
  background: transparent;
  &.active {
    font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  }
  &:hover {
    color: white;
    opacity: 0.7;
    cursor: pointer;
  }
`;
const HeaderItem = ({ id, className, route, children }) => {
  return (
    <Item id={id} className={className} exact to={route ? route : "#"}>
      {children}
    </Item>
  );
};

export default HeaderItem;
