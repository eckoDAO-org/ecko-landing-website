import React from 'react';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const CONFIGURATION = {
  BETA_RELEASE: {
    circle: { x: 490, y: 190 },
    text: {
      x: 437,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'Beta release' }],
    },
    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: { x: 740, y: 190 },
    text: {
      x: 750,
      y: 255,
      tspan: [{ x: -47.71, y: 0, text: 'X-Wallet v1' }],
    },

    color: theme.colors.primary,
  },
  GOOGLE_CHROME_STORE: {
    circle: { x: 990, y: 190 },
    text: {
      x: 950,
      y: 255,
      tspan: [
        { x: 0, y: 0, text: 'Google Chrome' },
        { x: 30, y: 25, text: 'Store' },
      ],
    },

    color: theme.colors.primary,
  },
  KADDEX_INTEGRATION: {
    circle: { x: 1240, y: 190 },
    text: {
      x: 1200,
      y: 255,
      tspan: [
        { x: 30, y: 0, text: 'Kaddex' },
        { x: 0, y: 25, text: 'Integration' },
      ],
    },
    color: theme.colors.primary,
  },
  KD_LAUNCH_INTEGRATION: {
    circle: { x: 1490, y: 190 },
    text: {
      x: 1506,
      y: 255,
      tspan: [
        { x: -38.66, y: 0, text: 'KDLaunch' },
        { x: -58.09, y: 25, text: 'integration' },
      ],
    },
    color: theme.colors.primary,
  },
  _10k_DOWNLOADS: {
    circle: { x: 1490, y: 381 },
    text: {
      x: 1499,
      y: 446,
      tspan: [{ x: -58.09, y: 0, text: '10,000 Downloads' }],
    },

    color: whiteGrey,
  },
  FIAT_ON_RAMP: {
    circle: { x: 1240, y: 381 },
    text: {
      x: 1200,
      y: 446,
      tspan: [{ x: 0, y: 0, text: 'Fiat on Ramp' }],
    },
    color: whiteGrey,
  },
  FIAT_OFF_RAMP: {
    circle: { x: 990, y: 381 },
    text: {
      x: 1000,
      y: 446,
      tspan: [{ x: -63.28, y: 0, text: 'Fiat off Ramp' }],
    },

    color: whiteGrey,
  },
  MOBILE_APP: {
    circle: { x: 490, y: 381 },
    text: {
      x: 500,
      y: 446,
      tspan: [{ x: -47.71, y: 0, text: 'Mobile app' }],
    },
    color: whiteGrey,
  },
  BAND_REFRESH: {
    circle: { x: 740, y: 381 },
    text: {
      x: 750,
      y: 446,
      tspan: [{ x: -68.28, y: 0, text: 'Brand Refresh' }],
    },
    color: whiteGrey,
  },
  SWAP_FUNTIONALITY: {
    circle: { x: 490, y: 596 },
    text: {
      x: 500,
      y: 662,
      tspan: [{ x: -68.47, y: 0, text: 'Swap Functionality' }],
    },
    color: whiteGrey,
  },

  SDK_EASY_INTEGRATION_KIT: {
    circle: { x: 740, y: 596 },
    text: {
      x: 756,
      y: 662,
      tspan: [
        { x: -45.61, y: 0, text: 'SDK easy' },
        { x: -78.85, y: 25, text: 'integration kit' },
      ],
    },
    color: whiteGrey,
  },
  NFTs_INTEGRATION: {
    circle: { x: 990, y: 596 },
    text: {
      x: 950,
      y: 662,
      tspan: [{ x: -0, y: 0, text: 'NFTs integration' }],
    },
    color: whiteGrey,
  },
  X_WALLET_V2: {
    circle: { x: 1240, y: 596 },
    text: {
      x: 1270,
      y: 662,
      tspan: [{ x: -60.61, y: 0, text: 'X-Wallet v2' }],
    },

    color: whiteGrey,
  },
  AUDITING: {
    circle: { x: 1490, y: 596 },
    text: {
      x: 1520,
      y: 662,
      tspan: [{ x: -60.61, y: 0, text: 'Auditing' }],
    },

    color: whiteGrey,
  },
};

const XWalletRoadmap = ({ className }) => {
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
            d="M1520.5,613.005H369a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005H1588a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78H289L-5,208v-4l294,.005H1588.23a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005H369a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005H1520.5Z"
            fill={whiteGrey}
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
          {/* blue line */}
          <line
            id="Line_585"
            data-name="Line 585"
            x2="1500.5"
            transform="translate(-5 206)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          />
        </g>

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
      </g>
    </svg>
  );
};

export default XWalletRoadmap;
