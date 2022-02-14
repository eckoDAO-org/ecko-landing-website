import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const RoadmapContainer = styled.div`
.timeline_ongoing {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}
.timeline_ongoing::after {
  content: '';
  position: absolute;
  width: 3px;
  background: linear-gradient(to top, #ffffff 0%, #FFFFFF 68%);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}


@media (max-width: 768px) {
  .timeline_ongoing::after {
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


const MobileRoadmapOngoing = () => {
    return (
        <RoadmapContainer>
            <div  className='timeline_ongoing'>
            <div class='roadmap_container left'>
              <RoadmapItemLeft >
              Multiplecode
              </RoadmapItemLeft>
              <RoadmapItemLeft >
                  code-auditing          
              </RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight >Team Expansion</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
              <RoadmapItemLeft >
              New Strategic
              </RoadmapItemLeft>
              <RoadmapItemLeft >
                  Partnerships         
              </RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight >DAO Transition</RoadmapItemRight>
          </div>
          </div>
        </RoadmapContainer>
    );
};

export default MobileRoadmapOngoing;