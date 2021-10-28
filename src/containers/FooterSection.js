import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { KaddexLogo } from '../assets';
import AboutList from '../components/layout/footer/AboutList';
import { ITEM_LINKS } from '../constants/itemLinks';
import './MainContainer.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background: #171b29;
  padding: 30px;
  /* overflow: auto; */
`;

const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    margin-top: 40px;
    flex-flow: column;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 1%;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  width: 100%;
`;

const PrivacyElement = styled.p`
  font: normal normal normal 14px/20px montserrat-regular;
`;

const FooterGrid = styled(Grid)`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-direction: column;
  }
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
  }
`;

const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 24px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
    text-align: center;
  }
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.smallMobilePixel}px`}) {
    padding: 20px;
  }
  color: ${({ theme: { colors } }) => colors.white};
  margin-bottom: 24px;
`;

const IconListListContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconItem = styled.div`
  display: flex;
  align-items: center;
  font-family: montserrat-regular;
  font-size: 16px;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    & svg {
      margin-right: 10px;
      & path {
        fill: #ffffff;
      }
    }
  }
  & svg {
    margin-right: 10px;
  }
`;

const FooterSection = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterGrid>
          <Grid.Column>
            <Title>About</Title>
            <AboutList />
          </Grid.Column>
          <Grid.Column>
            <Title>Support</Title>
          </Grid.Column>
          <Grid.Column>
            <Title>Learn</Title>
          </Grid.Column>
          <Grid.Column>
            <Title>Community</Title>
            <IconListListContainer>
              {Object.values(ITEM_LINKS).map((social, index) => (
                <IconItem
                  to='/'
                  key={index}
                  style={{ paddingBottom: 9 }}
                  onClick={() =>
                    window.open(social.link, '_blank', 'noopener,noreferrer')
                  }
                >
                  {social.icon}
                  {social.label}
                </IconItem>
              ))}
            </IconListListContainer>
          </Grid.Column>
        </FooterGrid>

        {/* ADD BASE SITE */}
      </FooterContainer>
    </Container>
  );
};

export default FooterSection;
