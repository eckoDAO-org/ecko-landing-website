import React from 'react';
import theme from '../../../styles/theme';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';

const whiteGrey = '#666666';

const ROW_ELEMENT_OFFSET = 636;
const ROW_CIRCLE_X_START = 580;
const FIRST_ROW_CIRCLE_Y = 195;
const SECOND_ROW_CIRCLE_Y = 386;
const THIRD_ROW_CIRCLE_Y = 601;
const FIRST_ROW_TEXT_Y = 245;
const SECOND_ROW_TEXT_Y = 436;
const THIRD_ROW_TEXT_Y = 652;

const CONFIGURATION = {
  //2024

  //first row (top)
  ECKOGOV_TESTNET: {
    circle: { x: ROW_CIRCLE_X_START, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [{ x: -102, y: 0, text: 'eckoGOV - Testnet' }],
    },
    color: '#FA41A5',
  },
  ECKO_DASHBOARD: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: FIRST_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: FIRST_ROW_TEXT_Y,
      tspan: [
        { x: -85.61, y: 0, text: 'eckoDASHBOARD -' },
        { x: -78.61, y: 25, text: 'NEW analytics' },
      ],
    },
    color: whiteGrey,
  },

  //second row (middle)
  ECKOGOV_MAINNET: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [{ x: -102, y: 0, text: 'eckoGOV - Mainnet' }],
    },
    color: whiteGrey,
  },
  CEX: {
    circle: { x: ROW_CIRCLE_X_START, y: SECOND_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 40,
      y: SECOND_ROW_TEXT_Y,
      tspan: [
        { x: -43.61, y: 0, text: 'CEX' },
        { x: -60.61, y: 25, text: 'listing' },
      ],
    },
    color: whiteGrey,
  },

  // third row (bottom)
  ECKO_GROWTH_2: {
    circle: { x: ROW_CIRCLE_X_START, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + 34,
      y: THIRD_ROW_TEXT_Y,
      tspan: [
        { x: -88.61, y: 0, text: 'Major ecosystem' },
        { x: -103.61, y: 25, text: 'growth announcement:' },
        { x: -74.61, y: 50, text: 'Coming soon!' },
      ],
    },
    color: whiteGrey,
  },

  ECKODEX_2: {
    circle: { x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET, y: THIRD_ROW_CIRCLE_Y },
    text: {
      x: ROW_CIRCLE_X_START + ROW_ELEMENT_OFFSET + 40,
      y: THIRD_ROW_TEXT_Y,
      tspan: [{ x: -80.61, y: 0, text: 'eckoDEX 2.0' }],
    },
    color: whiteGrey,
  },
};

const FLAG = {
  flag: `translate(${CONFIGURATION.ECKOGOV_TESTNET.circle.x + 13} ${CONFIGURATION.ECKOGOV_TESTNET.circle.y - 222})`,
  shadow: `translate(${CONFIGURATION.ECKOGOV_TESTNET.circle.x - 6} ${CONFIGURATION.ECKOGOV_TESTNET.circle.y - 200})`,
};

const Roadmap2024 = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1743.17"
      height="501"
      viewBox="0 0 1743.17 501"
      style={{ overflow: 'visible' }}
    >
      <g id="Roadmap" transform="translate(5 -190)">
        <g id="Group_68777" data-name="Group 68777">
          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M1263.5,613.005H369a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005H1588a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78H289L-5,208v-4l294,.005H1588.23a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005H369a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005h894.5Z"
            fill={whiteGrey}
          />

          <g id="Group_68779" data-name="Group 68779">
            <g id="Group_68778" data-name="Group 68778">
              <path
                id="Path_43817"
                data-name="Path 43817"
                d="M1738.17,612h-6.049v-2h6.049Zm-14.049,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Zm-16,0h-8v-2h8Z"
                fill={whiteGrey}
              />
            </g>
          </g>

          {/* blue line */}
          <line id="Line_585" data-name="Line 585" x2="600" transform="translate(-5 206)" fill="none" stroke={theme.colors.primary} strokeWidth="4" />

          {/* curve */}
          {/* <path
            id="curve"
            dataName="Path curve"
            d="M1588,395.005a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78v-4a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005"
            transform="translate(0 0)"
            fill={theme.colors.primary}
            strokeWidth="4"
          /> */}
          {/* line */}

          {/* <line
            id="Line_585"
            dataName="Line 585"
            x2="1221"
            transform="translate(368 397)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          /> */}
          {/* curve */}
          {/* <path
            id="Path_43816"
            data-name="Path 43816"
            d="M369,613.005a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005c.023-.017,0,4,0,4a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005Z"
            transform="translate(0 0)"
            fill={theme.colors.primary}
          /> */}

          {/* line */}
          <line id="Line_585" dataName="Line 585" x2="1150" transform="translate(370 611)" fill="none" stroke={whiteGrey} strokeWidth="4" />

          {/*blue line */}
          {/* <line
            id="Line_585"
            dataName="Line 585"
            x2="1370"
            transform="translate(368.7 611)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          /> */}

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
        </g>
      </g>
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

export default Roadmap2024;
