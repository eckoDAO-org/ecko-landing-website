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

const PartnersContainer = styled(FlexContainer)`
  padding: 0 70px;
  .partners-icon {
    width: 100%;
    @media (min-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.desktopPixel}px`}) {
      margin-bottom: 170px;
    }
  }
`;

const PartnersSection = () => {
  const [width] = useWindowSize();
  return (
    <PartnersContainer
      id="partners"
      gap={50}
      className="relative justify-fs"
      tabletClassName="column"
      mobileClassName="column"
      style={{ marginTop: 100 }}
    >
      {width < theme.mediaQueries.desktopPixel && <PartnersIcon className="partners-icon" />}
      {width >= theme.mediaQueries.desktopPixel && (
        <>
          <FlexContainer className="column justify-fe align-fe" gap={50} style={{ marginBottom: 50 }}>
            <PartnersIcon className="partners-icon" />

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
      {width < theme.mediaQueries.desktopPixel && (
        <FlexContainer
          className="grid"
          columns={Math.round((width - 100) / ((width < theme.mediaQueries.mobilePixel ? 170 : 240) + 20))}
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
