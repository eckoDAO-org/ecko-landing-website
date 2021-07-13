import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import HeaderItem from "../../../shared/HeaderItem";
import Button from "../../../shared/Button";
import { HamburgerIcon, CodeIcon, DiscordIcon } from "../../../assets";
import { Popup } from "semantic-ui-react";

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 13px;
  }
  & > *:not(:first-child):not(:last-child) {
    margin-right: 14px;
  }
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      mediaQueries.mobileBreakpoint}) {
    & > *:not(:first-child):not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const Label = styled.span`
  font-size: 13px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  text-transform: capitalize;
  padding: 10px 16px;
  color: white;
  fontsize: 16;
`;

const HamburgerListContainer = styled.div`
  border-radius: 4px;
  background: #240B2F 0% 0% no-repeat padding-box;
`;

const HamburgerItem = styled.div`
  display: flex;
  align-items: center;
  font-family: montserrat-regular;
  font-size: 16px;
  background: #240B2F 0% 0% no-repeat padding-box;
  color: #FFFFFF;
  &:hover {
    color: #FFFFFF;
    text-shadow: 0 0 5px #FFFFFF;
    & svg {
      margin-right: 10px;
      & path {
        fill: #FFFFFF;
      }
    }
  }
  & svg {
    margin-right: 10px;
  }
`;

const RightHeaderItems = ({ pact }) => {
  return (
    <RightContainerHeader>
     
          <HeaderItem className="mobile-none">
            <Button
              hover={true}
              buttonStyle={{ padding: "6px 22px" }}
              fontSize={14}
              onClick={() =>
                  window.open(
                    `https://swap.kaddex.com`,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
            >
              Use Kaddex
            </Button>
          </HeaderItem>
      
      
        <HeaderItem style={{ marginLeft: "45px"}}>
          
            <Popup
              basic
              trigger={<HamburgerIcon />}
              on="click"
              offset={[8, 20]}
              position="bottom right"
              style={{ padding: 13, background: "#240B2F 0% 0% no-repeat padding-box", border: "2px solid #FFFFFF", boxShadow: "0 0 5px #FFFFFF", borderRadius: "10px"}}
            >
              
              <HamburgerListContainer>
                <HamburgerItem
                  to="/"
                  style={{ paddingBottom: 9 }}
                  onClick={() =>
                    window.open(
                      `https://github.com/sportelliguglielmo/kaddex-home-page`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <CodeIcon />
                  Code
                </HamburgerItem>
                <HamburgerItem
                  to="/"
                  onClick={() =>
                    window.open(
                      `https://discord.io`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <DiscordIcon />
                  Discord
                </HamburgerItem>
              </HamburgerListContainer>
            </Popup>
          
        </HeaderItem>
      
      
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
