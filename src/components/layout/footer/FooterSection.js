import React from 'react';
import styled from 'styled-components/macro';
import { KaddexFooterIcon, KaddexLogoFooterIcon } from '../../../assets';
import { STYColumnContainer, STYFlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';
import Stripes from '../../shared/Stripes';
import FooterItemsList from './FooterItemsList';
import { FOOTER_ABOUT, FOOTER_LEARN, FOOTER_SUPPORT } from '../../../constants/footer';

const FooterContainer = styled(STYFlexContainer)`
  padding: 80px 180px 90px 85px;
  background-color: #000000;
`;

const FooterSection = () => {
  return (
    <FooterContainer className="relative">
      <STYColumnContainer style={{ marginTop: 40, marginRight: 270 }}>
        <KaddexLogoFooterIcon />
        <KaddexFooterIcon style={{ marginTop: 53, marginBottom: 34 }} />
        <Label color="grey" lineHeight={22.75}>
          © Copyright 2022.
          <br />
          All rights reserved.
        </Label>
      </STYColumnContainer>

      <STYFlexContainer gap={80}>
        <FooterItemsList {...FOOTER_ABOUT} />
        <FooterItemsList {...FOOTER_SUPPORT} />
        <FooterItemsList {...FOOTER_LEARN} />
      </STYFlexContainer>
      <Stripes iconStyle={{ height: 112, width: 115 }} />
    </FooterContainer>
  );
};

export default FooterSection;
