import React from 'react';
import styled from 'styled-components';
import {
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_OF_USE,
} from '../../../router/routes';
import HeaderItem from '../../../shared/HeaderItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const LearnList = () => {
  return (
    <ListContainer>
      <HeaderItem
        disabledHover
        textRegular
        shadowHover
        href='/kaddex litepaper.pdf'
        target='_blank'
      >
        Lite Paper
      </HeaderItem>
      <HeaderItem
        disabledHover
        textRegular
        // shadowHover
        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
      >
        FAQ
      </HeaderItem>
      <HeaderItem
        disabledHover
        shadowHover
        textRegular
        href={ROUTE_PRIVACY_POLICY}
        target='_blank'
      >
        Privacy Policy
      </HeaderItem>
      <HeaderItem
        disabledHover
        shadowHover
        textRegular
        href={ROUTE_TERMS_OF_USE}
        target='_blank'
      >
        Terms of Use
      </HeaderItem>
    </ListContainer>
  );
};

export default LearnList;
