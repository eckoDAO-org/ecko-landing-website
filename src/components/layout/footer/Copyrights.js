import React from 'react';
import { EckoDexLogoFooterIcon } from '../../../assets';
import { FlexContainer } from '../../shared/Container';
import Label from '../../shared/Label';

const Copyrights = () => {
  return (
    <FlexContainer className="column" tabletClassName="align-ce" mobileClassName="align-ce" style={{ marginTop: 40 }}>
      <EckoDexLogoFooterIcon style={{ marginBottom: 34 }} />
      <Label color="grey" tabletClassName="text-center" mobileClassName="text-center" fontSize={13}>
        © Copyright 2023.
        <br />
        All rights reserved.
      </Label>
    </FlexContainer>
  );
};

export default Copyrights;
