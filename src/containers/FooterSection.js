import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { KaddexLogo } from '../assets';
import AboutList from '../components/layout/footer/AboutList';
import LearnList from '../components/layout/footer/LearnList';
import SupportList from '../components/layout/footer/SupportList';
import { ITEM_LINKS } from '../constants/itemLinks';
import { ROUTE_PRIVACY_POLICY } from '../router/routes';
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

const PrivacyElement = styled.p`
  font: normal normal normal 14px/20px montserrat-regular;
  margin: 0;
`;

const FooterGrid = styled(Grid)`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    flex-direction: column;
  }
`;

const FooterBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 0;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-flow: column;
  }
`;

const Title = styled.div`
  text-align: left;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  /* @media (max-width: ${({ theme: { mediaQueries } }) =>
    `${mediaQueries.desktopPixel + 1}px`}) {
    text-align: center;
  } */

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

const GridColumn = styled(Grid.Column)`
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    margin-bottom: 32px;
  }
`;

const FooterSection = () => {
  return (
    <Container id='footer'>
      <FooterContainer>
        <FooterGrid>
          <GridColumn>
            <Title>About</Title>
            <AboutList />
          </GridColumn>
          <GridColumn>
            <Title>Support</Title>
            <SupportList />
          </GridColumn>
          <GridColumn>
            <Title>Learn</Title>
            <LearnList />
          </GridColumn>
          <GridColumn>
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
          </GridColumn>
        </FooterGrid>
        <FooterBottomContainer>
          <Divider
            style={{
              margin: ' 24px 0',
              backgroundColor: '#FFFFFF',
              height: 3,
              boxShadow: '0 0 5px #ffffff',
            }}
          />
          <BottomContainer>
            <KaddexLogo />
            <PrivacyElement
              style={{ cursor: 'pointer' }}
              onClick={() =>
                window.open(
                  ROUTE_PRIVACY_POLICY,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              ©2022, Privacy Policy
            </PrivacyElement>
          </BottomContainer>
        </FooterBottomContainer>
      </FooterContainer>
    </Container>
  );
};

export default FooterSection;
