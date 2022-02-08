/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import backgroundroadmap from '../../assets/images/roadmap/roadmap-background.png';
import { ROADMAPS, R_2021, R_2022, R_ONGOING } from '../../constants/roadmaps';

const RoadmapWrapper = styled(FlexContainer)`
  background: #101123;
  border-radius: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: ${`url(${backgroundroadmap})`};
  border-radius: 60px;
  padding-top: 150px;
  padding-bottom: 90px;
`;

const RoadmapContainer = styled(FlexContainer)`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  & > *:first-child {
    padding-left: 90px;
  }

  svg {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const TabsContainer = styled(FlexContainer)`
  transition: transform 0.5s;
  transform: ${({ translateX }) => `translateX(${translateX})`};
`;

const TRANSLATE_X_OFFSET = 64;

const DesktopRoadmap = () => {
  const [width] = useWindowSize();
  const [selectedRoadmap, setSelectedRoadmap] = useState(R_2022);
  const [translateX, setTranslateX] = useState(`${TRANSLATE_X_OFFSET}px`);

  const roadmapsContainer = document.getElementById('roadmaps-container');

  useEffect(() => {
    if (selectedRoadmap && roadmapsContainer) {
      const roadmap = document.getElementById(`roadmap-${selectedRoadmap.id}`);

      roadmapsContainer.scrollTo(roadmap.offsetLeft, 0);
      if (selectedRoadmap.id === R_2021.id) {
        setTranslateX(`calc(50% - ${TRANSLATE_X_OFFSET}px)`);
      } else if (selectedRoadmap.id === R_ONGOING.id) {
        setTranslateX(`calc(-50% - ${TRANSLATE_X_OFFSET}px)`);
      } else {
        setTranslateX(`-${TRANSLATE_X_OFFSET}px`);
      }
    }
  }, [selectedRoadmap, roadmapsContainer]);

  return (
    <RoadmapWrapper id="roadmap" className="column" gap={120} desktopPixel={1460} tabletStyle={{ marginTop: 100 }}>
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }}>
        Kaddex
        <br />
        Roadmap
      </Label>
      <RoadmapContainer className="hide-scrollbar" id="roadmaps-container" style={{ width: width }}>
        {ROADMAPS.map((roadmap, i) => (
          <div style={{ minWidth: width }} id={`roadmap-${roadmap.id}`} key={i}>
            {roadmap.image}
          </div>
        ))}
      </RoadmapContainer>
      <TabsContainer id="tabs-container" translateX={translateX} style={{ width: width }}>
        <FlexContainer className="justify-fe" id={`tab-${R_2021.id}`}>
          <Label
            fontFamily="syncopate"
            color={selectedRoadmap.id === R_2021.id ? 'pink' : 'white'}
            fontSize={80}
            onClick={() => setSelectedRoadmap(R_2021)}
          >
            {R_2021.id}
          </Label>
        </FlexContainer>
        <FlexContainer className="justify-ce" id={`tab-${R_2022.id}`} style={{ minWidth: width - 400 }}>
          <Label
            fontFamily="syncopate"
            color={selectedRoadmap.id === R_2022.id ? 'pink' : 'white'}
            fontSize={80}
            onClick={() => setSelectedRoadmap(R_2022)}
          >
            {R_2022.id}
          </Label>
        </FlexContainer>
        <FlexContainer className="justify-fs" id={`tab-${R_ONGOING.id}`}>
          <Label
            fontFamily="syncopate"
            color={selectedRoadmap.id === R_ONGOING.id ? 'pink' : 'white'}
            fontSize={80}
            onClick={() => setSelectedRoadmap(R_ONGOING)}
          >
            {R_ONGOING.id}
          </Label>
        </FlexContainer>
      </TabsContainer>
    </RoadmapWrapper>
  );
};

export default DesktopRoadmap;
