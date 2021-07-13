import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, *:before, *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
    }

    *:focus {
      outline: none;
    }

    html {
      width: 100%;
      min-height: 100%;
      box-sizing: border-box;
    };

    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      line-height: inherit;
      /* overflow: auto; */
      min-width: 0;
      font-family: montserrat-regular;
      color: ${({ theme: { colors } }) => colors.primary};
      background: linear-gradient(122deg, #070610 0%, #4C125A 100%);
      background-attachment: fixed;
      /* background: -webkit-gradient(linear, left top, left bottom, from(#070610), to(#4C125A)) fixed; */
      opacity: 1;
      
      
      
    };

    #root {
      height: 100%;
      & > div:first-child {
        display: flex;
        flex-flow: column;
        height: 100%;
      }
    }

    .ui.input>input {
      background: transparent 0% 0% no-repeat padding-box;
      color: #fff;
      border-radius: 4px;
    }

    .ui.input>input:active, .ui.input>input:focus {
      background: transparent 0% 0% no-repeat padding-box;
      color: #fff;
    }

    .ui.disabled.button {
      opacity: 1 !important;
    }

    #tsparticles canvas{
      z-index:-1 !important;
    }

    .desktop-none {
      @media (min-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {
        display: none !important;
      }
    }

    .mobile-none {
      @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
        display: none !important;
      }
    }
`;
