import React from 'react';
import styled from 'styled-components/macro';
import { StripeIcon } from '../../assets';

const STYStripesContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  line-height: 0;
`;

const Stripes = ({ iconStyle }) => {
  return (
    <STYStripesContainer>
      <StripeIcon style={iconStyle} />
    </STYStripesContainer>
  );
};

export default Stripes;
