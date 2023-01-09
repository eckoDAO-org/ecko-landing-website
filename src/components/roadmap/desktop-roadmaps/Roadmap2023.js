import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const ROW_ELEMENT_OFFSET = 318;
const ROW_CIRCLE_X_START = 495;
const FIRST_ROW_CIRCLE_Y = 6;
const SECOND_ROW_CIRCLE_Y = 197;
const THIRD_ROW_CIRCLE_Y = 411;
const FIRST_ROW_TEXT_Y = 54;
const SECOND_ROW_TEXT_Y = 247;
const THIRD_ROW_TEXT_Y = 460;

const CONFIGURATION = {
  //2023

  MOBILE_NATIVE: {
    circle: { x: ROW_CIRCLE_X_START, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 30,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -106.61, y: 0, text: 'Mobile-native Swaps on' },
        { x: -52.61, y: 25, text: 'X-Wallet' },
      ],
    },
    color: '#FA41A5',
  },

  MULTIHOPS_SWAP: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 30,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -55.61, y: 0, text: 'Multihops' },
        { x: -40.61, y: 25, text: 'Swaps' },
      ],
    },
    color: whiteGrey,
  },

  SINGLE_SIDE_ALL_PAIRS: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 37,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -70.61, y: 0, text: 'Add/Remove' },
        { x: -118.61, y: 25, text: 'Single-sided liquidity' },
        { x: -70.012, y: 45, text: 'for all pairs', fontSize: 13 },
      ],
    },
    color: whiteGrey,
  },

  API_DATA_ANALYTICS: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 65,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -68.61, y: 0, text: 'API' },
        { x: -118.61, y: 25, text: 'Data Analytics V1' },
      ],
    },
    color: whiteGrey,
  },

  VOTING_POWER_LIQUIDITY_PROVIDERS: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -94.61, y: 0, text: 'Voting Power for' },
        { x: -104.61, y: 25, text: 'Liquidity Providers' },
      ],
    },
    color: whiteGrey,
  },

  ECO_GROWTH: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -124.61, y: 0, text: 'Major ecosystem growth' },
        { x: -80.61, y: 25, text: 'announcement' },
      ],
    },
    color: whiteGrey,
  },

  MULTIPLIER_AVAILABLE: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -90.61, y: 0, text: '$KDX Multiplier' },
        { x: -63.61, y: 25, text: 'available' },
        { x: -68.61, y: 45, text: 'for all pairs', fontSize: 13 },
      ],
    },
    color: whiteGrey,
  },
  AUDIT: {
    circle: { x: ROW_CIRCLE_X_START, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [{ x: -50.61, y: 0, text: 'Audit' }],
    },
    color: whiteGrey,
  },
  DAO_PORTAL_V1_TESTING: {
    circle: { x: ROW_CIRCLE_X_START, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -62.61, y: 0, text: 'KaddexDAO' },
        { x: -62.61, y: 25, text: 'Portal V1' },
        { x: -50.61, y: 45, text: 'Testing', fontSize: 13 },
      ],
    },
    color: whiteGrey,
  },
  DAO_PORTAL_V1_BETA: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -62.61, y: 0, text: 'KaddexDAO' },
        { x: -62.61, y: 25, text: 'Portal V1' },
        { x: -40.61, y: 45, text: 'BETA', fontSize: 13 },
      ],
    },
    color: whiteGrey,
  },

  CEX: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -43.61, y: 0, text: 'CEX' },
        { x: -60.61, y: 25, text: 'listing' },
      ],
    },
    color: whiteGrey,
  },

  KADDEX_2_TESTING: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -64.61, y: 0, text: 'Kaddex 2.0' },
        { x: -83.61, y: 25, text: 'Testing Environment', fontSize: 13 },
      ],
    },
    color: whiteGrey,
  },
};

const FLAG = {
  flag: `translate(${CONFIGURATION.MOBILE_NATIVE.circle.x + 8} ${CONFIGURATION.MOBILE_NATIVE.circle.y - 32})`,
  shadow: `translate(${CONFIGURATION.MOBILE_NATIVE.circle.x - 12} ${CONFIGURATION.MOBILE_NATIVE.circle.y - 10})`,
};

const Roadmap2023 = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1743.17"
      height="451"
      viewBox="0 0 1743.17 501"
      style={{ overflow: 'visible' }}
    >
      <g id="Group_80375" data-name="Group 80375" transform="translate(2613.348 -5977)">
        <path
          id="Path_43816"
          data-name="Path 43816"
          d="M-1144.848,5991.555h-1094.5a82.594,82.594,0,0,0-16.524,1.666,81.559,81.559,0,0,0-29.325,12.339,82.227,82.227,0,0,0-29.707,36.076,81.581,81.581,0,0,0-4.779,15.4,82.559,82.559,0,0,0-1.665,16.519v31a82.594,82.594,0,0,0,1.666,16.524,81.541,81.541,0,0,0,12.34,29.325,82.232,82.232,0,0,0,36.076,29.707,81.648,81.648,0,0,0,15.4,4.779,82.641,82.641,0,0,0,16.518,1.665h1219a77.619,77.619,0,0,1,43.608,13.32,78.235,78.235,0,0,1,28.263,34.319c4.065,9.6,6.15,41.931,6.129,52.361v31c.17,42.908-34.477,78.83-77.385,79H-2319.348l-294,0v4l294,0h1299.23c5.547,0,11.08-1.556,16.514-2.666a81.143,81.143,0,0,0,29.263-12.341A81.884,81.884,0,0,0-940,6334.077a82.966,82.966,0,0,0,1.655-16.522v-31c0-5.55-.557-33.086-1.666-38.524a81.546,81.546,0,0,0-12.34-29.325A82.231,82.231,0,0,0-988.43,6189a81.559,81.559,0,0,0-15.4-4.779,82.5,82.5,0,0,0-16.523-1.665h-1219a77.621,77.621,0,0,1-43.609-13.32,78.231,78.231,0,0,1-28.262-34.319,77.5,77.5,0,0,1-6.129-30.361v-31a77.621,77.621,0,0,1,13.32-43.609,78.23,78.23,0,0,1,34.319-28.262,77.5,77.5,0,0,1,30.361-6.129h1094.5Z"
          fill={whiteGrey}
        />

        <g id="Group_80373" data-name="Group 80373">
          <path
            id="Path_43817"
            data-name="Path 43817"
            d="M-870.689,5992.56h-6.049v2h6.049Zm-14.049,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Zm-16,0h-8v2h8Z"
            fill={whiteGrey}
          />
        </g>
      </g>

      {/*blue line */}
      <line id="Line_585" dataName="Line 585" x2="500" transform="translate(0 421)" fill="none" stroke={theme.colors.primary} strokeWidth="4" />

      {Object.keys(CONFIGURATION).map((config, i) => {
        const nodeConfig = CONFIGURATION[config];
        return (
          <g
            key={i}
            style={{ cursor: nodeConfig.href ? 'pointer' : 'default' }}
            onClick={() => {
              if (nodeConfig.href) {
                window.open(nodeConfig.href, '_blank');
              }
            }}
          >
            <circle
              id={config}
              cx="10"
              cy="10"
              r="10"
              transform={`translate(${nodeConfig.circle.x} ${nodeConfig.circle.y})`}
              fill={nodeConfig.color}
            />
            <text
              transform={`translate(${nodeConfig.text.x} ${nodeConfig.text.y})`}
              fill={nodeConfig.color}
              fontSize="16"
              fontFamily={theme.fontFamily.basier}
              letterSpacing="-0.1em"
            >
              {nodeConfig.text.tspan.map((tspan, i2) => (
                <tspan key={i2} x={tspan.x} y={tspan.y} fontSize={tspan.fontSize || 16} fill={nodeConfig.color}>
                  {tspan.text}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* FLAG */}
      <g id="ring" transform={FLAG.flag}>
        <RoadmapFlagcon />
      </g>
      <g id="ring" transform={FLAG.shadow}>
        <RoadmapEllipseShadowIcon />
      </g>
    </svg>
  );
};

export default Roadmap2023;
