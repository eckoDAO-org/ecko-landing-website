import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Roadmap2021Icon, Roadmap2022Icon, RoadmapOnGoingIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const RoadmapWrapper = styled(FlexContainer)`
  background: #101123;
  border-radius: 60px;
`;

const RoadmapContainer = styled(FlexContainer)`
  transition: transform 0.5s;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  svg {
    width: ${({ width }) => width}px;
    height: 551px;
  }
`;

const ROADMAPS = [
  {
    image: <Roadmap2021Icon />,
    id: '2021',
    order: 0,
  },
  {
    image: <Roadmap2022Icon />,
    id: '2022',
    order: 1,
  },
  {
    image: <RoadmapOnGoingIcon />,
    id: 'ongoing',
    order: 2,
  },
];

const DesktopRoadmap = () => {
  const [width] = useWindowSize();
  const [selectedRoadmap, setSelectedRoadmap] = useState(ROADMAPS[1]);

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const element = document.getElementById('roadmap-2022');
    console.log('element', element.offsetLeft);
    setTranslateX(-element.offsetLeft + 25);
  }, []);

  const onSelectRoadmap = (rm) => {
    if (rm.id !== selectedRoadmap.id) {
      const diff = Math.abs(rm.order - selectedRoadmap.order);
      if (rm.order > selectedRoadmap.order) {
        setTranslateX((prev) => prev + -(diff * width) + 25);
      } else {
        setTranslateX((prev) => prev + diff * width + 25);
      }
      setSelectedRoadmap(rm);
    }
  };
  return (
    <RoadmapWrapper className="column" gap={120}>
      <Label size="big" color="white" fontFamily="syncopate">
        Kaddex
        <br />
        Roadmap
      </Label>
      <RoadmapContainer width={width} translateX={translateX} style={{ width: width + 40 }}>
        {ROADMAPS.map((roadmap, i) => (
          <div id={`roadmap-${roadmap.id}`} key={i}>
            {roadmap.image}
          </div>
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
