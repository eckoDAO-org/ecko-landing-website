import React from 'react';
import { TwitterIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const TeamMemberSmall = ({ member }) => {
  return (
    <FlexContainer gap={16} className="column align-ce">
      <PhotoFrame style={{ height: 148, width: 148 }} />

      <Label color="yellow" fontFamily="syncopate" fontSize={20}>
        {member.firstname}
      </Label>
      <Label color="yellow" fontFamily="syncopate" fontSize={20}>
        {member.lastname}
      </Label>
      <Label color="yellow" fontSize={15}>
        {member.role}
      </Label>
    </FlexContainer>
  );
};

export default TeamMemberSmall;
