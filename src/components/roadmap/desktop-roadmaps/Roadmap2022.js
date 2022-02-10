import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const CONFIGURATION = {
  X_WALLET_BETA: {
    circle: 'translate(490 190)',
    text: 'translate(437 255)',
    color: theme.colors.primary,
  },
  LITEPAPER: {
    circle: 'translate(740 190)',
    text: 'translate(750 255)',
    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: 'translate(990 190)',
    text: 'translate(950 255)',
    color: theme.colors.primary,
  },
  PUBLIC_SALE: {
    circle: 'translate(1240 190)',
    text: 'translate(1200 255)',
    color: theme.colors.primary,
  },
  BRIDGED_ERC20: {
    circle: 'translate(1490 190)',
    text: 'translate(1506 255)',
    color: whiteGrey,
  },
  SWAPPING_INTERFACE: {
    circle: 'translate(1490 381)',
    text: 'translate(1499 446)',
    color: whiteGrey,
  },
  WEBSITE_V2: {
    circle: 'translate(1240 381)',
    text: 'translate(1200 446)',
    color: whiteGrey,
  },
  KDX_VAULTING_PROGRAMME: {
    circle: 'translate(990 381)',
    text: 'translate(1000 446)',
    color: whiteGrey,
  },
  KADDEX_V1_FULL_LAUNCH: {
    circle: 'translate(490 381)',
    text: 'translate(500 446)',
    color: '#FA41A5',
  },
  SINGLE_SIDED_LIQUIDITY: {
    circle: 'translate(740 381)',
    text: 'translate(750 446)',
    color: whiteGrey,
  },
  KDX_LIQUIDITY_MINING_PROGRAMME: {
    circle: 'translate(490 596)',
    text: 'translate(500 662)',
    color: whiteGrey,
  },

  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    circle: 'translate(740 596)',
    text: 'translate(756 662)',
    color: whiteGrey,
  },
  X_WALLET_V2: {
    circle: 'translate(990 596)',
    text: 'translate(950 662)',
    color: whiteGrey,
  },
  WHITEPAPER: {
    circle: 'translate(1240 596)',
    text: 'translate(1270 662)',

    color: whiteGrey,
  },
  FLAG: {
    flag: 'translate(504 353)',
    shadow: 'translate(484 374)',
  },
};

const Roadmap2022 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1743.17" height="501" viewBox="0 0 1743.17 501">
      <g id="Roadmap" transform="translate(5 -190)">
        <g id="Group_68777" data-name="Group 68777">
          <path
            id="Path_43816"
            data-name="Path 43816"
            d="M1263.5,613.005H369a82.6,82.6,0,0,1-16.524-1.666A81.569,81.569,0,0,1,323.151,599a82.231,82.231,0,0,1-29.707-36.076,81.611,81.611,0,0,1-4.779-15.4A82.6,82.6,0,0,1,287,531.005v-54a82.6,82.6,0,0,1,1.666-16.524,81.568,81.568,0,0,1,12.34-29.325,82.231,82.231,0,0,1,36.076-29.707,81.61,81.61,0,0,1,15.4-4.779A82.6,82.6,0,0,1,369,395.005H1588a77.624,77.624,0,0,0,43.608-13.32,78.237,78.237,0,0,0,28.263-34.319A77.507,77.507,0,0,0,1666,317.005v-31a77.693,77.693,0,0,0-77.77-78H289L-5,208v-4l294,.005H1588.23a82.45,82.45,0,0,1,16.514,1.666,81.161,81.161,0,0,1,29.263,12.341,81.886,81.886,0,0,1,34.338,51.471A83.059,83.059,0,0,1,1670,286.005v31a82.6,82.6,0,0,1-1.666,16.524,81.564,81.564,0,0,1-12.34,29.325,82.238,82.238,0,0,1-36.076,29.707,81.6,81.6,0,0,1-15.395,4.779A82.59,82.59,0,0,1,1588,399.005H369a77.624,77.624,0,0,0-43.609,13.32,78.235,78.235,0,0,0-28.262,34.319A77.512,77.512,0,0,0,291,477.005v54a77.624,77.624,0,0,0,13.32,43.609,78.236,78.236,0,0,0,34.319,28.262A77.513,77.513,0,0,0,369,609.005h894.5Z"
            fill={whiteGrey}
          />

          {/* X wallet beta */}
          <circle
            id="Ellipse_X-Wallet_Beta"
            data-name="Ellipse X-Wallet_Beta"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.X_WALLET_BETA.circle}
            fill={CONFIGURATION.X_WALLET_BETA.color}
          />
          <text
            id="X-Wallet_Beta"
            data-name="X-Wallet Beta"
            transform={CONFIGURATION.X_WALLET_BETA.text}
            fill={whiteGrey}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="0" y="0" fill={CONFIGURATION.X_WALLET_BETA.color}>
              X-Wallet Beta
            </tspan>
          </text>

          {/* litepaper */}
          <circle
            id="Ellipse_Litepape"
            data-name="Ellipse Litepape"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.LITEPAPER.circle}
            fill={CONFIGURATION.LITEPAPER.color}
          />
          <text
            id="Litepaper"
            data-name="Litepaper"
            transform={CONFIGURATION.LITEPAPER.text}
            fill={CONFIGURATION.X_WALLET_BETA.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-47.71" y="0">
              Litepaper
            </tspan>
          </text>

          {/* x wallet v1 */}
          <circle
            id="Ellipse_X-Wallet_v1"
            data-name="Ellipse X-Wallet_v1"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.X_WALLET_V1.circle}
            fill={CONFIGURATION.X_WALLET_V1.color}
          />
          <text
            id="X-Wallet_v1"
            data-name="X-Wallet v1"
            transform={CONFIGURATION.X_WALLET_V1.text}
            fill={CONFIGURATION.X_WALLET_V1.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="0" y="0">
              X-Wallet v1
            </tspan>
          </text>

          {/* public sale */}
          <circle
            id="Ellipse_Public_Sale"
            data-name="Ellipse Public_Sale"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.PUBLIC_SALE.circle}
            fill={CONFIGURATION.PUBLIC_SALE.color}
          />
          <text
            id="Public_Sale"
            data-name="Public Sale"
            transform={CONFIGURATION.PUBLIC_SALE.text}
            fill={CONFIGURATION.PUBLIC_SALE.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="0" y="0">
              Public Sale
            </tspan>
          </text>

          {/* bridged erc-20 */}
          <circle
            id="Ellipse_Bridged_ERC_20_Token_Pairs"
            data-name="Ellipse Bridged_ERC_20_Token_Pairs"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.BRIDGED_ERC20.circle}
            fill={CONFIGURATION.BRIDGED_ERC20.color}
          />
          <text
            id="Bridged_ERC_20_Token_Pairs"
            data-name="Bridged ERC 20 Token Pairs"
            transform={CONFIGURATION.BRIDGED_ERC20.text}
            fill={CONFIGURATION.BRIDGED_ERC20.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-73.66" y="0">
              Bridged ERC-20
            </tspan>
            <tspan x="-58.09" y="25">
              Token Pairs
            </tspan>
          </text>

          {/* 3d swapping interface */}
          <circle
            id="Ellipse_3d_Swapping_Interface"
            data-name="Ellipse 3d_Swapping_Interface"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.SWAPPING_INTERFACE.circle}
            fill={CONFIGURATION.SWAPPING_INTERFACE.color}
          />
          <text
            id="_3d_Swapping_Interface"
            data-name="3d Swapping Interface"
            transform={CONFIGURATION.SWAPPING_INTERFACE.text}
            fill={CONFIGURATION.SWAPPING_INTERFACE.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-58.09" y="0">
              3d Swapping
            </tspan>
            <tspan x="-47.71" y="25">
              Interface
            </tspan>
          </text>

          {/* website v2 */}
          <circle
            id="Ellipse_Website_v2"
            data-name="Ellipse Website_v2"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.WEBSITE_V2.circle}
            fill={CONFIGURATION.WEBSITE_V2.color}
          />
          <text
            id="Website_v2"
            data-name="Website v2"
            transform={CONFIGURATION.WEBSITE_V2.text}
            fill={CONFIGURATION.WEBSITE_V2.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="0" y="0">
              Website v2
            </tspan>
          </text>

          {/* kdx vaulting program */}
          <circle
            id="Ellipse_KDX_Vaulting_programme_available_for_early_investors"
            data-name="Ellipse KDX_Vaulting_programme_available_for_early_investors"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.circle}
            fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
          />
          <text
            id="KDX_Vaulting_programme_available_for_early_investors"
            data-name="KDX Vaulting programme available for early investors"
            transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.text}
            fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
          >
            <tspan letterSpacing="-0.1em" x="-63.28" y="0">
              KDX Vaulting
            </tspan>
            <tspan letterSpacing="-0.1em" x="-47.71" y="25">
              programme
            </tspan>
            <tspan fontSize="13">
              <tspan x="-78.746" y="50">
                available for early
              </tspan>
              <tspan x="-43.012" y="75">
                investors
              </tspan>
            </tspan>
          </text>

          {/* kaddex v1 full launch */}
          <circle
            id="Ellipse_Kaddex_v1_full_launch"
            data-name="Ellipse Kaddex_v1_full_launch"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.circle}
            fill={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.color}
          />
          <g id="ring" transform={CONFIGURATION.FLAG.flag}>
            <RoadmapFlagcon />
          </g>
          <g id="ring" transform={CONFIGURATION.FLAG.shadow}>
            <RoadmapEllipseShadowIcon />
          </g>
          <text
            id="Kaddex_v1_full_launch"
            data-name="Kaddex v1 full launch"
            transform={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.text}
            fill={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-47.71" y="0">
              Kaddex v1
            </tspan>
            <tspan x="-58.09" y="25">
              full launch
            </tspan>
          </text>

          {/* single sided liquidityu */}
          <circle
            id="Ellipse_Single_Sided_Liquidity"
            data-name="Ellipse Single_Sided_Liquidity"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.circle}
            fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
          />
          <text
            id="Single_Sided_Liquidity"
            data-name="Single Sided Liquidity"
            transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.text}
            fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-63.28" y="0">
              Single Sided
            </tspan>
            <tspan x="-47.71" y="25">
              Liquidity
            </tspan>
          </text>

          {/* kdx mining programme */}
          <circle
            id="Ellipse_KDX_Liquidity_Mining_Programme"
            data-name="Ellipse KDX_Liquidity_Mining_Programme"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.circle}
            fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
          />
          <text
            id="KDX_Liquidity_Mining_Programme"
            data-name="KDX Liquidity Mining Programme"
            transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.text}
            fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-68.47" y="0">
              KDX Liquidity
            </tspan>
            <tspan x="-84.04" y="25">
              Mining Programme
            </tspan>
          </text>

          {/* whitepaper */}
          <circle
            id="Ellipse_1199"
            data-name="Ellipse 1199"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.WHITEPAPER.circle}
            fill={CONFIGURATION.WHITEPAPER.color}
          />

          <text
            id="Whitepaper"
            data-name="Whitepaper"
            fill={CONFIGURATION.WHITEPAPER.color}
            fontSize="20"
            transform={CONFIGURATION.WHITEPAPER.text}
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-60.61" y="0">
              Whitepaper
            </tspan>
          </text>

          <circle
            id="Ellipse_Lending_borrowing_functionalities"
            data-name="Ellipse Lending_borrowing_functionalities"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.circle}
            fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
          />
          <text
            id="Lending_borrowing_functionalities"
            data-name="Lending &amp; borrowing functionalities"
            transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.text}
            fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="-99.61" y="0">
              Lending &amp; borrowing
            </tspan>
            <tspan x="-78.85" y="24">
              functionalities
            </tspan>
          </text>

          {/* x wallet v2 */}
          <circle
            id="Ellipse_X-Wallet_v2"
            data-name="Ellipse X-Wallet_v2"
            cx="15"
            cy="15"
            r="15"
            transform={CONFIGURATION.X_WALLET_V2.circle}
            fill={CONFIGURATION.X_WALLET_V2.color}
          />
          <text
            id="X-Wallet_v2"
            data-name="X-Wallet v2"
            transform={CONFIGURATION.X_WALLET_V2.text}
            fill={CONFIGURATION.X_WALLET_V2.color}
            fontSize="20"
            fontFamily={theme.fontFamily.basier}
            letterSpacing="-0.1em"
          >
            <tspan x="0" y="0">
              X-Wallet v2
            </tspan>
          </text>

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

export default Roadmap2022;
