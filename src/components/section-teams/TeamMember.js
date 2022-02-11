import React from 'react';
import styled from 'styled-components/macro';
import { LinkedinIcon, TwitterIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const Container = styled(FlexContainer)`
  .social-icon {
    cursor: pointer;
    width: 32px;
    height: 32px;
    @media (max-width: ${({ MOBILE_PIXEL }) => `${MOBILE_PIXEL}px`}) {
      width: 16px;
      height: 16px;
    }
    path {
      fill: #fff;
    }
  }
`;

const TeamMember = ({ DESKTOP_PIXEL, MOBILE_PIXEL, selectedMember }) => {
  const [width] = useWindowSize();
  return (
    <Container
      gap={50}
      style={{ marginTop: 56 }}
      desktopPixel={DESKTOP_PIXEL}
      MOBILE_PIXEL={MOBILE_PIXEL}
      tabletClassName="column"
      mobileClassName="column"
    >
      {width >= DESKTOP_PIXEL ? (
        <FlexContainer className="column align-ce">
          <PhotoFrame photo={selectedMember.photo} size={width >= 1200 ? 'huge' : 'big'} />
          <TeamMemberSocials selectedMember={selectedMember} style={{ marginTop: 48 }} />
        </FlexContainer>
      ) : (
        <FlexContainer gap={24}>
          <PhotoFrame size={width >= MOBILE_PIXEL ? 'small' : 'tiny'} photo={selectedMember.photo} />
          <FlexContainer className="column justify-sa">
            <TeamMemberHeader selectedMember={selectedMember} MOBILE_PIXEL={MOBILE_PIXEL} />
            <TeamMemberSocials selectedMember={selectedMember} />
          </FlexContainer>
        </FlexContainer>
      )}

      <FlexContainer gap={16} className="column">
        {width >= DESKTOP_PIXEL && <TeamMemberHeader selectedMember={selectedMember} MOBILE_PIXEL={MOBILE_PIXEL} />}

        <Label color="white" size="normal" style={{ lineHeight: '28px' }} mobilePixel={MOBILE_PIXEL}>
          {selectedMember.description}
        </Label>
      </FlexContainer>
    </Container>
  );
};

const TeamMemberSocials = ({ selectedMember, style }) => {
  return (
    <FlexContainer gap={24} style={style}>
      {selectedMember?.twitter && <TwitterIcon className="social-icon" />}
      {selectedMember?.linkedin && <LinkedinIcon className="social-icon" />}
    </FlexContainer>
  );
};

const TeamMemberHeader = ({ selectedMember, MOBILE_PIXEL }) => {
  return (
    <>
      <FlexContainer>
        <Label color="yellow" fontFamily="syncopate-regular" mobilePixel={MOBILE_PIXEL} size="medium">
          {selectedMember.firstname}&nbsp;
        </Label>
        <Label color="yellow" fontFamily="syncopate" mobilePixel={MOBILE_PIXEL} size="medium">
          {selectedMember.lastname}
        </Label>
      </FlexContainer>

      <Label color="primary" size="normal" mobilePixel={MOBILE_PIXEL}>
        {selectedMember.role}
      </Label>
    </>
  );
};

export default TeamMember;
