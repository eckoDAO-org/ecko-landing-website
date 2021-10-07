import React from "react";
import styled from 'styled-components/macro';
import Button from "../shared/Button";
import { KaddexLogo} from "../assets";
import "./MainContainer.css"
import { ReactComponent as TwitterLogo } from "../assets/images/shared/twitter.svg";
import { ReactComponent as TelegramLogo } from "../assets/images/shared/telegram.svg";
import { ReactComponent as DiscordLogo } from "../assets/images/shared/discord.svg";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  /* overflow: auto; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RoadmapContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    margin-top: 40px;
    flex-flow: column;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 1%;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  width: 100%;
`;

const Title = styled.span`
    text-align: center;
    font: normal normal bold 56px/64px montserrat-bold;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-bottom: 55px;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 28px montserrat-bold;
  }
`;

const SubTitle = styled.span`
    margin-top: 5px;
    padding 0px;
    text-align: center;
    font: normal normal normal 32px/40px montserrat-regular;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 18px montserrat-regular;
  }
`;

const SubTitleB = styled.span`
    margin-top: 5px;
    margin-bottom: 25px;
    padding 0px;
    text-align: center;
    font: normal normal bold 32px/40px montserrat-bold;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 18px montserrat-bold;
  }
`;

const RoadmapItemLeft = styled.p`
    text-align: right;
    margin-right: 40px;
    font: normal normal normal 16px/24px montserrat-regular;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 13px montserrat-regular;
    margin-left: 40px;
    text-align: left;
  }
`;
const RoadmapItemRight = styled.p`
    text-align: left;
    margin-left: 40px;
    font: normal normal normal 16px/24px montserrat-regular;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 13px montserrat-regular;
  }
`;
const PrivacyElement = styled.p`
    font: normal normal normal 14px/20px montserrat-regular;
`;



const MainContainer = () => {
    return (
        <OuterContainer>
            <TextContainer>
                <Title>
                    Multiprotocol Decentralized Exchange (DEX)
                </Title>
                <SubTitle>
                    Powered by Kadena, the only scalable PoW blockchain,
                </SubTitle>
                <SubTitleB>
                    Kaddex is the first truly decentralised DEX
                </SubTitleB>
            </TextContainer>
            <Button
              hover={true}
              background= "#FFFFFF 0% 0% no-repeat padding-box"
              border= "1px solid #FFFFFF"
              color= "#4C125A"
              buttonStyle={{ padding: "8px 45px" }}
              boxShadow= "0 0 3px #FFFFFF"
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
            <RoadmapContainer>
                <Title style={{marginBottom: "40px", marginTop: "20%"}}>Roadmap 2021</Title>
                <div class="timeline">
                    <div class="roadmap_container_completed left">
                        <RoadmapItemLeft>
                             Kaddex Beta on Mainnet
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container_completed right">
                        <RoadmapItemRight>
                            1M TVL 
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container_completed left">
                        <RoadmapItemLeft>
                            Tokenomics Deep Dive
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Kaddex Website Refresh
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Lite Paper
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Native and Bridged ERC-20 Token Pairs
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Kaddex Full Launch on Mainnet
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            Institutional Collaboration
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            DEX Whitepaper
                        </RoadmapItemLeft>
                    </div>
                    <div class="roadmap_container right">
                        <RoadmapItemRight>
                            ERC-20 Public Sale
                        </RoadmapItemRight>
                    </div>
                    <div class="roadmap_container left">
                        <RoadmapItemLeft>
                            Transition to a DAO
                        </RoadmapItemLeft>
                    </div>
                </div>
            </RoadmapContainer>
            <FooterContainer>
                <KaddexLogo className= "mobile-none"
                />
                <PrivacyElement className= "mobile-none">©2021, Privacy Policy</PrivacyElement>

                <div className= "desktop-none">
                    <KaddexLogo/>
                    <PrivacyElement>©2021, Privacy Policy</PrivacyElement>
                </div>

                  
                <IconsContainer>
                <TwitterLogo
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        window.open(
                        `https://twitter.com/KaddeXofficial`,
                        "_blank",
                        "noopener,noreferrer"
                        )
                    }
                />
                
                <TelegramLogo
                    style={{ cursor: "pointer", marginLeft: "4%" }}
                    onClick={() =>
                        window.open(
                        `https://t.me/KaddeXofficial`,
                        "_blank",
                        "noopener,noreferrer"
                        )
                    }
                />
                <DiscordLogo
                    style={{ cursor: "pointer", marginLeft: "4%" }}
                    onClick={() =>
                        window.open(
                        `https://discord.gg/QSJpHRFDcv`,
                        "_blank",
                        "noopener,noreferrer"
                        )
                    }
                />
                </IconsContainer>
            </FooterContainer>
            
      </OuterContainer>
  );
};

export default MainContainer;
