import React from 'react';
import styled from 'styled-components';
import { RoadmapFlagcon } from '../../../assets';
import { getColor } from '../../../styles/theme';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Line = styled(FlexContainer)`
  position: absolute;
  border-left: 3px solid #fff;
  top: 0;
  bottom: 0;
  left: 35px;
  ::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 8%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const MobileRoadmap2024 = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }}>
      <Line color={color} />
      {Object.values(CONFIGURATION)
        .sort((a, b) => a.position - b.position)
        .concat([...Array(3).fill()])
        .map((value, i) => {
          return i < 6 ? (
            <FlexContainer
              key={i}
              style={{ paddingLeft: 28.5, zIndex: 2, marginTop: value?.isMain && 20 }}
              onClick={() => {
                if (value.href) {
                  window.open(value.href, '_blank');
                }
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: 16,
                  width: 16,
                  background: getColor(value?.isMain ? 'pink' : value.isCompleted ? color : 'white'),
                  borderRadius: '50%',
                }}
              >
                {value?.isMain && <RoadmapFlagcon style={{ position: 'absolute', width: 40, left: 3, bottom: 8, zIndex: 4 }} />}
              </div>

              <FlexContainer className="column" gap={8} key={i} style={{ marginLeft: 10 }}>
                {value?.text?.map((tspan, j) => (
                  <Label key={j} fontSize={tspan.fontSize || 15} color={value?.isMain ? 'pink' : value.isCompleted ? color : 'white'}>
                    {tspan.text}
                  </Label>
                ))}
              </FlexContainer>
            </FlexContainer>
          ) : (
            <FlexContainer />
          );
        })}
    </FlexContainer>
  );
};

export default MobileRoadmap2024;

const CONFIGURATION = {
  ECKOGOV_TESTNET: {
    position: 0,
    text: [{ text: 'eckoGOV - Testnet' }],
    isCompleted: true,
    isMain: true,
  },

  ECKO_DASHBOARD: {
    position: 1,
    text: [{ text: 'eckoDASHBOARD - NEW analytics' }],
    isCompleted: false,
  },
  ECKOGOV_MAINNET: {
    position: 2,
    text: [{ text: 'eckoGOV - Mainnet' }],
    isCompleted: false,
  },
  CEX: {
    position: 3,
    text: [{ text: 'CEX listing' }],
    isCompleted: false,
  },
  ECKO_GROWTH_2: {
    position: 4,
    text: [{ text: 'Major ecosystem growth ' }, { text: 'announcement: Coming soon!' }],
    isCompleted: false,
  },
  ECKODEX_2: {
    position: 5,
    text: [{ text: 'eckoDEX 2.0' }],
    isCompleted: false,
  },
};
