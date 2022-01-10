import React from 'react';
import styled from 'styled-components';
import HeaderItem from '../../../shared/HeaderItem';
import { HamburgerIcon } from '../../../assets';
import { Popup } from 'semantic-ui-react';
import { ITEM_LINKS } from '../../../constants/itemLinks';
import theme from '../../../styles/theme';

const RightContainerHeader = styled.div`
  display: flex;
  align-items: center;
  /* @media (min-width: ${({ theme: { mediaQueries } }) =>
    mediaQueries.mobileBreakpoint}) {
    & > *:not(:first-child):not(:last-child) {
      margin-right: 18px;
    }
  } */
`;

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

const RightHeaderItems = ({ pact, menuWithMarginBottom }) => {
  return (
    <RightContainerHeader>
      <HeaderItem
        style={{ marginRight: 24 }}
        className='mobile-none'
        href='/#features'
      >
        Features
      </HeaderItem>
      <HeaderItem
        style={{ marginRight: 24 }}
        className='mobile-none'
        href='#tokenomics'
      >
        Tokenomics
      </HeaderItem>
      <HeaderItem className='mobile-none' href='/#roadmap'>
        Roadmap
      </HeaderItem>

      <HeaderItem
        style={{
          marginLeft: '32px',
        }}
        disabledHover
      >
        <Popup
          basic
          trigger={<HamburgerIcon />}
          on='click'
          offset={[8, 20]}
          position='bottom right'
          style={{
            padding: 16,
            background: '#240B2F 0% 0% no-repeat padding-box',
            border: '2px solid #FFFFFF',
            boxShadow: '0 0 5px #FFFFFF',
            borderRadius: '10px',
            marginTop: menuWithMarginBottom
              ? window.innerWidth <= theme.mediaQueries.mobilePixel
                ? '1em'
                : '2em'
              : '0',
          }}
        >
          <HamburgerListContainer>
            {Object.values(ITEM_LINKS).map((social, index) => (
              <HamburgerItem
                to='/'
                key={index}
                // style={{ paddingBottom: 8 }}
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
