import React from 'react';
import { Popup } from 'semantic-ui-react';
import { HamburgerIcon } from '../../../assets';
import { SOCIAL_MEDIA } from '../../../constants/social-media';
import { ColumnContainer } from '../../shared/Container';
import SocialMediaItem from '../../shared/SocialMediaItem';

const Hamburger = () => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <Popup
        basic
        trigger={<HamburgerIcon />}
        on="click"
        offset={[8, 20]}
        position="bottom right"
        style={{
          zIndex: 11,
          padding: 16,
          background: '#240B2F 0% 0% no-repeat padding-box',
          border: '2px solid #FFFFFF',
          boxShadow: '0 0 5px #FFFFFF',
          borderRadius: '10px',
        }}
      >
        <ColumnContainer gap={12}>
          {SOCIAL_MEDIA.map((social, i) => (
            <SocialMediaItem key={i} {...social} />
          ))}
        </ColumnContainer>
      </Popup>
    </div>
  );
};

export default Hamburger;
