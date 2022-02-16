import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const CareerIntroduction = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      className="justify-ce"
      tabletClassName="column"
      mobileClassName="column"
      style={{ padding: '0 50px' }}
      desktopStyle={{ marginTop: 100 }}
      tabletStyle={{ marginTop: 50 }}
      mobileStyle={{ margin: '30px 0' }}
    >
      <FlexContainer className="column" style={{ paddingRight: 64 }}>
        <Label size="huge" fontFamily="syncopate">
          Careers
          <br />
          at Kaddex
        </Label>
      </FlexContainer>

      <FlexContainer className="column" desktopStyle={{ marginLeft: 120 }} tabletStyle={{ marginTop: 25 }} mobileStyle={{ marginTop: 25 }}>
        <Label size={width < theme.mediaQueries.mobilePixel ? 'tiny' : 'normal'} color="light-blue">
          Join the DeFi revolution by working <br />
          on the very first DEX built on Kadena’s Blockchain
        </Label>
      </FlexContainer>
    </FlexContainer>
  );
};

export default CareerIntroduction;
