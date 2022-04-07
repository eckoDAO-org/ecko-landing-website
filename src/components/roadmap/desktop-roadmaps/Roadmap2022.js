import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const CONFIGURATION = {
  X_WALLET_BETA: {
    circle: { x: 490, y: 190 },
    text: {
      x: 437,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'X-Wallet Beta' }],
    },
    href: 'https://xwallet.kaddex.com/',
    color: theme.colors.primary,
  },
  LITEPAPER: {
    circle: { x: 740, y: 190 },
    text: {
      x: 750,
      y: 255,
      tspan: [{ x: -47.71, y: 0, text: 'Litepaper' }],
    },
    href: '/kaddex litepaper.pdf',

    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: { x: 990, y: 190 },
    text: {
      x: 950,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'X-Wallet v1' }],
    },
    href: 'https://xwallet.kaddex.com/',

    color: theme.colors.primary,
  },
  PUBLIC_SALE: {
    circle: { x: 1240, y: 190 },
    text: {
      x: 1200,
      y: 255,
      tspan: [
        { x: 0, y: 0, text: 'Public Sale' },
        { x: 30, y: 25, text: 'Sold out', fontSize: 13 },
      ],
    },
    color: theme.colors.primary,
  },
  BRIDGED_ERC20: {
    circle: { x: 1490, y: 190 },
    text: {
      x: 1506,
      y: 255,
      tspan: [
        { x: -73.66, y: 0, text: 'Bridged ERC-20' },
        { x: -58.09, y: 25, text: 'Token Pairs' },
      ],
    },
    color: theme.colors.primary,
  },
  SWAPPING_INTERFACE: {
    circle: { x: 1490, y: 381 },
    text: {
      x: 1499,
      y: 446,
      tspan: [
        { x: -58.09, y: 0, text: '3d Swapping' },
        { x: -47.71, y: 25, text: 'Interface' },
      ],
    },

    color: theme.colors.primary,
  },
  WEBSITE_V2: {
    circle: { x: 1240, y: 381 },
    text: {
      x: 1200,
      y: 446,
      tspan: [{ x: 0, y: 0, text: 'Website v2' }],
    },
    color: theme.colors.primary,
  },
  KDX_VAULTING_PROGRAMME: {
    circle: { x: 990, y: 381 },
    text: {
      x: 1000,
      y: 446,
      tspan: [
        { x: -63.28, y: 0, text: 'KDX Vaulting' },
        { x: -47.71, y: 25, text: 'programme' },
        { x: -60.746, y: 50, text: 'available for early', fontSize: 13 },
        { x: -30.012, y: 75, text: 'investors', fontSize: 13 },
      ],
    },

    color: theme.colors.primary,
  },
  SINGLE_SIDED_LIQUIDITY: {
    circle: { x: 740, y: 381 },
    text: {
      x: 750,
      y: 446,
      tspan: [
        { x: -68.28, y: 0, text: 'Single Sided' },
        { x: -47.71, y: 25, text: 'Liquidity' },
      ],
    },
    color: theme.colors.primary,
  },

  STAKING: {
    circle: { x: 490, y: 381 },
    text: {
      x: 500,
      y: 446,
      tspan: [{ x: -29.71, y: 0, text: 'Staking' }],
    },
    color: theme.colors.primary,
  },
  KADDEX_V1_FULL_LAUNCH: {
    circle: { x: 490, y: 596 },
    text: {
      x: 500,
      y: 662,
      tspan: [
        { x: -47.71, y: 0, text: 'Kaddex v1' },
        { x: -58.09, y: 25, text: 'full launch' },
      ],
    },
    color: '#FA41A5',
  },

  KDX_LIQUIDITY_MINING_PROGRAMME: {
    circle: { x: 740, y: 596 },
    text: {
      x: 756,
      y: 662,
      tspan: [
        { x: -68.47, y: 0, text: 'KDX Liquidity' },
        { x: -54.47, y: 25, text: 'Mining 2.0' },
      ],
    },
    color: whiteGrey,
  },

  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    circle: { x: 990, y: 596 },
    text: {
      x: 950,
      y: 662,
      tspan: [
        { x: -39.61, y: 0, text: 'Lending & borrowing' },
        { x: -14.85, y: 25, text: 'functionalities' },
      ],
    },
    color: whiteGrey,
  },

  WHITEPAPER: {
    circle: { x: 1240, y: 596 },
    text: {
      x: 1270,
      y: 662,
      tspan: [{ x: -60.61, y: 0, text: 'Whitepaper' }],
    },

    color: whiteGrey,
  },
};

const FLAG = {
  flag: 'translate(504 566)',
  shadow: 'translate(484 590)',
};

const Roadmap2022 = ({ className }) => {
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
          <line
            id="Line_585"
            data-name="Line 585"
            x2="1593.5"
            transform="translate(-5 206)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          />

          {/* curve */}
          <path
            id="curve"
            dataName="Path curve"
            d="M1588,395.005a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78v-4a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005"
            transform="translate(0 0)"
            fill={theme.colors.primary}
            strokeWidth="4"
          />
          {/* line */}

          <line
            id="Line_585"
            dataName="Line 585"
            x2="1230"
            transform="translate(365 397)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          />
          {/* curve */}
          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M369,613.005a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005c.023-.017,0,4,0,4a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005Z"
            transform="translate(0 0)"
            fill={theme.colors.primary}
          />

          {/* line */}
          <line id="Line_585" dataName="Line 585" x2="140" transform="translate(367 611)" fill="none" stroke={theme.colors.primary} strokeWidth="4" />

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
                  cx="15"
                  cy="15"
                  r="15"
                  transform={`translate(${nodeConfig.circle.x} ${nodeConfig.circle.y})`}
                  fill={nodeConfig.color}
                />
                <text
                  transform={`translate(${nodeConfig.text.x} ${nodeConfig.text.y})`}
                  fill={nodeConfig.color}
                  fontSize="20"
                  fontFamily={theme.fontFamily.basier}
                  letterSpacing="-0.1em"
                >
                  {nodeConfig.text.tspan.map((tspan, i2) => (
                    <tspan key={i2} x={tspan.x} y={tspan.y} fontSize={tspan.fontSize || 20} fill={nodeConfig.color}>
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
        </g>
      </g>
    </svg>
  );
};

export default Roadmap2022;
