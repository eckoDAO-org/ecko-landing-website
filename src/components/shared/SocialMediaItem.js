import React from 'react';
import styled from 'styled-components/macro';
import { STYFlexContainer } from './Container';
import Label from './Label';

const Social = styled(STYFlexContainer)`
  cursor: pointer;
  &:hover {
    span {
      text-shadow: 0 0 5px #ffffff;
    }
    & svg {
      & path {
        fill: #ffffff;
      }
    }
  }
`;

const SocialMediaItem = ({ icon, name, hideName, link }) => {
  return (
    <Social gap={10} onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
      {icon}
      {!hideName && <Label fontFamily="sincopate">{name}</Label>}
    </Social>
  );
};

export default SocialMediaItem;
