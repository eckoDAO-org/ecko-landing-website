/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import backgroundroadmap from '../../assets/images/roadmap/roadmap-background.png';
import { R_2021, R_2022, R_ONGOING } from '../../constants/roadmaps';
import theme from '../../styles/theme';
import RoadmapTabs from './RoadmapTabs';
import Roadmap2021 from './desktop-roadmaps/Roadmap2021';
import MobileRoadmap2021 from './mobile-roadmaps/MobileRoadmap2021';
import Roadmap2022 from './desktop-roadmaps/Roadmap2022';
import MobileRoadmap2022 from './mobile-roadmaps/MobileRoadmap2022';
import RoadmapOngoing from './desktop-roadmaps/RoadmapOngoing';
import MobileRoadmapOngoing from './mobile-roadmaps/MobileRoadmapOngoing';

const RoadmapWrapper = styled(FlexContainer)`
  background: #101123;
  border-radius: 60px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: ${`url(${backgroundroadmap})`};
  border-radius: 60px;
  padding-top: 100px;
  padding-bottom: 90px;

  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel - 1}px`}) {
    padding: 80px 0px;
  }
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

  .roadmap-desktop {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

const Roadmap = () => {
  const [width] = useWindowSize();
  const TRANSLATE_X_OFFSET = width <= theme.mediaQueries.mobilePixel ? 50 : 64;
  const [translateX, setTranslateX] = useState(`${TRANSLATE_X_OFFSET}px`);

  const [selectedRoadmapId, setSelectedRoadmapId] = useState(R_2022.id);

  const roadmapsContainer = document.getElementById('roadmaps-container');

  useEffect(() => {
    if (roadmapsContainer) {
      const roadmap = document.getElementById(`roadmap-${selectedRoadmapId}`);
      roadmapsContainer.scrollTo(roadmap.offsetLeft, 0);
      if (selectedRoadmapId === R_2021.id) {
        setTranslateX(`calc(50% - ${TRANSLATE_X_OFFSET}px)`);
      } else if (selectedRoadmapId === R_ONGOING.id) {
        setTranslateX(`calc(-50% - ${TRANSLATE_X_OFFSET}px)`);
      } else {
        setTranslateX(`-${TRANSLATE_X_OFFSET}px`);
      }
    }
  }, [selectedRoadmapId, roadmapsContainer]);

  return (
    <RoadmapWrapper
      id="roadmap"
      gap={50}
      className="column scroll-mt relative"
      desktopPixel={1460}
      style={{ marginTop: 10 }}
      tabletStyle={{ marginTop: 80 }}
    >
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }} mobileStyle={{ marginLeft: 50 }}>
        Kaddex
        <br />
        Roadmap
      </Label>

      {width < theme.mediaQueries.mobilePixel && (
        <RoadmapTabs selectedRoadmapId={selectedRoadmapId} setSelectedRoadmapId={setSelectedRoadmapId} translateX={translateX} />
      )}

      <RoadmapContainer className="hide-scrollbar" id="roadmaps-container" style={{ width }}>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_2021.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? <Roadmap2021 className="roadmap-desktop" /> : <MobileRoadmap2021 color={R_2021.color} />}
        </FlexContainer>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_2022.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? <Roadmap2022 className="roadmap-desktop" /> : <MobileRoadmap2022 color={R_2022.color} />}
        </FlexContainer>
        <FlexContainer style={{ minWidth: width }} id={`roadmap-${R_ONGOING.id}`}>
          {width >= theme.mediaQueries.mobilePixel ? (
            <RoadmapOngoing className="roadmap-desktop" />
          ) : (
            <MobileRoadmapOngoing color={R_ONGOING.color} />
          )}
        </FlexContainer>
      </RoadmapContainer>
      {width >= theme.mediaQueries.mobilePixel && (
        <RoadmapTabs
          style={{ marginTop: 20 }}
          selectedRoadmapId={selectedRoadmapId}
          setSelectedRoadmapId={setSelectedRoadmapId}
          translateX={translateX}
        />
      )}
    </RoadmapWrapper>
  );
};

export default Roadmap;
