import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  overflow-x: auto;
  overflow-y: hidden;
  & > *:first-child {
    margin-left: 40%;
  }
  & > *:last-child {
    margin-right: 40%;
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

  const onSelectRoadmap = (rm) => {
    if (rm.id !== selectedRoadmap.id) {
      setSelectedRoadmap(rm);
    }
  };

  const elementContainer = document.getElementById('roadmaps-container');

  useEffect(() => {
    if (selectedRoadmap && elementContainer) {
      const element = document.getElementById(`roadmap-${selectedRoadmap.id}`);

      elementContainer.scrollTo(element.offsetLeft, 0);
    }
  }, [selectedRoadmap, elementContainer]);

  return (
    <RoadmapWrapper id="roadmap" className="column" gap={120}>
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }}>
        Kaddex
        <br />
        Roadmap
      </Label>
      <RoadmapContainer className="hide-scrollbar" id="roadmaps-container" style={{ width: width + 40 }}>
        {ROADMAPS.map((roadmap, i) => (
          <div style={{ minWidth: width }} id={`roadmap-${roadmap.id}`} key={i}>
            {roadmap.image}
          </div>
        ))}
      </RoadmapContainer>
      <TabsContainer style={{ width }} className="hide-scrollbar justify-sb">
        {ROADMAPS.map((roadmap, i) => (
          <Label
            key={i}
            fontFamily="syncopate"
            color={selectedRoadmap.id === roadmap.id ? 'pink' : 'white'}
            fontSize={80}
            onClick={() => onSelectRoadmap(roadmap)}
            style={{ minWidth: '40%' }}
          >
            {roadmap.id}
          </Label>
        ))}
      </TabsContainer>
    </RoadmapWrapper>
  );
};

export default DesktopRoadmap;
