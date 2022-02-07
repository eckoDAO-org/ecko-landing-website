import React from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { PartnersIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import PartnerCard from './PartnerCard';
import {
  PARTNERS,
  PARTNER_ARCHITECH,
  PARTNER_FLUX,
  PARTNER_GENESIS_BLOCK,
  PARTNER_ROBOSWAP,
  PARTNER_SPOT,
  PARTNER_TOKENSOFT,
  PARTNER_UFO_GAMING,
  PARTNER_ZELCORE,
} from '../../constants/partners';
import theme from '../../styles/theme';

const DESKTOP_PIXEL = 1520;
const PartnersContainer = styled(FlexContainer)`
  .partners-icon {
    width: 100%;
    padding: 0 20px;
    @media (min-width: ${`${DESKTOP_PIXEL}px`}) {
      position: absolute;
      top: 80px;
      left: 70px;
      width: auto;
      padding: 0px;
    }
  }
`;

const PartnersSection = () => {
  const [width] = useWindowSize();
  return (
    <PartnersContainer
      gap={50}
      className="relative justify-ce"
      desktopPixel={DESKTOP_PIXEL}
      tabletClassName="column"
      mobileClassName="column"
      style={{ marginTop: 100 }}
    >
      <PartnersIcon className="partners-icon" />
      {width >= DESKTOP_PIXEL && (
        <>
          <FlexContainer className="column justify-fe" gap={50} style={{ marginBottom: 50 }}>
            {[PARTNER_ARCHITECH, PARTNER_UFO_GAMING].map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </FlexContainer>
          <FlexContainer className="column justify-fe" gap={50}>
            {[PARTNER_SPOT, PARTNER_ZELCORE, PARTNER_FLUX].map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </FlexContainer>
          <FlexContainer className="column" gap={50} style={{ marginBottom: 250 }}>
            {[PARTNER_TOKENSOFT, PARTNER_GENESIS_BLOCK, PARTNER_ROBOSWAP].map((partner, i) => (
              <PartnerCard key={i} partner={partner} />
            ))}
          </FlexContainer>
        </>
      )}
      {width < DESKTOP_PIXEL && (
        <FlexContainer
          className="grid"
          columns={Math.round((width - 100) / ((width < theme.mediaQueries.mobilePixel ? 170 : 210) + 20))}
          style={{ justifyItems: 'center' }}
          mobileStyle={{ padding: '0 20px' }}
          gridColumnGap={width < theme.mediaQueries.mobilePixel ? 10 : 30}
        >
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={i} partner={partner} />
          ))}
        </FlexContainer>
      )}
    </PartnersContainer>
  );
};

export default PartnersSection;
