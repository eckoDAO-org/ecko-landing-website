import React from 'react';
import { RoadmapEllipseShadowIcon, RoadmapFlagcon } from '../../../assets';
import theme from '../../../styles/theme';

const whiteGrey = '#666666';

const CONFIGURATION = {
  X_WALLET_BETA: {
    circle: 'translate(103 253)',
    text: 'translate(113 306)',
    color: theme.colors.primary,
  },
  LITEPAPER: {
    circle: 'translate(260 253)',
    text: 'translate(270 306)',
    color: theme.colors.primary,
  },
  X_WALLET_V1: {
    circle: 'translate(260 364)',
    text: 'translate(270 417)',
    color: theme.colors.primary,
  },
  PUBLIC_SALE: {
    circle: 'translate(103 364)',
    text: 'translate(113 417)',
    color: theme.colors.primary,
  },
  BRIDGED_ERC20: {
    circle: 'translate(103 498)',
    text: 'translate(113 551)',
    color: whiteGrey,
  },
  SWAPPING_INTERFACE: {
    circle: 'translate(260 498)',
    text: 'translate(270 551)',
    color: whiteGrey,
  },
  WEBSITE_V2: {
    circle: 'translate(260 646)',
    text: 'translate(270 699)',
    color: whiteGrey,
  },
  KDX_VAULTING_PROGRAMME: {
    circle: 'translate(103 646)',
    text: 'translate(113 699)',
    color: whiteGrey,
  },
  KADDEX_V1_FULL_LAUNCH: {
    circle: 'translate(260 794)',
    text: 'translate(270 852)',
    color: '#FA41A5',
  },
  SINGLE_SIDED_LIQUIDITY: {
    circle: 'translate(96 799)',
    text: 'translate(111 852)',
    color: whiteGrey,
  },
  KDX_LIQUIDITY_MINING_PROGRAMME: {
    circle: 'translate(260 954)',
    text: 'translate(270 1007)',
    color: whiteGrey,
  },
  WHITEPAPER: {
    circle: 'translate(260 1116)',
    text: 'translate(270 1169)',
    color: whiteGrey,
  },
  LENDING_AND_BORROWING_FUNCTIONALITIES: {
    circle: 'translate(103 954)',
    text: 'translate(113 1007)',
    color: whiteGrey,
  },
  X_WALLET_V2: {
    circle: 'translate(103 1116)',
    text: 'translate(93 1169)',
    color: whiteGrey,
  },
  FLAG: {
    flag: 'translate(273 764)',
    shadow: 'translate(254 787)',
  },
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
          strokeWidth="2"
          strokeDasharray="8 8"
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
        {/* LITEPAPER */}
        <circle
          id="Mobile-Ellipse_LitePaper"
          data-name="Ellipse LitePaper"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.LITEPAPER.circle}
          fill={CONFIGURATION.LITEPAPER.color}
        />
        <text
          id="Mobile-Litepaper"
          transform={CONFIGURATION.LITEPAPER.text}
          fill={CONFIGURATION.LITEPAPER.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-35.783" y="0">
            Litepaper
          </tspan>
        </text>
        {/* X_WALLET_V1 */}
        <circle
          id="Mobile-Ellipse_X-Wallet_V1"
          data-name="Ellipse X-Wallet_V1"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_V1.circle}
          fill={CONFIGURATION.X_WALLET_V1.color}
        />
        <text
          id="Mobile-X-Wallet_v1"
          data-name="X-Wallet v1"
          transform={CONFIGURATION.X_WALLET_V1.text}
          fill={CONFIGURATION.X_WALLET_V1.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-43.568" y="0">
            X-Wallet v1
          </tspan>
        </text>
        {/* SWAPPING_INTERFACE */}
        <circle
          id="Mobile-Ellipse_3D_Swapping_Interface"
          data-name="Ellipse 3D_Swapping_Interface"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.SWAPPING_INTERFACE.circle}
          fill={CONFIGURATION.SWAPPING_INTERFACE.color}
        />
        <text
          id="Mobile-_3d_Swapping_Interface"
          data-name="3d Swapping Interface"
          transform={CONFIGURATION.SWAPPING_INTERFACE.text}
          fill={CONFIGURATION.SWAPPING_INTERFACE.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-43.568" y="0">
            3d Swapping
          </tspan>
          <tspan x="-35.783" y="19">
            Interface
          </tspan>
        </text>
        {/*  WEBSITE_V2 */}
        <circle
          id="Mobile-Ellipse_Website_V2"
          data-name="Ellipse Website_V2"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.WEBSITE_V2.circle}
          fill={CONFIGURATION.WEBSITE_V2.color}
        />

        <text
          id="Mobile-Website_v2"
          data-name="Website v2"
          transform={CONFIGURATION.WEBSITE_V2.text}
          fill={CONFIGURATION.WEBSITE_V2.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-39.675" y="0">
            Website v2
          </tspan>
        </text>

        {/* SINGLE_SIDED_LIQUIDITY */}
        <circle
          id="Mobile-Ellipse_Single_Sided_Liquidity"
          data-name="Ellipse Single_Sided_Liquidity"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.circle}
          fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
        />

        <text
          id="Mobile-Single_Sided_Liquidity"
          data-name="Single Sided Liquidity"
          transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.text}
          fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-47.46" y="0">
            Single Sided
          </tspan>
          <tspan x="-35.783" y="19">
            Liquidity
          </tspan>
        </text>
        {/* KDX_LIQUIDITY_MINING_PROGRAMME */}
        <circle
          id="Mobile-Ellipse_KDX_LiquidityMiningProgramme"
          data-name="Ellipse KDX_LiquidityMiningProgramme"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.circle}
          fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
        />
        <text
          id="Mobile-KDX_Liquidity_Mining_Programme"
          data-name="KDX Liquidity Mining Programme"
          transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.text}
          fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-51.353" y="0">
            KDX Liquidity
          </tspan>
          <tspan x="-63.03" y="19">
            Mining Programme
          </tspan>
        </text>
        {/* PUBLIC_SALE */}
        <circle
          id="Mobile-Ellipse_Public_Sale"
          data-name="Ellipse Public_Sale"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.PUBLIC_SALE.circle}
          fill={CONFIGURATION.PUBLIC_SALE.color}
        />

        <text
          id="Mobile-Public_Sale"
          data-name="Public Sale"
          transform={CONFIGURATION.PUBLIC_SALE.text}
          fill={CONFIGURATION.PUBLIC_SALE.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-43.568" y="0">
            Public Sale
          </tspan>
        </text>
        {/* BRIDGED_ERC20 */}
        <circle
          id="Mobile-Ellipse_Bridged_ERC20"
          data-name="Ellipse Bridged_ERC20"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.BRIDGED_ERC20.circle}
          fill={CONFIGURATION.BRIDGED_ERC20.color}
        />
        <text
          id="Mobile-Bridged_ERC-20_Token_Pairs"
          data-name="Bridged ERC-20 Token Pairs"
          transform={CONFIGURATION.BRIDGED_ERC20.text}
          fill={CONFIGURATION.BRIDGED_ERC20.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-78.6" y="0">
            Bridged ERC-20 Token
          </tspan>
          <tspan x="-20.212" y="19">
            Pairs
          </tspan>
        </text>
        {/* KDX_VAULTING_PROGRAMME */}
        <circle
          id="Mobile-Ellipse_KDX_Vaulting_Programme"
          data-name="Ellipse KDX_Vaulting_Programme"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.circle}
          fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
        />

        <text
          id="Mobile-KDX_Vaulting_programme_Available_for_early_investors"
          data-name="KDX Vaulting programme Available forearly investors"
          transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.text}
          fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-47.46" y="0">
            KDX Vaulting
          </tspan>
          <tspan x="-35.783" y="20">
            programme
          </tspan>
          <tspan fontSize="10">
            <tspan x="-34.235" y="40">
              Available for
            </tspan>
            <tspan x="-39.425" y="60">
              early investors
            </tspan>
          </tspan>
        </text>
        {/* LENDING_AND_BORROWING_FUNCTIONALITIES */}
        <circle
          id="Mobile-Ellipse_Lending_and_Borrowing"
          data-name="Ellipse Lending_and_Borrowing"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.circle}
          fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
        />

        <text
          id="Mobile-Lending_borrowing_functionalities"
          data-name="Lending &amp; borrowing functionalities"
          transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.text}
          fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-74.708" y="0">
            Lending &amp; borrowing
          </tspan>
          <tspan x="-59.138" y="19">
            functionalities
          </tspan>
        </text>
        {/* WHITEPAPER */}
        <circle
          id="Mobile-Ellipse_WhitePaper"
          data-name="Ellipse WhitePaper"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.WHITEPAPER.circle}
          fill={CONFIGURATION.WHITEPAPER.color}
        />

        <text
          id="Mobile-Whitepaper"
          transform={CONFIGURATION.WHITEPAPER.text}
          fill={CONFIGURATION.WHITEPAPER.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-39.675" y="0">
            Whitepaper
          </tspan>
        </text>
        {/* X_WALLET_V2 */}
        <circle
          id="Mobile-Ellipse_X-Wallet_V2"
          data-name="Ellipse X-Wallet_V2"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_V2.circle}
          fill={CONFIGURATION.X_WALLET_V2.color}
        />
        <text
          id="Mobile-Text"
          transform={CONFIGURATION.X_WALLET_V2.text}
          fill={CONFIGURATION.X_WALLET_V2.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-16.32" y="0">
            X-Wallet V2
          </tspan>
        </text>
        {/* X_WALLET_BETA */}
        <circle
          id="Mobile-Ellipse_X_Wallet_Beta"
          data-name="Ellipse X_Wallet_Beta"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_BETA.circle}
          fill={CONFIGURATION.X_WALLET_BETA.color}
        />
        <text
          id="Mobile-X-Wallet_Beta"
          data-name="X-Wallet Beta"
          transform={CONFIGURATION.X_WALLET_BETA.text}
          fill={CONFIGURATION.X_WALLET_BETA.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-51.353" y="0">
            X-Wallet Beta
          </tspan>
        </text>
        {/* KADDEX_V1_FULL_LAUNCH */}
        <circle
          id="Mobile-Ellipse_Kaddex_V1_Full_Launch"
          data-name="Ellipse Kaddex_V1_Full_Launch"
          cx="15"
          cy="15"
          r="15"
          transform={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.circle}
          fill={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.color}
        />
        <text
          id="Mobile-Kaddex_v1_full_launch"
          data-name="Kaddex v1 full launch"
          transform={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.text}
          fill={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.color}
          fontSize="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-35.783" y="0">
            Kaddex v1
          </tspan>
          <tspan x="-43.568" y="19">
            full launch
          </tspan>
        </text>

        <g id="Mobile-ring" transform={CONFIGURATION.FLAG.flag}>
          <RoadmapFlagcon />
        </g>
        <g id="Mobile-ring" transform={CONFIGURATION.FLAG.shadow}>
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
        strokeWidth="2"
      />
      <path
        id="Path_44414"
        data-name="Path 44414"
        d="M-369.859-11.545a20.282,20.282,0,0,1,20.331,20v71a20,20,0,0,1-20,20"
        transform="translate(700 21.5)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="2"
      />

      <line
        id="Mobile-Line_585"
        data-name="Line 585"
        x2="289"
        transform="translate(42 121)"
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth="2"
      />
    </svg>
  );
};

export default MobileRoadmap2022;
