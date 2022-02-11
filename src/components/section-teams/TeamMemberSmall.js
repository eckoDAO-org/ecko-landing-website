import React from 'react';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const TeamMemberSmall = ({ member, onClick }) => {
  return (
    <a href="/#team">
      <FlexContainer className="column align-ce pointer" style={{ width: 206 }} onClick={onClick}>
        <PhotoFrame photo={member.photo} size="small" />

        <Label color="yellow" fontFamily="syncopate" size="normal" style={{ marginTop: 8 }}>
          {member.firstname}
        </Label>
        <Label color="yellow" fontFamily="syncopate" size="normal">
          {member.lastname}
        </Label>
        <Label className="text-center" color="yellow" size="nano">
          {member.role}
        </Label>
      </FlexContainer>
    </a>
  );
};

export default TeamMemberSmall;
