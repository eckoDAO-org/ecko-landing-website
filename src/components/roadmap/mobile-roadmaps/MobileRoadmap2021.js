import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Line = styled(FlexContainer)`
  position: absolute;
  border-left: 3px solid ${({ color }) => getColor(color)};
  top: 0;
  bottom: 0;
  left: 35px;
  ::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 25%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const MobileRoadmap2021 = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }} color={color}>
      <Line color={color} />
      {Object.values(CONFIGURATION)
        .sort((a, b) => a.position - b.position)
        .map((value, i) => {
          return (
            <FlexContainer key={i} style={{ paddingLeft: 29, zIndex: 2 }}>
              <div
                style={{
                  position: 'relative',
                  height: 16,
                  width: 16,
                  background: getColor(color),
                  borderRadius: '50%',
                }}
              />

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

export default MobileRoadmap2021;

const CONFIGURATION = {
  TEAM_FORMATION: {
    position: 0,
    text: [{ text: 'Team Formation' }],
  },
  WEBSITE_V_1: {
    position: 1,
    text: [{ text: 'Website V1' }],
  },
  TOKENOMIC_DEEPDIVE: {
    position: 2,
    text: [{ text: 'Tokenomics Deepdive' }],
  },
  _2M_TVL: {
    position: 3,
    text: [{ text: '2M TVL"' }],
  },
  KADDEX_BETA: {
    position: 4,
    text: [{ text: 'Kaddex Beta"' }],
  },
  COMMUNITY_SALE: {
    position: 5,
    text: [{ text: 'Community Sale"' }],
  },
};
