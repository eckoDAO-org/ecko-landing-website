import React from 'react';
import styled from 'styled-components';
import { R_2021, R_2022, R_ONGOING } from '../../constants/roadmaps';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const TabsContainer = styled(FlexContainer)`
  transition: transform 0.5s;
  transform: ${({ translateX }) => `translateX(${translateX})`};
`;

const RoadmapTabs = ({ showLabels, translateX, selectedRoadmapId, setSelectedRoadmapId, style }) => {
  const [width] = useWindowSize();
  return (
    <TabsContainer id="tabs-container" translateX={translateX} style={{ width, ...style }}>
      {showLabels ? (
        <>
          <FlexContainer className="justify-fe" id={`tab-${R_2021.id}`}>
            <Label
              fontFamily="syncopate"
              color={selectedRoadmapId === R_2021.id ? R_2021.color : 'white'}
              fontSize={width >= theme.mediaQueries.mobilePixel ? 80 : 30}
              onClick={() => setSelectedRoadmapId(R_2021.id)}
            >
              {R_2021.id}
            </Label>
          </FlexContainer>
          <FlexContainer
            className="justify-ce"
            id={`tab-${R_2022.id}`}
            style={{ minWidth: width <= theme.mediaQueries.mobilePixel ? width - 100 : width - 400 }}
          >
            <Label
              fontFamily="syncopate"
              color={selectedRoadmapId === R_2022.id ? R_2022.color : 'white'}
              fontSize={width >= theme.mediaQueries.mobilePixel ? 80 : 30}
              onClick={() => setSelectedRoadmapId(R_2022.id)}
            >
              {R_2022.id}
            </Label>
          </FlexContainer>
          <FlexContainer className="justify-fs" id={`tab-${R_ONGOING.id}`}>
            <Label
              fontFamily="syncopate"
              color={selectedRoadmapId === R_ONGOING.id ? R_ONGOING.color : 'white'}
              fontSize={width >= theme.mediaQueries.mobilePixel ? 80 : 30}
              onClick={() => setSelectedRoadmapId(R_ONGOING.id)}
            >
              {R_ONGOING.id}
            </Label>
          </FlexContainer>
        </>
      ) : (
        <Label color="primary" fontFamily="syncopate" fontSize={width >= theme.mediaQueries.mobilePixel ? 80 : 30}>
          2022
        </Label>
      )}
    </TabsContainer>
  );
};

export default RoadmapTabs;
