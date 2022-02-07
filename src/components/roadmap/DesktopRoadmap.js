import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Roadmap2021Icon, Roadmap2022Icon, RoadmapOnGoingIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import Roadmap2021 from './desktop-roadmaps/Roadmap2021';
import Roadmap2022 from './desktop-roadmaps/Roadmap2022';
import RoadmapOngoing from './desktop-roadmaps/RoadmapOngoing';
import backgroundroadmap from '../../assets/images/roadmap/roadmap-background.png';

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

  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  svg {
    min-width: 100%;
    height: auto;
  }
`;

const ROADMAPS = [
  {
    image: <Roadmap2021 />,
    id: '2021',
    order: 0,
  },
  {
    image: <Roadmap2022 />,
    id: '2022',
    order: 1,
  },
  {
    image: <RoadmapOngoing />,
    id: 'ongoing',
    order: 2,
  },
];

const DesktopRoadmap = () => {
  const [width] = useWindowSize();
  const [selectedRoadmap, setSelectedRoadmap] = useState(ROADMAPS[1]);

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (width && !translateX) {
      setTranslateX(width);
    }
  }, [width]);
  console.log('translateX', translateX);
  const onSelectRoadmap = (rm) => {
    if (rm.id !== selectedRoadmap.id) {
      const diff = Math.abs(rm.order - selectedRoadmap.order);

      if (rm.order > selectedRoadmap.order) {
        setTranslateX((prev) => prev + diff * width);
      } else {
        setTranslateX((prev) => prev - diff * width);
      }
    }
    setSelectedRoadmap(rm);
  };

  useEffect(() => {
    const elementContainer = document.getElementById('roadmaps-container');
    if (elementContainer) {
      elementContainer.scrollTo(translateX, 0);
    }
  }, [translateX]);

  return (
    <RoadmapWrapper className="column" gap={120}>
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }}>
        Kaddex
        <br />
        Roadmap
      </Label>
      {/* <img style={{ position: 'absolute', height: '100%', width: '100%' }} src={backgroundroadmap} alt="" /> */}
      <RoadmapContainer id="roadmaps-container" width={width} translateX={translateX} style={{ width: width + 40 }}>
        {ROADMAPS.map((roadmap, i) => (
          <React.Fragment id={`roadmap-${roadmap.id}`} key={i}>
            {roadmap.image}
          </React.Fragment>
        ))}
      </RoadmapContainer>
      <FlexContainer className="justify-sb">
        {ROADMAPS.map((roadmap, i) => (
          <Label
            key={i}
            fontFamily="syncopate"
            color={selectedRoadmap.id === roadmap.id ? 'pink' : 'white'}
            fontSize={80}
            onClick={() => onSelectRoadmap(roadmap)}
          >
            {roadmap.id}
          </Label>
        ))}
      </FlexContainer>
    </RoadmapWrapper>
  );
};

export default DesktopRoadmap;
