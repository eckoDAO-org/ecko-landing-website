import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const CONFIGURATION = {
  X_WALLET_BETA: {
    circle: { x: 103, y: 253 },
    text: {
      x: 113,
      y: 306,
      tspan: [{ x: -51.353, y: 0, text: 'X-Wallet Beta' }],
    },
    href: 'https://xwallet.kaddex.com/',
    color: theme.colors.primary,
  },
  LITEPAPER: {
    circle: { x: 260, y: 253 },
    text: {
      x: 270,
      y: 306,
      tspan: [{ x: -35.783, y: 0, text: 'Litepaper' }],
    },
    href: '/kaddex litepaper.pdf',

    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: { x: 260, y: 364 },
    text: {
      x: 270,
      y: 417,
      tspan: [{ x: -43.568, y: 0, text: 'X-Wallet v1' }],
    },
    href: 'https://xwallet.kaddex.com/',

    color: theme.colors.primary,
  },
  PUBLIC_SALE: {
    circle: { x: 103, y: 364 },
    text: {
      x: 70,
      y: 417,
      tspan: [{ x: 0, y: 0, text: 'Public Sale' }],
    },
    color: theme.colors.primary,
  },
  BRIDGED_ERC20: {
    circle: { x: 103, y: 498 },
    text: {
      x: 55,
      y: 551,
      tspan: [
        { x: 0, y: 0, text: 'Bridged ERC-20' },
        { x: 13, y: 19, text: 'Token Pairs' },
      ],
    },
    color: whiteGrey,
  },
  SWAPPING_INTERFACE: {
    circle: { x: 260, y: 498 },
    text: {
      x: 270,
      y: 551,
      tspan: [
        { x: -43.568, y: 0, text: '3d Swapping' },
        { x: -35.783, y: 19, text: 'Interface' },
      ],
    },

    color: whiteGrey,
  },
  WEBSITE_V2: {
    circle: { x: 260, y: 646 },
    text: {
      x: 270,
      y: 699,
      tspan: [{ x: -39.675, y: 0, text: 'Website v2' }],
    },
    color: whiteGrey,
  },

  KDX_VAULTING_PROGRAMME: {
    circle: { x: 103, y: 646 },
    text: {
      x: 113,
      y: 699,
      tspan: [
        { x: -47.46, y: 0, text: 'KDX Vaulting' },
        { x: -35.783, y: 19, text: 'programme' },
        { x: -34.23, y: 38, text: 'available for', fontSize: 10 },
        { x: -39.425, y: 54, text: 'early investors', fontSize: 10 },
      ],
    },

    color: whiteGrey,
  },

  KADDEX_V1_FULL_LAUNCH: {
    circle: { x: 260, y: 799 },
    text: {
      x: 270,
      y: 852,
      tspan: [
        { x: -35.783, y: 0, text: 'Kaddex v1' },
        { x: -43.568, y: 19, text: 'full launch' },
      ],
    },
    color: '#FA41A5',
  },
  SINGLE_SIDED_LIQUIDITY: {
    circle: { x: 96, y: 799 },
    text: {
      x: 111,
      y: 852,
      tspan: [
        { x: -47.46, y: 0, text: 'Single Sided' },
        { x: -35.78, y: 19, text: 'Liquidity' },
      ],
    },
    color: whiteGrey,
  },
  KDX_LIQUIDITY_MINING_PROGRAMME: {
    circle: { x: 260, y: 954 },
    text: {
      x: 270,
      y: 1007,
      tspan: [
        { x: -51.353, y: 0, text: 'KDX Liquidity' },
        { x: -63.03, y: 19, text: 'Mining Programme' },
      ],
    },
    color: whiteGrey,
  },

  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    circle: { x: 103, y: 954 },
    text: {
      x: 113,
      y: 1007,
      tspan: [
        { x: -74.708, y: 0, text: 'Lending & borrowing' },
        { x: -59.138, y: 19, text: 'functionalities' },
      ],
    },
    color: whiteGrey,
  },
  X_WALLET_V2: {
    circle: { x: 103, y: 1116 },
    text: {
      x: 93,
      y: 1169,
      tspan: [{ x: -16.32, y: 0, text: 'X-Wallet v2' }],
    },
    color: whiteGrey,
  },
  WHITEPAPER: {
    circle: { x: 260, y: 1116 },
    text: {
      x: 270,
      y: 1169,
      tspan: [{ x: -39.675, y: 0, text: 'Whitepaper' }],
    },

    color: whiteGrey,
  },
};

const FLAG = {
  flag: 'translate(269 764)',
  shadow: 'translate(251 787)',
};

const MobileRoadmap2022 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="376.001" height="920" viewBox="0 0 376.001 920">
      <g id="Mobile-Roadmap_2022_mobile" data-name="Roadmap 2022_mobile" transform="translate(0.001 -253)">
        <path
          id="Mobile-Path_44314"
          data-name="Path 44314"
          d="M376,5456H42a20,20,0,0,1-20-20V5321"
          transform="translate(0 -4328)"
          fill="none"
          stroke={whiteGrey}
          strokeWidth="3"
          strokeDasharray="8"
        />
        <path
          id="Mobile-Path_44414"
          data-name="Path 44414"
          d="M-699.528-11.545h329.669a20.282,20.282,0,0,1,20.331,20v71a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v93.99a20,20,0,0,0,20,20h288a20,20,0,0,1,20,20v107.5a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v114a20,20,0,0,0,20,20h288a20,20,0,0,1,20,20v114.5a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v124a20,20,0,0,0,20,20h256.642"
          transform="translate(699.527 274.555)"
          fill="none"
          stroke={whiteGrey}
          strokeWidth="3"
        />

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
                fontSize="15"
                fontFamily={theme.fontFamily.basier}
                letterSpacing="-0.1em"
              >
                {nodeConfig.text.tspan.map((tspan, i2) => (
                  <tspan key={i2} x={tspan.x} y={tspan.y} fontSize={tspan.fontSize || 15} fill={nodeConfig.color}>
                    {tspan.text}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        <g id="Mobile-ring" transform={FLAG.flag}>
          <RoadmapFlagcon />
        </g>
        <g id="Mobile-ring" transform={FLAG.shadow}>
          <RoadmapEllipseShadowIcon />
        </g>
      </g>

      {/* blue line */}
      <line
        id="Mobile-Line_585"
        data-name="Line 585"
        x2="331"
        transform="translate(0 10)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="3"
      />
      {/* curve */}
      <path
        id="Path_44414"
        data-name="Path 44414"
        d="M-369.859-11.545a20.282,20.282,0,0,1,20.331,20v71a20,20,0,0,1-20,20"
        transform="translate(700 21.5)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="3"
      />
      {/* line */}
      <line
        id="Mobile-Line_585"
        data-name="Line 585"
        x2="289"
        transform="translate(42 121)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="3"
      />
      {/* curve */}
      {/* <path
        id="cuve_mobile"
        d="M-657.528,99.455a20,20,0,0,0-20,20v93.99a20,20,0,0,0,20,20"
        transform="translate(700.028 21.5)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="3"
      /> */}

      {/* line */}
      {/* <line
        id="Mobile-Line_585"
        data-name="Line 585"
        x2="289"
        transform="translate(42 255)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="3"
      /> */}
    </svg>
  );
};

export default MobileRoadmap2022;
