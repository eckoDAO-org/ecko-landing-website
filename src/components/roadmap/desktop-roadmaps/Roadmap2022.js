import React from 'react';
import styled from 'styled-components';
import { TokenomicsRing2 } from '../../../assets';

import theme from '../../../styles/theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

`;

const MiningProgram = ({completed}) => (
    <g id="Mining Program" dataName="Mining Program" transform="translate(422.316 3929.259)">
    <text id="Mining Program" dataName="Mining Program" transform="translate(0.301 24.742)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">KDX Liquidity  </tspan><tspan x="0" y="41">Mining Programme</tspan></text>
    <circle id="Circle-12" dataName="Circle" cx="8" cy="8" r="8" transform="translate(-0.317 -0.258)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const Whitepaper = ({completed}) => (
    <g id="Whitepaper" dataName="Whitepaper" transform="translate(920 3928.259)">
    <text id="Whitepaper" dataName="Whitepaper" transform="translate(0.301 24.742)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Whitepaper</tspan></text>
    <circle id="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.742)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const XWalletV2 = ({completed}) => (
    <g id="XWalletV2" dataName="XWalletV2" transform="translate(800 3928.259)">
    <text id="XWalletV2" dataName="XWalletV2" transform="translate(0.301 24.742)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">X-Wallet v2</tspan></text>
    <circle id="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.742)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const LendingBorrowing = ({completed}) => (
    <g id="LendingBorrowing" dataName="LendingBorrowing" transform="translate(600 3928.259)">
    <text id="LendingBorrowing" dataName="LendingBorrowing" transform="translate(0.301 24.742)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Lending &amp; borrowing </tspan><tspan x="0" y="41">functionalities</tspan></text>
    <circle id="Circle-2" dataName="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.742)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const KaddexFullLaunch = ({completed}) => (
    <g id="KaddexFullLaunch" dataName="KaddexFullLaunch" transform="translate(274.317 3928.083)">
    <text id="KaddexFullLaunch" dataName="KaddexFullLaunch" transform="translate(-4.317 28.918)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="15" xmlSpace="preserve">Kaddex v1  </tspan><tspan x="0" y="41">full launch</tspan></text>
    <circle id="Circle-3" dataName="Circle" cx="8" cy="8" r="8" transform="translate(-4.316 0.918)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const SingleSideLiquidity = ({completed}) => (
    <g id="SingleSideLiquidity" dataName="SingleSideLiquidity" transform="translate(274 3791.001)">
    <text id="SingleSideLiquidity" dataName="SingleSideLiquidity" transform="translate(-0.317 23.742)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Single Sided </tspan><tspan x="0" y="41">Liquidity</tspan></text>
    <circle id="Circle-12" dataName="Circle" cx="8" cy="8" r="8" transform="translate(-0.317 -0.258)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const WebsiteV2 = ({completed}) => (
    <g id="WebsiteV2WebsiteV2" dataName="WebsiteV2WebsiteV2" transform="translate(620 3790.591)">
    <text id="WebsiteV2WebsiteV2" dataName="WebsiteV2WebsiteV2" transform="translate(0 39)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="0">Website v2</tspan></text>
    <circle id="Circle-4" dataName="Circle" cx="8" cy="8" r="8" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const BridgeErc20 = ({completed}) => (
    <g id="BridgeErc20" dataName="BridgeErc20" transform="translate(870.525 3790.591)">
    <text id="BridgeErc20" dataName="BridgeErc20" transform="translate(0 24)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Bridged ERC-20 </tspan><tspan x="0" y="41">Token Pairs</tspan></text>
    <circle id="Circle-5" dataName="Circle" cx="8" cy="8" r="8" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const Swapping3d = ({completed}) => (
    <g id="Swapping3d" dataName="Swapping3d" transform="translate(740 3791.001)">
    <text id="Swapping3d" dataName="Swapping3d" transform="translate(-0.43 39.41)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="0">3d Swapping </tspan><tspan x="0" y="26">Interface</tspan></text>
    <circle id="Circle-6" dataName="Circle" cx="8" cy="8" r="8" transform="translate(-0.43 0.41)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const VaultingProgramme = ({completed}) => (
    <g id="VaultingProgramme" dataName="VaultingProgramme" transform="translate(430 3791.001)">
    <text id="VaultingProgramme" dataName="VaultingProgramme" transform="translate(-38.525 24.408)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">KDX Vaulting Programme </tspan><tspan x="0" y="41" fontFamily={theme.fontFamily.regular} font-weight="400">available for early investors</tspan></text>
    <circle id="Circle-7" dataName="Circle" cx="8" cy="8" r="8" transform="translate(-38.525 0.41)" fill={completed ? "#ec1bb4" : "#fff"} />
    </g>
)
const PublicSale = ({completed}) => (
    <g id="PublicSale" dataName="PublicSale" transform="translate(830.699 3655.569)">
    <text id="PublicSale" dataName="PublicSale" transform="translate(0.301 24.432)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Public Sale</tspan></text>
    <circle id="Circle-8" dataName="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.432)" fill={completed ? "#ec1bb4" : "#fff"}/>
    </g>
)
const XWalletv1 = ({completed}) => (
    <g id="X-wallet-v1" dataName="X-wallet-v1" transform="translate(655.422 3655.569)">
    <text id="X-wallet-v1" dataName="X-wallet-v1" transform="translate(-0.421 24.432)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">X-Wallet v1</tspan></text>
    <g id="Circle-9" dataName="Circle" transform="translate(-0.422 0.432)" fill={completed ? "#ec1bb4" : "#fff"} stroke="#ec1bb4" stroke-width="8">
        <circle cx="8" cy="8" r="8" stroke="none"/>
        <circle cx="8" cy="8" r="4" fill="none"/>
    </g>
    </g>
)
const Litepaper = ({completed}) => (
    <g id="Litepaper" dataName="Litepaper" transform="translate(460.596 3655.569)">
    <text id="Litepaper" dataName="Litepaper" transform="translate(0.406 39.432)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="0">Litepaper</tspan></text>
    <g id="Circle-10" dataName="Circle" transform="translate(0.405 0.432)" fill={completed ? "#ec1bb4" : "#fff"} stroke="#ec1bb4" stroke-width="8">
        <circle cx="8" cy="8" r="8" stroke="none"/>
        <circle cx="8" cy="8" r="4" fill="none"/>
    </g>
    </g>
)
const XWalletBeta = ({completed}) => (
    <g id="Kaddex_Beta_on_MainNet" dataName="Kaddex Beta on MainNet" transform="translate(274.317 3655.569)">
    <text id="Kaddex_Beta_on_MainNet-2" dataName="Kaddex Beta on MainNet" transform="translate(-0.317 39.432)" fill={completed ? "#ec1bb4" : "#fff"} fontSize="16" font-family={theme.fontFamily.bold} font-weight="700"><tspan x="0" y="0">X-Wallet Beta</tspan></text>
    <g id="Circle-11" dataName="Circle" transform="translate(-0.317 0.432)" fill={completed ? "#ec1bb4" : "#fff"} stroke={completed ? "#ec1bb4" : "#fff"} stroke-width="8">
        <circle cx="8" cy="8" r="8" stroke="none"/>
        <circle cx="8" cy="8" r="4" fill="none"/>
    </g>
    </g>
)

const Roadmap2022 = () => {
    return (
        <Container>   
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1800.837" height="550" viewBox="0 0 1291.837 369.157">

            <g id="_2022" dataName="2022" transform="translate(12 -3656.001)">
                <g id="ring" transform="translate(230 3920)" >
                    <TokenomicsRing2/>
                </g>
                <MiningProgram/>
                <g id="Roadmap_2022" dataName="Roadmap 2022">
                <path id="Roadmap_line" d="M-6091.943-1552.257h812.456a49.9,49.9,0,0,0,49.773-49.9v-35.175a49.9,49.9,0,0,0-49.773-49.9h-1046.4l1046.4.332a49.563,49.563,0,0,1,49.441,49.573v35.175a49.563,49.563,0,0,1-49.441,49.573h-812.456a49.9,49.9,0,0,0-49.771,49.9v38.539a49.9,49.9,0,0,0,49.771,49.9h1047.065l-1047.065-.332a49.563,49.563,0,0,1-49.441-49.573v-38.539A49.563,49.563,0,0,1-6091.943-1552.257Z" transform="translate(6324.714 5352.241)" fill="none" stroke="#fff" stroke-width="4"/>
                </g>
                <Whitepaper/>
                <XWalletV2/>
                <LendingBorrowing/>
                <KaddexFullLaunch/>
                <SingleSideLiquidity/>
                <WebsiteV2/>
                <BridgeErc20/>
                <Swapping3d/>
                <VaultingProgramme/>
                <line id="Active" x2="850" transform="translate(-12 3665.001)" fill="none" stroke="#ec1bb4" stroke-width="5"/>
                <PublicSale completed/>
                <XWalletv1 completed/>
                <Litepaper completed/>
                <XWalletBeta completed/>

            </g>
            </svg>
        </Container>
    );
};

export default Roadmap2022;