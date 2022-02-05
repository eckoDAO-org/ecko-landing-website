import React from 'react';
import styled from 'styled-components/macro';
import { KaddexFooterIcon, KaddexLogoFooterIcon } from '../../../assets';
import { ColumnContainer, FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_ABOUT, FOOTER_LEARN, FOOTER_SUPPORT } from '../../../constants/footer';
import { SOCIAL_MEDIA } from '../../../constants/social-media';
import SocialMediaItem from '../../shared/SocialMediaItem';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';

const FooterContainer = styled(FlexContainer)`
  padding: 80px 90px;
  background-color: #000000;
`;

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FooterContainer className="relative justify-sb tablet-column tablet-align-ce">
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer gap={80} desktopStyle={{ margin: '0 50px' }}>
        <FooterItemsList {...FOOTER_ABOUT} />
        <FlexContainer className="tablet-column" gap={80} columnGap={50}>
          <FooterItemsList {...FOOTER_SUPPORT} />
          <FooterItemsList {...FOOTER_LEARN} />
        </FlexContainer>
      </FlexContainer>

      {width >= theme.mediaQueries.desktopPixel && <Socials />}

      {width < theme.mediaQueries.desktopPixel && (
        <ColumnContainer style={{ marginTop: 70 }} gap={20}>
          <Socials />

          <Copyrights />
        </ColumnContainer>
      )}
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FooterContainer>
  );
};

export default FooterSection;
