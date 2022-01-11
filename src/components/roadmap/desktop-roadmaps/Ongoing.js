import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-bottom:100px;
`;


const Ongoing = () => {
    return (
        <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="3000.823" height="200.157" viewBox="0 0 1288.823 69">
  <g id="ONGOING" transform="translate(1.172 -3656.001)">
  <line id="Active" x2="8000" transform="translate(-700 3665.001)" fill="none" stroke="#FFF" stroke-width="5"/>

    <path id="Roadmap_line" d="M-5039.488-1687.241h0Z" transform="translate(6324.714 5352.241)" fill="none" stroke="#fff" stroke-width="4"/>

    <g id="Kaddex_Website_Refresh" data-name="Kaddex Website Refresh" transform="translate(679.698 3655.569)">
      <text id="Kaddex_Website_Refresh-2" data-name="Kaddex Website Refresh" transform="translate(0.301 24.432)" fill="#fff" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">New Strategic </tspan><tspan x="0" y="41">Partnerships</tspan></text>
      <circle id="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.432)" fill="#fff"/>
    </g>
    <g id="Kaddex_Website_Refresh-3" data-name="Kaddex Website Refresh" transform="translate(881.699 3655.569)">
      <text id="Kaddex_Website_Refresh-4" data-name="Kaddex Website Refresh" transform="translate(0.301 39.432)" fill="#fff" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="0">DAO Transition</tspan></text>
      <circle id="Circle-2" data-name="Circle" cx="8" cy="8" r="8" transform="translate(0.301 0.432)" fill="#fff"/>
    </g>
    <g id="Tokenomics_Deep_Drive" data-name="Tokenomics Deep Drive" transform="translate(476.422 3655.569)">
      <text id="Tokenomics_Deep_Drive-2" data-name="Tokenomics Deep Drive" transform="translate(-0.421 39.432)" fill="#fff" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="0">Team Expansion</tspan></text>
      <circle id="Circle-3" data-name="Circle" cx="8" cy="8" r="8" transform="translate(-0.422 0.432)" fill="#fff"/>
    </g>
    <g id="Kaddex_Beta_on_MainNet" data-name="Kaddex Beta on MainNet" transform="translate(274.317 3655.569)">
      <text id="Kaddex_Beta_on_MainNet-2" data-name="Kaddex Beta on MainNet" transform="translate(-0.317 24.432)" fill="#fff" font-size="16" fontFamily={theme.fontFamily.bold} font-weight="500"><tspan x="0" y="15">Multiple</tspan><tspan x="0" y="41">code-autiding</tspan></text>
      <g id="Circle-4" data-name="Circle" transform="translate(-0.317 0.432)" fill="#fff" stroke="#fff" stroke-width="8">
        <circle cx="8" cy="8" r="8" stroke="none"/>
        <circle cx="8" cy="8" r="4" fill="none"/>
      </g>
    </g>
  </g>
</svg>

        </Container>
    );
};

export default Ongoing;