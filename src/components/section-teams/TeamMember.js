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
    path {
      fill: #fff;
    }
  }
`;

const TeamMember = ({ DESKTOP_PIXEL, selectedMember }) => {
  const [width] = useWindowSize();
  return (
    <Container gap={50} style={{ marginTop: 56 }} desktopPixel={DESKTOP_PIXEL} tabletClassName="column" mobileClassName="column">
      {width >= DESKTOP_PIXEL ? (
        <FlexContainer className="column align-ce">
          <PhotoFrame photo={selectedMember.photo} />
          <TeamMemberSocials selectedMember={selectedMember} style={{ marginTop: 48 }} />
        </FlexContainer>
      ) : (
        <FlexContainer gap={16}>
          <PhotoFrame size="small" photo={selectedMember.photo} />
          <FlexContainer className="column justify-sa">
            <TeamMemberHeader selectedMember={selectedMember} />
            <TeamMemberSocials selectedMember={selectedMember} />
          </FlexContainer>
        </FlexContainer>
      )}

      <FlexContainer gap={16} className="column">
        {width >= DESKTOP_PIXEL && <TeamMemberHeader selectedMember={selectedMember} />}

        <Label color="white" size="normal" style={{ lineHeight: '32px' }}>
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

const TeamMemberHeader = ({ selectedMember }) => {
  return (
    <>
      <FlexContainer>
        <Label color="yellow" fontFamily="syncopate-regular" size="large">
          {selectedMember.firstname}&nbsp;
        </Label>
        <Label color="yellow" fontFamily="syncopate" size="large">
          {selectedMember.lastname}
        </Label>
      </FlexContainer>

      <Label color="primary" size="normal">
        {selectedMember.role}
      </Label>
    </>
  );
};

export default TeamMember;
