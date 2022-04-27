import React from 'react';
import { FlexContainer } from '../../shared/Container';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_LEARN, FOOTER_SUPPORT } from '../../../constants/footer';
import useWindowSize from '../../../hooks/useWindowSize';
import theme from '../../../styles/theme';
import Socials from './Socials';
import Copyrights from './Copyrights';
import NavigationItems from './NavigationItems';
import MailchimpFormContainer from './MailchimpFormContainer';

const FooterSection = () => {
  const [width] = useWindowSize();
  return (
    <FlexContainer
      gap={40}
      className="relative justify-sb"
      tabletClassName="column align-ce"
      mobileClassName="column align-ce"
      style={{ marginTop: 165, backgroundColor: '#000000' }}
      desktopStyle={{ padding: '80px 90px' }}
      tabletStyle={{ padding: '80px 90px' }}
      mobileStyle={{ padding: '80px 0px' }}
    >
      {width >= theme.mediaQueries.desktopPixel && <Copyrights />}

      <FlexContainer gap={80} desktopStyle={{ margin: '0 50px' }} tabletClassName="column" mobileClassName="column">
        <FlexContainer gap={80} columnGap={50}>
          <FooterItemsList title="About">
            <NavigationItems fontSize={13} color="yellow" disableHover hideXwallet />
          </FooterItemsList>
          <FooterItemsList {...FOOTER_SUPPORT} />
        </FlexContainer>

        <FooterItemsList {...FOOTER_LEARN} />
      </FlexContainer>

      {width >= theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column" gap={16}>
          <Socials /> <MailchimpFormContainer />
        </FlexContainer>
      )}

      {width < theme.mediaQueries.desktopPixel && (
        <FlexContainer className="column align-ce" style={{ marginTop: 70 }} gap={20}>
          <Socials />
          <MailchimpFormContainer />
          <Copyrights />
        </FlexContainer>
      )}
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FlexContainer>
  );
};

export default FooterSection;
