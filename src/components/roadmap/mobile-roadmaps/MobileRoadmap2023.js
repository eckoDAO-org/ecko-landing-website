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
    height: 100%;
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
        .concat([...Array(3).fill()])
        .map((value, i) => {
          return i < 6 ? (
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
          ) : (
            <FlexContainer />
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
  },

  MULTIHOP_SWAP: {
    position: 3,
    text: [{ text: 'Multihop Swaps' }],
    isCompleted: true,
  },

  ECKOGOV_DEVNET: {
    position: 4,
    text: [{ text: 'eckoGOV - Devnet' }],
    isCompleted: true,
  },

  FUSION_BRIDGE_LIVE: {
    position: 5,
    text: [{ text: 'Fusion Bridge Live - zUSD listing' }],
    isCompleted: true,
  },
};
