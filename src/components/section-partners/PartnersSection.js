import React from 'react';
import { PartnersIcon } from '../../assets';
import {
  PARTNER_ARCHITECH,
  PARTNER_FLUX,
  PARTNER_GENESIS_BLOCK,
  PARTNER_ROBOSWAP,
  PARTNER_SPOT,
  PARTNER_TOKENSOFT,
  PARTNER_UFO_GAMING,
  PARTNER_ZELCORE,
} from '../../constants/partners';
import { FlexContainer } from '../shared/Container';
import PartnerCard from './PartnerCard';

const PartnersSection = () => {
  return (
    <FlexContainer gap={50} style={{ margin: '0 auto' }}>
      <PartnersIcon style={{ position: 'absolute', left: 76 }} />
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
    </FlexContainer>
  );
};

export default PartnersSection;
