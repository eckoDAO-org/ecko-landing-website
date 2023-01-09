import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Line = styled(FlexContainer)`
  position: absolute;
  border-left: 3px dashed ${({ color }) => getColor(color)};
  top: 0;
  bottom: 0;
  left: 35px;
`;

const MobileRoadmapOngoing = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }} color={color}>
      <Line color={color} />
      {[...Object.values(CONFIGURATION).sort((a, b) => a.position - b.position)].concat([...Array(7).fill()]).map((value, i) => {
        return (
          <FlexContainer key={i} style={{ paddingLeft: 29, zIndex: 2 }}>
            {value?.text && (
              <div
                style={{
                  position: 'relative',
                  height: 16,
                  width: 16,
                  background: getColor(color),
                  borderRadius: '50%',
                }}
              />
            )}

            <FlexContainer className="column" gap={8} key={i} style={{ marginLeft: 10 }}>
              {value?.text?.map((tspan, j) => (
                <Label key={j} fontSize={tspan.fontSize || 15} color={color}>
                  {tspan.text}
                </Label>
              ))}
            </FlexContainer>
          </FlexContainer>
        );
      })}
    </FlexContainer>
  );
};

export default MobileRoadmapOngoing;

const CONFIGURATION = {
  MULTIPLE_AUDITING: {
    position: 0,
    text: [{ text: 'Multiplecode auditing' }],
  },
  TEAM_EXPANSION: {
    position: 1,
    text: [{ text: 'Team Expansion' }],
  },
  NEW_STRATEGIC_PARTNERSHIPS: {
    position: 2,
    text: [{ text: 'New Strategic Partnerships' }],
  },
  DAO_TRANSITION: {
    position: 3,
    text: [{ text: 'DAO Transition' }],
  },
  FIAT_ON_RAMP: {
    position: 4,
    text: [{ text: 'Fiat On Ramp' }],
  },
};
