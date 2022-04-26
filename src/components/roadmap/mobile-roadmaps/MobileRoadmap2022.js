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
    height: 75%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const MobileRoadmap2022 = ({ color }) => {
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

export default MobileRoadmap2022;

const CONFIGURATION = {
  X_WALLET_BETA: {
    position: 0,
    text: [{ text: 'X-Wallet Beta' }],
    href: 'https://xwallet.kaddex.com/',
    isCompleted: true,
  },
  LITEPAPER: {
    position: 1,
    text: [{ text: 'Litepaper' }],
    href: '/kaddex litepaper.pdf',

    isCompleted: true,
  },
  X_WALLET_V1: {
    position: 2,
    text: [{ text: 'X-Wallet v1' }],
    href: 'https://xwallet.kaddex.com/',

    isCompleted: true,
  },
  PUBLIC_SALE: {
    position: 3,
    text: [{ text: 'Public Sale' }, { text: 'Sold out', fontSize: 10 }],
    isCompleted: true,
  },
  BRIDGED_ERC20: {
    position: 4,
    text: [{ text: 'Bridged ERC-20 Token Pairs' }],
    isCompleted: true,
  },
  SWAPPING_INTERFACE: {
    position: 5,
    text: [{ text: '3d Swapping Interface' }],

    isCompleted: true,
  },
  WEBSITE_V2: {
    position: 6,
    text: [{ text: 'Website v2' }],
    isCompleted: true,
  },

  KDX_VAULTING_PROGRAMME: {
    position: 7,
    text: [{ text: 'KDX Vaulting programme' }, { text: 'Available for early investors', fontSize: 10 }],

    isCompleted: true,
  },

  SINGLE_SIDED_LIQUIDITY: {
    position: 8,
    text: [{ text: 'Single Sided Liquidity' }],
    isCompleted: true,
  },
  STAKING: {
    position: 9,
    text: [{ text: 'Staking' }],
    isCompleted: true,
  },

  KADDEX_V1_FULL_LAUNCH: {
    position: 10,
    text: [{ text: 'Kaddex v1 full launch' }],
    isCompleted: true,
    isMain: true,
  },

  KDX_LIQUIDITY_MINING_PROGRAMME: {
    position: 11,
    text: [{ text: 'KDX Liquidity Mining 2.0' }],
    isCompleted: true,
  },

  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    position: 12,
    text: [{ text: 'Lending & borrowing functionalities' }],
    isCompleted: false,
  },

  WHITEPAPER: {
    position: 14,
    text: [{ text: 'Whitepaper' }],

    isCompleted: false,
  },
};
