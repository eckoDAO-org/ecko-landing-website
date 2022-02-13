import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
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
    popup: {
      title: 'X-Wallet Beta',
      description:
        'To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. ',
    },
    color: theme.colors.primary,
  },
  LITEPAPER: {
    circle: { x: 740, y: 190 },
    text: {
      x: 750,
      y: 255,
      tspan: [{ x: -47.71, y: 0, text: 'Litepaper' }],
    },
    popup: {
      title: 'X-Wallet Beta',
      description:
        'To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. ',
    },
    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: { x: 990, y: 190 },
    text: {
      x: 950,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'X-Wallet v1' }],
    },
    color: theme.colors.primary,
  },
  PUBLIC_SALE: {
    circle: { x: 1240, y: 190 },
    text: {
      x: 1200,
      y: 255,
      tspan: [{ x: 0, y: 0, text: 'Public Sale' }],
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
    color: whiteGrey,
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
    popup: {
      title: 'Swapping Interface',
      description:
        'To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. ',
    },
    textTranslate: 'translate(1499 446)',
    color: whiteGrey,
  },
  WEBSITE_V2: {
    circle: { x: 1240, y: 381 },
    text: {
      x: 1200,
      y: 446,
      tspan: [{ x: 0, y: 0, text: 'Website v2' }],
    },
    color: whiteGrey,
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
    color: whiteGrey,
  },
  KADDEX_V1_FULL_LAUNCH: {
    circle: { x: 490, y: 381 },
    text: {
      x: 500,
      y: 446,
      tspan: [
        { x: -47.71, y: 0, text: 'Kaddex v1' },
        { x: -58.09, y: 25, text: 'full launch' },
      ],
    },
    color: '#FA41A5',
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
    color: whiteGrey,
  },
  KDX_LIQUIDITY_MINING_PROGRAMME: {
    circle: { x: 490, y: 596 },
    text: {
      x: 500,
      y: 662,
      tspan: [
        { x: -68.47, y: 0, text: 'KDX Liquidity' },
        { x: -84.04, y: 25, text: 'Mining Programme' },
      ],
    },
    color: whiteGrey,
  },

  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    circle: { x: 740, y: 596 },
    text: {
      x: 756,
      y: 662,
      tspan: [
        { x: -99.61, y: 0, text: 'Lending & borrowing' },
        { x: -78.85, y: 25, text: 'functionalities' },
      ],
    },
    color: whiteGrey,
  },
  X_WALLET_V2: {
    circle: { x: 990, y: 596 },
    text: {
      x: 950,
      y: 662,
      tspan: [{ x: -0, y: 0, text: 'X-Wallet v2' }],
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
    popup: {
      title: 'White paper',
      description:
        'To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX. ',
    },
    color: whiteGrey,
  },
};

const FLAG = {
  flag: 'translate(504 353)',
  shadow: 'translate(484 374)',
};

function svg_textMultiline(clb) {
  var x = 0;
  var y = 20;
  var width = 180;
  var lineHeight = 10;
  let numberOfRows = 1;
  /* get the text */
  var element = document.getElementById('popup-description');
  var text = element.innerHTML;

  /* split the words into array */
  var words = text.split(' ');
  var line = '';

  /* Make a tspan for testing */
  element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var testElem = document.getElementById('PROCESSING');
    /*  Add line in testElement */
    testElem.innerHTML = testLine;
    /* Messure textElement */
    var metrics = testElem.getBoundingClientRect();
    const testWidth = metrics.width;

    if (testWidth > width && n > 0) {
      numberOfRows += 1;
      element.innerHTML += '<tspan x="50" dy="' + y + '">' + line + '</tspan>';
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  element.innerHTML += '<tspan x="50" dy="' + y + '">' + line + '</tspan>';
  document.getElementById('PROCESSING').remove();
  clb(numberOfRows);
}

const Roadmap2022 = () => {
  const [node, setNode] = useState(null);

  const [timer, setTimer] = useState(null);
  const [numberOfRows, setNumberOfRows] = useState(0);

  const closePopup = () => {
    const t = setTimeout(() => {
      setNode(null);
    }, 1000);
    setTimer(t);
  };

  useEffect(() => {
    if (node) {
      svg_textMultiline((v) => setNumberOfRows(v));
    }
  }, [node]);
  console.log('number', numberOfRows);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1743.17" height="501" viewBox="0 0 1743.17 501" style={{ overflow: 'visible' }}>
      <g id="Roadmap" transform="translate(5 -190)">
        <g id="Group_68777" data-name="Group 68777">
          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M1263.5,613.005H369a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005H1588a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78H289L-5,208v-4l294,.005H1588.23a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005H369a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005h894.5Z"
            fill={whiteGrey}
          />

          {Object.keys(CONFIGURATION).map((config, i) => {
            const nodeConfig = CONFIGURATION[config];
            return (
              <g key={i}>
                <circle
                  cx="15"
                  cy="15"
                  r="15"
                  transform={`translate(${nodeConfig.circle.x} ${nodeConfig.circle.y})`}
                  fill={nodeConfig.color}
                  onMouseEnter={() => {
                    if (nodeConfig?.popup) {
                      clearTimeout(timer);
                      setNode(nodeConfig);
                    }
                  }}
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
            x2="1275"
            transform="translate(-5 206)"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="4"
          />

          {/* FLAG */}
          <g id="ring" transform={FLAG.flag}>
            <RoadmapFlagcon />
          </g>
          <g id="ring" transform={FLAG.shadow}>
            <RoadmapEllipseShadowIcon />
          </g>
        </g>

        {/* Popup */}

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
      {node && (
        <g
          transform={`translate(${node.circle.x - 152} ${node.circle.y - 220})`}
          // onMouseEnter={() => clearTimeout(timer)}
          onMouseLeave={() => closePopup()}
        >
          <rect
            x="0"
            width="310"
            height={`${numberOfRows > 4 ? 240 + numberOfRows * 10 : 240}`}
            rx="15"
            fill="#293445"
            style={{ boxShadow: '20px 20px 100px rgba(0, 0, 0, 0.25)' }}
          />
          <circle cx="15" cy="15" r="15" transform="translate(158 30)" fill={node.color} />
          <g transform="matrix(1 0 0 1 100 95)">
            <text x="5" y="0" fontSize="20" fill="#fff" fontFamily={theme.fontFamily.basier} letterSpacing="-0.1em">
              {node?.popup?.title}
            </text>
          </g>

          <text fontSize={13} fill={theme.colors.primary} fontFamily={theme.fontFamily.basier} id="popup-description" y="130">
            {node?.popup?.description}
          </text>
        </g>
      )}
    </svg>
  );
};

export default Roadmap2022;
