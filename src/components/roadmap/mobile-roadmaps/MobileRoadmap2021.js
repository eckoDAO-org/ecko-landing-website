import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const RoadmapContainer = styled.div`
.timeline_2021 {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}
.timeline_2021::after {
  content: '';
  position: absolute;
  width: 3px;
  background:#ec1bb4;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}


@media (max-width: 768px) {
  .timeline_2021::after {
    left: 90px;
  }
}
`;

const RoadmapItemLeft = styled.p`
  text-align: right;
  margin-right: 40px;
  font: normal normal bold 16px/24px ${theme.fontFamily.bold};

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 16px ${theme.fontFamily.bold};
    margin-left: 40px;
    text-align: left;
  }
`;
const RoadmapItemRight = styled.p`
  text-align: left;
  margin-left: 40px;
  font: normal normal bold 16px/24px ${theme.fontFamily.bold};

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 16px ${theme.fontFamily.bold};
  }
`;


const MobileRoadmap2021 = () => {
    return (
        <RoadmapContainer>
            <div  className='timeline_2021'>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft className='completed'>
             Team Formation
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed right'>
            <RoadmapItemRight className='completed'>Community Sale</RoadmapItemRight>
          </div>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft className='completed'>
             Kaddex Beta
            </RoadmapItemLeft>
            <RoadmapItemLeft className='completed'>
                Live on Mainnet            
            </RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed right'>
            <RoadmapItemRight className='completed'>
              2M TVL
            </RoadmapItemRight>
          </div>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft  className='completed'>Tokenomics Deepdive</RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed right'>
            <RoadmapItemRight  className='completed'>Website V1</RoadmapItemRight>
          </div>
          </div>
        </RoadmapContainer>
    );
};

export default MobileRoadmap2021;