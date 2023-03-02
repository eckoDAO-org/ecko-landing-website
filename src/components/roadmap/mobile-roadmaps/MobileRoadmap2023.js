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
    height: 24%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const MobileRoadmap2023 = ({ color }) => {
  return (
    <FlexContainer className="column justify-sb relative w-100" style={{ padding: '20px 0' }}>
      <Line color={color} />
      {Object.values(CONFIGURATION)
        .sort((a, b) => a.position - b.position)
        .map((value, i) => {
          return (
            <FlexContainer
              key={i}
              style={{ paddingLeft: 28.5, zIndex: 2, marginTop: value.isMain && 20 }}
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
          );
        })}
    </FlexContainer>
  );
};

export default MobileRoadmap2023;

const CONFIGURATION = {
  MOBILE_NATIVE: {
    position: 0,
    text: [{ text: 'Mobile-native Swaps on eckoWALLET' }],
    isCompleted: true,
  },

  SINGLE_SIDE_ALL_PAIRS: {
    position: 1,
    text: [{ text: 'Add/Remove Single-sided liquidity' }, { text: 'for all pairs', fontSize: 10 }],
    isCompleted: true,
  },

  ECO_GROWTH: {
    position: 2,
    text: [{ text: 'Major ecosystem growth ' }, { text: 'announcement: Introducing “eckoDAO”' }],
    isCompleted: true,
    isMain: true,
  },

  MULTIHOPS_SWAP: {
    position: 3,
    text: [{ text: 'Multihop Swaps' }],
    isCompleted: false,
  },

  API_DATA_ANALYTICS: {
    position: 4,
    text: [{ text: 'API Data Analytics V1' }],
    isCompleted: false,
  },

  VOTING_POWER: {
    position: 5,
    text: [{ text: 'Voting Power' }, { text: 'for Liquidity providers', fontSize: 10 }],
    isCompleted: false,
  },

  MULTIPLIER_AVAILABLE: {
    position: 6,
    text: [{ text: '$KDX Multiplier available' }, { text: 'for all pairs', fontSize: 10 }],
    isCompleted: false,
  },

  AUDIT: {
    position: 7,
    text: [{ text: 'Secondary Audit' }],
    isCompleted: false,
  },
  DAO_PORTAL_V1_TESTING: {
    position: 8,
    text: [{ text: 'eckoDAO Portal V1' }, { text: 'Testing', fontSize: 10 }],
    isCompleted: false,
  },
  DAO_PORTAL_V1_BETA: {
    position: 9,
    text: [{ text: 'eckoDAO Portal V1' }, { text: 'BETA', fontSize: 10 }],
    isCompleted: false,
  },
  CEX: {
    position: 10,
    text: [{ text: 'CEX listing' }],
    isCompleted: false,
  },
  ECKODEX_2_TESTING: {
    position: 11,
    text: [{ text: 'eckoDEX 2.0' }, { text: 'Testing Environment', fontSize: 10 }],
    isCompleted: false,
  },
};
