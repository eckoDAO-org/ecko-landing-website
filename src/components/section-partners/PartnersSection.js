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
import { STYColumnContainer, STYFlexContainer } from '../shared/Container';
import InfoCard from '../shared/InfoCard';

const PartnersSection = () => {
  return (
    <STYFlexContainer gap={50} style={{ margin: '0 auto' }}>
      <PartnersIcon style={{ position: 'absolute', left: 76 }} />
      <STYColumnContainer className="justify-fe" gap={50} style={{ marginBottom: 50 }}>
        {[PARTNER_ARCHITECH, PARTNER_UFO_GAMING].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </STYColumnContainer>
      <STYColumnContainer className="justify-fe" gap={50}>
        {[PARTNER_SPOT, PARTNER_ZELCORE, PARTNER_FLUX].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </STYColumnContainer>
      <STYColumnContainer gap={50} style={{ marginBottom: 250 }}>
        {[PARTNER_TOKENSOFT, PARTNER_GENESIS_BLOCK, PARTNER_ROBOSWAP].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </STYColumnContainer>
    </STYFlexContainer>
  );
};

export default PartnersSection;
