import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../../shared/HeaderItem';
import { HamburgerIcon, CodeIcon, DiscordIcon } from '../../../assets';
import { Popup } from 'semantic-ui-react';
import { ITEM_LINKS } from '../../../constants/itemLinks';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 18px;
  }
  & > *:not(:first-child):not(:last-child) {
    margin-right: 18px;
  }
  @media (min-width: ${({ theme: { mediaQueries } }) =>
      mediaQueries.mobileBreakpoint}) {
    & > *:not(:first-child):not(:last-child) {
      margin-right: 18px;
    }
  }
`;

const Label = styled.span`
  font-size: 13px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  text-transform: capitalize;
  padding: 10px 16px;
  color: white;
  fontsize: 16;
`;

const HamburgerListContainer = styled.div`
  border-radius: 4px;
  background: #240b2f 0% 0% no-repeat padding-box;
`;

const HamburgerItem = styled.div`
  display: flex;
  align-items: center;
  font-family: montserrat-regular;
  font-size: 16px;
  background: #240b2f 0% 0% no-repeat padding-box;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
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

const RightHeaderItems = ({ pact }) => {
  return (
    <RightContainerHeader>
      <HeaderItem className='mobile-none' href='/#features'>
        Features
      </HeaderItem>
      <HeaderItem className='mobile-none' href='#tokenomics'>
        Tokenomics
      </HeaderItem>
      <HeaderItem className='mobile-none' href='/#roadmap'>
        Roadmap
      </HeaderItem>

      <HeaderItem style={{ marginLeft: '45px' }} disabledHover>
        <Popup
          basic
          trigger={<HamburgerIcon />}
          on='click'
          offset={[8, 20]}
          position='bottom right'
          style={{
            padding: 13,
            background: '#240B2F 0% 0% no-repeat padding-box',
            border: '2px solid #FFFFFF',
            boxShadow: '0 0 5px #FFFFFF',
            borderRadius: '10px',
          }}
        >
          <HamburgerListContainer>
            {Object.values(ITEM_LINKS).map((social, index) => (
              <HamburgerItem
                to='/'
                key={index}
                style={{ paddingBottom: 9 }}
                onClick={() =>
                  window.open(social.link, '_blank', 'noopener,noreferrer')
                }
              >
                {social.icon}
                {social.label}
              </HamburgerItem>
            ))}
          </HamburgerListContainer>
        </Popup>
      </HeaderItem>
    </RightContainerHeader>
  );
};

export default RightHeaderItems;
