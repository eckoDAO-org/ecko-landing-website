import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import RoadmapTabs from '../components/roadmap/RoadmapTabs';
import MobileRoadmapTabs from '../components/roadmap/MobileRoadmapTabs';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  /* overflow: auto; */
`;

const RoadmapContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  width: 100%;

  .completed {
    color: #ec1bb4;
    font-weight: bold;
  }
`;

const Title = styled.span`
  text-align: center;
  font: normal normal bold 56px/64px montserrat-bold;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 28px montserrat-bold;
  }
`;


const RoadmapSection = () => {
  return (
    <Container>
      <RoadmapContainer className='mobile-none'>
        <div
          id='roadmap'
          style={{ position: 'relative', color: 'trasparent', height: 50 }}
        ></div>
        <Title>Kaddex Roadmap</Title>
        <RoadmapTabs/>
      </RoadmapContainer>
      <RoadmapContainer className='desktop-none'>
        <Title style={{ marginBottom: '40px', marginTop: '20%' }}>
          Roadmap 2021
        </Title>
        <MobileRoadmapTabs/>


      </RoadmapContainer>


    </Container>
  );
};

export default RoadmapSection;
