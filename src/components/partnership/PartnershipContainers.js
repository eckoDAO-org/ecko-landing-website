import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 30px;
  margin-bottom:100px;

  h1 {
    margin-bottom: 60px;
    color: #fff;
  }
  main {
    justify-content: center;
  }
  main > nav {
    margin-top: 100px;
    position: sticky;
    top: 100px;
    align-self: start;
  }
  /* Sidebar Navigation */
  .partnership-nav {
    ${({ screenHeight, sectionNavHeight }) => {
      if (screenHeight < sectionNavHeight + 200) {
        return css`
          padding-left: 180px;
        `;
      }
    }}
    @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
      display: none !important;
    }
  }

  .partnership-nav a {
    text-decoration: none;
    display: block;
    padding: 0.125rem 0;
    color: #ffffff60;
    transition: all 50ms ease-in-out; 
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: #fff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  div {
    padding: 10px;
  }
  h2 {
    font-size: 16px;
    color: #ffffff;
  }

  /** page layout **/
  main {
    display: flex;

    @media (min-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel + 1}px`}) {
      display: grid;
      grid-template-columns: 1.2fr 2fr;
      max-width: 100em;
      margin: 0 auto;
    }
  }

  /** enlarge the sections for this demo, so that we have a long scrollable page **/
  section {
    padding: 20px;
    scroll-margin-top: 100px;

    @media (max-width: ${({ theme: { mediaQueries } }) =>
        `${mediaQueries.mobilePixel}px`}) {
      padding-left: 0;
    }
  }
`;

export const ContainerTitle = styled.div`
  position: relative;
  top: 0;
  margin-bottom: 40px;
  padding: 20px 0px;
  font: normal normal bold 48px/58px ${theme.fontFamily.bold};
  min-height: 80px;
  color: #fff;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    position: relative;
    text-align: center;
  }
`;

export const FeatureTitle = styled.span`
  text-align: left;
  font: normal normal bold 32px/42px ${theme.fontFamily.bold};
  letter-spacing: 0px;
  color: #ffa900;
  text-transform: capitalize;
  opacity: 1;
`;

export const FeatureText = styled.span`
  display: flex;
  text-align: left;
  font: normal normal medium 16px/26px ${theme.fontFamily.regular};
  letter-spacing: 0px;
  color: #ffffff;
  margin-top: 16px;
  opacity: 1;
`;

export const ImageContainer = styled.div`
  margin-bottom: 6px;
`;

export const SectionsContainer = styled.div``;

export const SectionContainer = styled.div``;

export const SectionMenuContainer = styled.div`
  cursor: pointer;
  a {
    font: normal normal bold 28px/38px ${theme.fontFamily.bold};
  }
`;

export const Section = styled.section`
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0.3')};
  transition: opacity 0.2s linear 0.1s;
`;