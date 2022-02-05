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
import { ColumnContainer, FlexContainer } from '../shared/Container';
import InfoCard from '../shared/InfoCard';

const PartnersSection = () => {
  return (
    <FlexContainer gap={50} style={{ margin: '0 auto' }}>
      <PartnersIcon style={{ position: 'absolute', left: 76 }} />
      <ColumnContainer className="justify-fe" gap={50} style={{ marginBottom: 50 }}>
        {[PARTNER_ARCHITECH, PARTNER_UFO_GAMING].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </ColumnContainer>
      <ColumnContainer className="justify-fe" gap={50}>
        {[PARTNER_SPOT, PARTNER_ZELCORE, PARTNER_FLUX].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </ColumnContainer>
      <ColumnContainer gap={50} style={{ marginBottom: 250 }}>
        {[PARTNER_TOKENSOFT, PARTNER_GENESIS_BLOCK, PARTNER_ROBOSWAP].map((partner, i) => (
          <InfoCard key={i} type="partners" {...partner} />
        ))}
      </ColumnContainer>
    </FlexContainer>
  );
};

export default PartnersSection;
