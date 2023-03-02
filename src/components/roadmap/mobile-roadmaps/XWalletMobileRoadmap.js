import React from 'react';
import styled from 'styled-components';
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
    height: 55%;
    background: ${({ color }) => getColor(color)};
    top: 0;
    bottom: 0;
    left: -3px;
  }
`;

const XWalletMobileRoadmap = ({ color }) => {
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
              ></div>

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

export default XWalletMobileRoadmap;

const CONFIGURATION = {
  BETA_RELEASE: {
    position: 0,
    text: [{ text: 'Beta release' }],
    isCompleted: true,
  },
  X_WALLET_V1: {
    position: 1,
    text: [{ text: 'eckoWALLET v1' }],

    isCompleted: true,
  },
  GOOGLE_CHROME_STORE: {
    position: 2,
    text: [{ text: 'Google Chrome Store' }],

    isCompleted: true,
  },
  ECKODEX_INTEGRATION: {
    position: 3,
    text: [{ text: 'eckoDEX Integration' }],
    isCompleted: true,
  },
  KD_LAUNCH_INTEGRATION: {
    position: 4,
    text: [{ text: 'KDLaunch integration' }],
    isCompleted: true,
  },
  _10k_DOWNLOADS: {
    position: 5,
    text: [{ text: '10,000 Downloads' }],
    isCompleted: true,
  },
  FIAT_ON_RAMP: {
    position: 6,
    text: [{ text: 'Fiat on Ramp' }],
    isCompleted: true,
  },

  MOBILE_APP: {
    position: 7,
    text: [{ text: 'Mobile app' }],
    isCompleted: true,
  },
  BAND_REFRESH: {
    position: 8,
    text: [{ text: 'Brand Refresh' }],
    isCompleted: true,
  },
  FIAT_OFF_RAMP: {
    position: 9,
    text: [{ text: 'Fiat off Ramp' }],

    isCompleted: false,
  },
  SWAP_FUNTIONALITY: {
    position: 11,
    text: [{ text: 'Swap Functionality' }],
    isCompleted: false,
  },

  SDK_EASY_INTEGRATION_KIT: {
    position: 12,
    text: [{ text: 'SDK easy integration kit' }],
    isCompleted: false,
  },
  NFTs_INTEGRATION: {
    position: 13,
    text: [{ text: 'NFTs integration' }],
    isCompleted: false,
  },

  X_WALLET_V2: {
    position: 14,
    text: [{ text: 'eckoWALLET v2' }],
    isCompleted: false,
  },
  AUDITING: {
    position: 15,
    text: [{ text: 'Auditing' }],
    isCompleted: false,
  },
};
