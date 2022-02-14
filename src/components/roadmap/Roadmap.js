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

  svg {
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

  // const onRoadmapScroll = () => {
  //   console.log('roadmapsContainer.scrollLeft', roadmapsContainer.scrollLeft);
  //   if (roadmapsContainer.scrollLeft < width / 2 - width / 4) {
  //     setSelectedRoadmapId(R_2021.id);
  //   } else if (roadmapsContainer.scrollLeft > width * 2 - width / 6) {
  //     setSelectedRoadmapId(R_ONGOING.id);
  //   } else {
  //     setSelectedRoadmapId(R_2022.id);
  //   }
  // };

  useEffect(() => {
    if (roadmapsContainer) {
      // roadmapsContainer.addEventListener('scroll', onRoadmapScroll);
      const roadmap = document.getElementById(`roadmap-${selectedRoadmapId}`);
      roadmapsContainer.scrollTo(roadmap.offsetLeft, 0);
      if (selectedRoadmapId === R_2021.id) {
        setTranslateX(`calc(50% - ${TRANSLATE_X_OFFSET}px)`);
      } else if (selectedRoadmapId === R_ONGOING.id) {
        setTranslateX(`calc(-50% - ${TRANSLATE_X_OFFSET}px)`);
      } else {
        setTranslateX(`-${TRANSLATE_X_OFFSET}px`);
      }
      // return () => roadmapsContainer.removeEventListener('scroll', onRoadmapScroll);
    }
  }, [selectedRoadmapId, roadmapsContainer]);
  // const [node, setNode] = useState({ config: null, element: null });
  // const [timer, setTimer] = useState(null);

  // const closePopup = () => {
  //   const t = setTimeout(() => {
  //     setNode({ config: null, element: null });
  //   }, 1000);
  //   setTimer(t);
  // };

  // const getOffset = () => {
  //   if (node.config.level === 0) {
  //     return 0;
  //   }
  //   if (node.config.level === 2) {
  //     return roadmapsContainer.getBoundingClientRect().height - (roadmapsContainer.getBoundingClientRect().height * 20) / 100;
  //   }
  // };
  return (
    <RoadmapWrapper id="roadmap" gap={120} className="column scroll-mt relative" desktopPixel={1460} style={{ marginTop: 100 }}>
      <Label size="big" color="white" fontFamily="syncopate" style={{ marginLeft: 90 }}>
        Kaddex
        <br />
        Roadmap
      </Label>

      {width <= theme.mediaQueries.mobilePixel && (
        <RoadmapTabs selectedRoadmapId={selectedRoadmapId} setSelectedRoadmapId={setSelectedRoadmapId} translateX={translateX} />
      )}
      {/* {node?.config && (
        <FlexContainer
          className="absolute"
          style={{
            top: 120 + 50 + 150 + getOffset(),
            left: node.element.x,
            width: '20%',
            height: '20%',
            boxShadow: '20px 20px 100px rgba(0, 0, 0, 0.25)',
            backgroundColor: '#293445',
            borderRadius: 20,
          }}
          onMouseLeave={() => closePopup()}
        >
          {node?.config?.title}
        </FlexContainer>
      )} */}
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
        <RoadmapTabs selectedRoadmapId={selectedRoadmapId} setSelectedRoadmapId={setSelectedRoadmapId} translateX={translateX} />
      )}
    </RoadmapWrapper>
  );
};

export default Roadmap;
