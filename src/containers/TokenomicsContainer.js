import React, { useState } from 'react';
import styled from 'styled-components';
import TokenomicsBackground from '../assets/images/tokenomics/tokenomics_background.svg';
import TokenomicsDynamicGraph from '../components/layout/tokenomics/TokenomicsDynamicGraph';
import TokenomicsPercentualText from '../components/layout/tokenomics/TokenomicsPercentualText';

const ImageUrlWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75vw;
  margin-top: 114px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    height: 100%;
    margin-top: 60px;
  }
  align-items: center;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 48px;
  color: ${({ theme: { colors } }) => colors.white};
  margin-bottom: 24px;
`;

const Description = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  width: 80%;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    flex-direction: column;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const PercetualContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    align-items: center;
  }
  align-items: flex-start;
  flex-direction: column;
`;

const TokenomicsContainer = () => {
  const [isHover, setIsHover] = useState(null);

  return (
    <ImageUrlWrapper
      style={{ backgroundImage: `url(${TokenomicsBackground})` }}
    >
      <Container id='tokenomics'>
        <TitleContainer>
          <Title>Tokenomics</Title>
          <Description>
            KDX has a fixed supply of a 100 millions tokens. The KDX Token is
            used to incentivize all the liquidity stakeholders on the Kaddex
            platform, while also rewarding its holders for supporting the
            network.
          </Description>
        </TitleContainer>
        <ContentContainer>
          <SvgContainer>
            <TokenomicsDynamicGraph isHover={isHover} />
          </SvgContainer>
          <PercetualContainer>
            <TokenomicsPercentualText
              isHover={isHover}
              onMouseOver={() => setIsHover('5')}
              onMouseLeave={() => setIsHover(null)}
              percentual='5'
              subTitle='TEAM'
              description='Team tokens will only account for 5% of the total KDX supply, on a 2 year lockup.'
            />
            <TokenomicsPercentualText
              isHover={isHover}
              onMouseOver={() => setIsHover('30')}
              onMouseLeave={() => setIsHover(null)}
              textColor='#39FFFC'
              percentual='30'
              subTitle='COMMUNITY SALES'
              description='The token sales will finance operations of the Kaddex team, and offer early supporters discounts on KDX.'
            />
            <TokenomicsPercentualText
              isHover={isHover}
              onMouseOver={() => setIsHover('25')}
              onMouseLeave={() => setIsHover(null)}
              textColor='#ED1CB5'
              percentual='25'
              subTitle='COMMUNITY REWARDS'
              description='Pursuing a long term vision, the DAO will be allocated 25% of tokens to ensure community led development of the Kaddex ecosystem'
            />
            <TokenomicsPercentualText
              isHover={isHover}
              onMouseOver={() => setIsHover('40')}
              onMouseLeave={() => setIsHover(null)}
              textColor='#FFA900'
              percentual='40'
              subTitle='NETWORK REWARDS'
              description='To ensure highly lucrative early LP boosts, Network rewards receives the largest tranche of KDX'
            />
          </PercetualContainer>
        </ContentContainer>
      </Container>
    </ImageUrlWrapper>
  );
};

export default TokenomicsContainer;
