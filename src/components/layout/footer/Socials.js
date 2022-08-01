import React from 'react';
import { SOCIAL_MEDIA } from '../../../constants/social-media';
import { FlexContainer } from '../../shared/Container';
import SocialMediaItem from '../../shared/SocialMediaItem';

const Socials = () => {
  return (
    <FlexContainer className="h-fit-content f-wrap" gap={24} style={{ rowGap: 24 }}>
      {SOCIAL_MEDIA.map((social, i) => (
        <SocialMediaItem key={i} hideName {...social} />
      ))}
    </FlexContainer>
  );
};

export default Socials;
