import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import { HamburgerIcon } from '../../../assets';
import { ITEM_LINKS } from '../../../constants/itemLinks';
import Label from '../../shared/Label';

const HamburgerListContainer = styled.div`
  border-radius: 4px;
  background: #240b2f 0% 0% no-repeat padding-box;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const HamburgerItem = styled.div`
  display: flex;
  align-items: center;
  background: #240b2f 0% 0% no-repeat padding-box;
  color: #ffffff;
  &:hover {
    span {
      text-shadow: 0 0 5px #ffffff;
    }
    & svg {
      margin-right: 10px;
      & path {
        fill: #ffffff;
      }
    }
  }
  & svg {
    margin-right: 10px;
  }
`;

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
          padding: 16,
          background: '#240B2F 0% 0% no-repeat padding-box',
          border: '2px solid #FFFFFF',
          boxShadow: '0 0 5px #FFFFFF',
          borderRadius: '10px',
        }}
      >
        <HamburgerListContainer>
          {Object.values(ITEM_LINKS).map((social, index) => (
            <HamburgerItem to="/" key={index} onClick={() => window.open(social.link, '_blank', 'noopener,noreferrer')}>
              {social.icon}
              <Label fontSize={16}>{social.label}</Label>
            </HamburgerItem>
          ))}
        </HamburgerListContainer>
      </Popup>
    </div>
  );
};

export default Hamburger;
