import React from 'react';
import { PARTNERS } from '../../constants/partners';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import PartnerCard from './PartnerCard';

const PartnersCarousel = () => {
  const [width] = useWindowSize();

  return (
    <FlexContainer className="column">
      <FlexContainer id="partners-carousel" gap={19} className="x-auto" style={{ maxWidth: width, padding: '0 20px' }}>
        {PARTNERS.map((partner, i) => (
          <PartnerCard key={i} type="partners" partner={partner} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default PartnersCarousel;
