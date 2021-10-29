import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import ProofDexCard from '../shared/ProofDexCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel}px`}) {
    height: 100%;
  }
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 42px;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.desktopPixel + 1}px`}) {
    font-size: 32px;
    text-align: center;
  }
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.smallMobilePixel}px`}) {
    padding: 20px;
  }
  color: ${({ theme: { colors } }) => colors.white};
  margin-bottom: 24px;
`;

const ProofDexCardContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme: { mediaQueries } }) => `1200px`}) {
    flex-flow: column;
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

const ProofDexContainer = () => {
  return (
    <Container id='ProofofDex'>
      <TitleContainer>
        <Title>The most powerful Proof of Work DEX</Title>
      </TitleContainer>
      <ProofDexCardContainer>
        <GridRow>
          <ProofDexCard
            title='Swap'
            description='Swap safely with no transaction cost'
            link='Enter DEX'
            hferLink='https://swap.kaddex.com/'
            customBorder='#FFA900'
          />
          <ProofDexCard
            title='Pool'
            description='Provide liquidity for any SPL token'
            link='Add Liquidity'
            hferLink='https://swap.kaddex.com/pool'
            customBorder='#ED1CB5'
          />
        </GridRow>
        <GridRow>
          <ProofDexCard
            title='Stake'
            description='Stake KDX and earn 0.05% of all trades'
            link='Coming soon'
            customBorder='#CCCCCC '
            disabled
          />
          <ProofDexCard
            title='Build'
            description='Leverage our upcoming DeFi tools: lending, farming and beyond'
            link='Coming soon'
            customBorder='#CCCCCC '
            disabled
          />
        </GridRow>
      </ProofDexCardContainer>
    </Container>
  );
};

export default ProofDexContainer;
