import React from 'react';
import styled, { css } from 'styled-components';
import  TokenomicsRing  from '../../../assets/images/tokenomics/token_ring_2.svg';
import theme from '../../../styles/theme';

const RoadmapContainer = styled.div`
.timeline_2022 {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}
.timeline_2022::after {
  content: '';
  position: absolute;
  width: 3px;
  background: linear-gradient(to bottom, #ec1bb4 18%,#FFFFFF 18%);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}


@media (max-width: 768px) {
  .timeline_2022::after {
    left: 90px;
  }
}

.image{
  background-repeat: no-repeat;
  background-position-x: 30%;
}
`;

const RoadmapItemLeft = styled.p`
  text-align: right;
  margin-right: 40px;
  ${({regular})=>{
    if(regular) return css`
      font: normal normal normal 16px/24px ${theme.fontFamily.regular};
      margin-top:-10px;
    `
    else return css`
          font: normal normal bold 16px/24px ${theme.fontFamily.bold};
    `
  }}

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    ${({regular})=>{
    if(regular) return css`
      font: normal normal normal 16px ${theme.fontFamily.regular};
    `
    else return css`
          font: normal normal bold 16px ${theme.fontFamily.bold};
    `
  }}
    margin-left: 40px;
    text-align: left;
  }
`;
const RoadmapItemRight = styled.p`
  text-align: left;
  margin-left: 40px;
  ${({regular})=>{
    if(regular) return css`
      font: normal normal normal 16px/24px ${theme.fontFamily.regular};
      margin-top:-10px;
    `
    else return css`
          font: normal normal bold 16px/24px ${theme.fontFamily.bold};
    `
  }}
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
     ${({regular})=>{
    if(regular) return css`
      font: normal normal normal 16px ${theme.fontFamily.regular};
    `
    else return css`
          font: normal normal bold 16px ${theme.fontFamily.bold};
    `
  }}
  }
`;


const MobileRoadmap2022 = () => {
    return (
        <RoadmapContainer>
            <div  className='timeline_2022'>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft className='completed'>
              X-Wallet Beta
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft className='completed'>
               Litepaper
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed right'>
            <RoadmapItemRight className='completed'>X-Wallet v1</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
          <RoadmapItemLeft>
             Public Sale
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
          <RoadmapItemLeft>
              KDX Vaulting Programme
            </RoadmapItemLeft>
            <RoadmapItemLeft regular >
                available for early investors          
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight  >Bridge ERC-20 Token Pairs</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft  >3d Swapping interface</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight  >Website v2</RoadmapItemRight>
          </div>
          <div class='roadmap_container left image'  style={{ backgroundImage: `url(${TokenomicsRing})` }}>
            <RoadmapItemLeft  >Kaddex v1</RoadmapItemLeft>
            <RoadmapItemLeft  >full launch</RoadmapItemLeft>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft  >Single Sided</RoadmapItemLeft>
            <RoadmapItemLeft  >Liquidity</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight  >KDX Liquidity</RoadmapItemRight>
            <RoadmapItemRight  >Mining Programme</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft  >Whitepaper</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight  >Lending & borrowing</RoadmapItemRight>
            <RoadmapItemRight  >functionalities</RoadmapItemRight>
          </div>
          </div>
        </RoadmapContainer>
    );
};

export default MobileRoadmap2022;