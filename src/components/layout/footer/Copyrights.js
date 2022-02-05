import React from 'react';
import { KaddexFooterIcon, KaddexLogoFooterIcon } from '../../../assets';
import { STYColumnContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Copyrights = () => {
  return (
    <STYColumnContainer className="tablet-align-ce" style={{ marginTop: 40 }}>
      <KaddexLogoFooterIcon />
      <KaddexFooterIcon style={{ marginTop: 53, marginBottom: 34 }} />
      <Label color="grey" className="tablet-text-center" fontSize={13}>
        © Copyright 2022.
        <br />
        All rights reserved.
      </Label>
    </STYColumnContainer>
  );
};

export default Copyrights;
