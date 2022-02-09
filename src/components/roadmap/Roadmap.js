/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import backgroundroadmap from '../../assets/images/roadmap/roadmap-background.png';
import { R_2021, R_2022, R_ONGOING } from '../../constants/roadmaps';
import { RoadmapArrowsIcon } from '../../assets';
import theme from '../../styles/theme';
import RoadmapTabs from './RoadmapTabs';

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
  @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
    & > *:first-child {
      margin-left: 90px;
    }
  }

  svg {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const TRANSLATE_X_OFFSET = 64;

const Roadmap = () => {
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
    <RoadmapWrapper id="roadmap" className="column scroll-mt relative" gap={120} desktopPixel={1460} style={{ marginTop: 100 }}>
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }}>
        Kaddex
        <br />
        Roadmap
      </Label>

      {width <= theme.mediaQueries.mobilePixel && (
        <RoadmapTabs selectedRoadmap={selectedRoadmap} setSelectedRoadmap={setSelectedRoadmap} translateX={translateX} />
      )}

      <RoadmapContainer className="hide-scrollbar" id="roadmaps-container" style={{ width }}>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_2021.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? R_2021.desktopImage : R_2021.mobileImage}
        </FlexContainer>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_2022.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? R_2022.desktopImage : R_2022.mobileImage}
        </FlexContainer>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_ONGOING.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? R_ONGOING.desktopImage : R_ONGOING.mobileImage}
        </FlexContainer>
      </RoadmapContainer>
      {width >= theme.mediaQueries.mobilePixel && (
        <RoadmapTabs selectedRoadmap={selectedRoadmap} setSelectedRoadmap={setSelectedRoadmap} translateX={translateX} />
      )}
    </RoadmapWrapper>
  );
};

export default Roadmap;
