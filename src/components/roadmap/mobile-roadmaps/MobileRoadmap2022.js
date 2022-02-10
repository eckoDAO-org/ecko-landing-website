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
      <g id="Roadmap_2022_mobile" dataName="Roadmap 2022_mobile" transform="translate(0.001 -253)">
        <path
          id="Path_44314"
          dataName="Path 44314"
          d="M376,5456H42a20,20,0,0,1-20-20V5321"
          transform="translate(0 -4328)"
          fill="none"
          stroke={whiteGrey}
          stroke-width="2"
          stroke-dasharray="8 8"
        />
        <path
          id="Path_44414"
          dataName="Path 44414"
          d="M-699.528-11.545h329.669a20.282,20.282,0,0,1,20.331,20v71a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v93.99a20,20,0,0,0,20,20h288a20,20,0,0,1,20,20v107.5a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v114a20,20,0,0,0,20,20h288a20,20,0,0,1,20,20v114.5a20,20,0,0,1-20,20h-288a20,20,0,0,0-20,20v124a20,20,0,0,0,20,20h256.642"
          transform="translate(699.527 274.555)"
          fill="none"
          stroke={whiteGrey}
          stroke-width="3"
        />
        {/* LITEPAPER */}
        <circle
          id="Ellipse_LitePaper"
          dataName="Ellipse LitePaper"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.LITEPAPER.circle}
          fill={CONFIGURATION.LITEPAPER.color}
        />
        {/* X_WALLET_V! */}
        <circle
          id="Ellipse_X-Wallet_V1"
          dataName="Ellipse X-Wallet_V1"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_V1.circle}
          fill={CONFIGURATION.X_WALLET_V1.color}
        />
        {/* SWAPPING_INTERFACE */}
        <circle
          id="Ellipse_3D_Swapping_Interface"
          dataName="Ellipse 3D_Swapping_Interface"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.SWAPPING_INTERFACE.circle}
          fill={CONFIGURATION.SWAPPING_INTERFACE.color}
        />
        {/*  WEBSITE_V2 */}
        <circle
          id="Ellipse_Website_V2"
          dataName="Ellipse Website_V2"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.WEBSITE_V2.circle}
          fill={CONFIGURATION.WEBSITE_V2.color}
        />
        {/* SINGLE_SIDED_LIQUIDITY */}
        <circle
          id="Ellipse_Single_Sided_Liquidity"
          dataName="Ellipse Single_Sided_Liquidity"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.circle}
          fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
        />
        {/* KDX_LIQUIDITY_MINING_PROGRAMME */}
        <circle
          id="Ellipse_KDX_LiquidityMiningProgramme"
          dataName="Ellipse KDX_LiquidityMiningProgramme"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.circle}
          fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
        />
        {/* PUBLIC_SALE */}
        <circle
          id="Ellipse_Public_Sale"
          dataName="Ellipse Public_Sale"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.PUBLIC_SALE.circle}
          fill={CONFIGURATION.PUBLIC_SALE.color}
        />
        {/* BRIDGED_ERC20 */}
        <circle
          id="Ellipse_Bridged_ERC20"
          dataName="Ellipse Bridged_ERC20"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.BRIDGED_ERC20.circle}
          fill={CONFIGURATION.BRIDGED_ERC20.color}
        />
        {/* KDX_VAULTING_PROGRAMME */}
        <circle
          id="Ellipse_KDX_Vaulting_Programme"
          dataName="Ellipse KDX_Vaulting_Programme"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.circle}
          fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
        />

        {/* LENDING_AND_BORROWING_FUNCTIONALITIES */}
        <circle
          id="Ellipse_Lending_and_Borrowing"
          dataName="Ellipse Lending_and_Borrowing"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.circle}
          fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
        />

        {/* WHITEPAPER */}
        <circle
          id="Ellipse_WhitePaper"
          dataName="Ellipse WhitePaper"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.WHITEPAPER.circle}
          fill={CONFIGURATION.WHITEPAPER.color}
        />
        {/* X_WALLET_V2 */}
        <circle
          id="Ellipse_X-Wallet_V2"
          dataName="Ellipse X-Wallet_V2"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_V2.circle}
          fill={CONFIGURATION.X_WALLET_V2.color}
        />
        <circle
          id="Ellipse_1253"
          dataName="Ellipse 1253"
          cx="10"
          cy="10"
          r="10"
          transform={CONFIGURATION.X_WALLET_BETA.circle}
          fill={CONFIGURATION.X_WALLET_BETA.color}
        />
        {/* KADDEX_V1_FULL_LAUNCH */}
        <circle
          id="Ellipse_Kaddex_V1_Full_Launch"
          dataName="Ellipse Kaddex_V1_Full_Launch"
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
          id="Litepaper"
          transform={CONFIGURATION.LITEPAPER.text}
          fill={CONFIGURATION.LITEPAPER.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-35.783" y="0">
            Litepaper
          </tspan>
        </text>
        <text
          id="X-Wallet_v1"
          dataName="X-Wallet v1"
          transform={CONFIGURATION.X_WALLET_V1.text}
          fill={CONFIGURATION.X_WALLET_V1.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-43.568" y="0">
            X-Wallet v1
          </tspan>
        </text>
        <text
          id="Public_Sale"
          dataName="Public Sale"
          transform={CONFIGURATION.PUBLIC_SALE.text}
          fill={CONFIGURATION.PUBLIC_SALE.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-43.568" y="0">
            Public Sale
          </tspan>
        </text>
        <text
          id="Bridged_ERC-20_Token_Pairs"
          dataName="Bridged ERC-20 Token Pairs"
          transform={CONFIGURATION.BRIDGED_ERC20.text}
          fill={CONFIGURATION.BRIDGED_ERC20.color}
          font-size="15"
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
        <text
          id="_3d_Swapping_Interface"
          dataName="3d Swapping Interface"
          transform={CONFIGURATION.SWAPPING_INTERFACE.text}
          fill={CONFIGURATION.SWAPPING_INTERFACE.color}
          font-size="15"
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
        <text
          id="Website_v2"
          dataName="Website v2"
          transform={CONFIGURATION.WEBSITE_V2.text}
          fill={CONFIGURATION.WEBSITE_V2.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-39.675" y="0">
            Website v2
          </tspan>
        </text>
        <text
          id="KDX_Liquidity_Mining_Programme"
          dataName="KDX Liquidity Mining Programme"
          transform={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.text}
          fill={CONFIGURATION.KDX_LIQUIDITY_MINING_PROGRAMME.color}
          font-size="15"
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
        <text
          id="Single_Sided_Liquidity"
          dataName="Single Sided Liquidity"
          transform={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.text}
          fill={CONFIGURATION.SINGLE_SIDED_LIQUIDITY.color}
          font-size="15"
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
        <text
          id="Lending_borrowing_functionalities"
          dataName="Lending &amp; borrowing functionalities"
          transform={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.text}
          fill={CONFIGURATION.LENDING_AND_BORROWING_FUNCTIONALITIES.color}
          font-size="15"
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
        <text
          id="Whitepaper"
          transform={CONFIGURATION.WHITEPAPER.text}
          fill={CONFIGURATION.WHITEPAPER.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-39.675" y="0">
            Whitepaper
          </tspan>
        </text>
        <text
          id="Text"
          transform={CONFIGURATION.X_WALLET_V2.text}
          fill={CONFIGURATION.X_WALLET_V2.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-16.32" y="0">
            X-Wallet V2
          </tspan>
        </text>
        <text
          id="X-Wallet_Beta"
          dataName="X-Wallet Beta"
          transform={CONFIGURATION.X_WALLET_BETA.text}
          fill={CONFIGURATION.X_WALLET_BETA.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-51.353" y="0">
            X-Wallet Beta
          </tspan>
        </text>
        <text
          id="KDX_Vaulting_programme_Available_for_early_investors"
          dataName="KDX Vaulting programme Available forearly investors"
          transform={CONFIGURATION.KDX_VAULTING_PROGRAMME.text}
          fill={CONFIGURATION.KDX_VAULTING_PROGRAMME.color}
          font-size="15"
          fontFamily={theme.fontFamily.basier}
          letterSpacing="-0.1em"
        >
          <tspan x="-47.46" y="0">
            KDX Vaulting
          </tspan>
          <tspan x="-35.783" y="20">
            programme
          </tspan>
          <tspan font-size="10">
            <tspan x="-34.235" y="40">
              Available for
            </tspan>
            <tspan x="-39.425" y="60">
              early investors
            </tspan>
          </tspan>
        </text>
        <text
          id="Kaddex_v1_full_launch"
          dataName="Kaddex v1 full launch"
          transform={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.text}
          fill={CONFIGURATION.KADDEX_V1_FULL_LAUNCH.color}
          font-size="15"
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
      </g>
    </svg>
  );
};

export default MobileRoadmap2022;
