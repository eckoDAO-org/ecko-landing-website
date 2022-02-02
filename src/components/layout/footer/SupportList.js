import React from "react";
import styled from "styled-components";
import HeaderItem from "../../../components/shared/HeaderItem";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const SupportList = () => {
  return (
    <ListContainer>
      <HeaderItem
        disabledHover
        textRegular
        // shadowHover
        onClick={() => window.open("", "_blank", "noopener,noreferrer")}
      >
        Getting Started on <br /> Kaddex
      </HeaderItem>
      <HeaderItem
        disabledHover
        textRegular
        // shadowHover
        onClick={() => window.open("", "_blank", "noopener,noreferrer")}
      >
        Auditing
      </HeaderItem>
    </ListContainer>
  );
};

export default SupportList;
