import React from 'react';
import styled from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { PartnersIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import PartnerCard from './PartnerCard';
import { theme } from '../../styles/theme';
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
import PartnersCarousel from './PartnersCarousel';

const DESKTOP_PIXEL = 1520;
const PartnersContainer = styled(FlexContainer)`
  .partners-icon {
    width: 100%;
    padding: 0 20px;
    @media (min-width: ${`${DESKTOP_PIXEL}px`}) {
      position: absolute;
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
      desktopPixel={DESKTOP_PIXEL}
      tabletClassName="column"
      mobileClassName="column"
      style={{ margin: '0 auto', marginTop: 50 }}
    >
      <PartnersIcon className="partners-icon" />
      {width >= DESKTOP_PIXEL && (
        <>
          <FlexContainer className="column justify-fe" gap={50} style={{ marginBottom: 50 }}>
            {[PARTNER_ARCHITECH, PARTNER_UFO_GAMING].map((partner, i) => (
              <PartnerCard key={i} type="partners" partner={partner} />
            ))}
          </FlexContainer>
          <FlexContainer className="column justify-fe" gap={50}>
            {[PARTNER_SPOT, PARTNER_ZELCORE, PARTNER_FLUX].map((partner, i) => (
              <PartnerCard key={i} type="partners" partner={partner} />
            ))}
          </FlexContainer>
          <FlexContainer className="column" gap={50} style={{ marginBottom: 250 }}>
            {[PARTNER_TOKENSOFT, PARTNER_GENESIS_BLOCK, PARTNER_ROBOSWAP].map((partner, i) => (
              <PartnerCard key={i} type="partners" partner={partner} />
            ))}
          </FlexContainer>
        </>
      )}
      {width < DESKTOP_PIXEL && width >= theme.mediaQueries.mobilePixel && (
        <FlexContainer className="grid" columns={2} style={{ justifyItems: 'center' }}>
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={i} type="partners" partner={partner} />
          ))}
        </FlexContainer>
      )}

      {width < theme.mediaQueries.mobilePixel && <PartnersCarousel />}
    </PartnersContainer>
  );
};

export default PartnersSection;
