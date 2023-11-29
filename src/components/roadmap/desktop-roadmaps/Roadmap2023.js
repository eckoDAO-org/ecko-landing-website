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

  //first row (bottom)
  MOBILE_NATIVE: {
    circle: { x: ROW_CIRCLE_X_START, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 30,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -106.61, y: 0, text: 'Mobile-native Swaps on' },
        { x: -62.61, y: 25, text: 'eckoWALLET' },
      ],
    },
    color: theme.colors.primary,
  },

  SINGLE_SIDE_ALL_PAIRS: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 37,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -70.61, y: 0, text: 'Add/Remove' },
        { x: -118.61, y: 25, text: 'Single-sided liquidity' },
        { x: -70.012, y: 45, text: 'for all pairs', fontSize: 13 },
      ],
    },
    color: theme.colors.primary,
  },

  ECO_GROWTH: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 40,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -124.61, y: 0, text: 'Major ecosystem growth' },
        { x: -80.61, y: 25, text: 'announcement:' },
        { x: -118, y: 45, text: 'Introducing “eckoDAO”' },
      ],
    },
    color: theme.colors.primary,
  },

  MULTIHOP_SWAP: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 30,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -52.61, y: 0, text: 'Multihop' },
        { x: -38.61, y: 25, text: 'Swaps' },
      ],
    },
    color: theme.colors.primary,
  },

  //second row

  ECKOGOV_DEVNET: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 65,
      y: SECOND_ROW_TEXT_Y,
      tspan: [{ x: -122, y: 0, text: 'eckoGOV - Devnet' }],
    },
    color: theme.colors.primary,
  },

  FUSION_BRIDGE_LIVE: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -106.61, y: 0, text: 'Fusion Bridge Live -' },
        { x: -80.61, y: 25, text: 'zUSD listing' },
      ],
    },
    color: '#FA41A5',
  },

  ECKOGOV_TESTNET: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [{ x: -102, y: 0, text: 'eckoGOV - Testnet' }],
    },
    color: whiteGrey,
  },
  ECKO_DASHBOARD: {
    circle: { x: ROW_CIRCLE_X_START, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -85.61, y: 0, text: 'eckoDASHBOARD -' },
        { x: -78.61, y: 25, text: 'NEW analytics' },
      ],
    },
    color: whiteGrey,
  },

  // third row (top)
  ECKOGOV_MAINNET: {
    circle: { x: ROW_CIRCLE_X_START, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [{ x: -102, y: 0, text: 'eckoGOV - Mainnet' }],
    },
    color: whiteGrey,
  },
  CEX: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -43.61, y: 0, text: 'CEX' },
        { x: -60.61, y: 25, text: 'listing' },
      ],
    },
    color: whiteGrey,
  },

  ECKO_GROWTH_2: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 2 + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -88.61, y: 0, text: 'Major ecosystem' },
        { x: -103.61, y: 25, text: 'growth announcement:' },
        { x: -74.61, y: 50, text: 'Coming soon!' },
      ],
    },
    color: whiteGrey,
  },

  ECKODEX_2: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET * 3 + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [{ x: -80.61, y: 0, text: 'eckoDEX 2.0' }],
    },
    color: whiteGrey,
  },
};

const FLAG = {
  flag: `translate(${CONFIGURATION.FUSION_BRIDGE_LIVE.circle.x + 8} ${CONFIGURATION.FUSION_BRIDGE_LIVE.circle.y - 32})`,
  shadow: `translate(${CONFIGURATION.FUSION_BRIDGE_LIVE.circle.x - 12} ${CONFIGURATION.FUSION_BRIDGE_LIVE.circle.y - 10})`,
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

      {/* curve */}
      <path
        id="Path_43816"
        data-name="Path 43816"
        d="M369,613.005a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005c.023-.017,0,4,0,4a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005Z"
        transform="translate(1962, 818.3) rotate(180 0 0)"
        fill={theme.colors.primary}
      />

      {/*blue line */}
      <line id="Line_585" dataName="Line 585" x2="1596" transform="translate(0 421)" fill="none" stroke={theme.colors.primary} strokeWidth="4" />

      {/*blue line */}
      <line id="Line_585" dataName="Line 585" x2="458" transform="translate(1136 207.5)" fill="none" stroke={theme.colors.primary} strokeWidth="4" />

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
