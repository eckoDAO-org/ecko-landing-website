import React from 'react';
import { TwitterIcon } from '../../assets';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const TeamMember = ({ selectedMember }) => {
  return (
    <FlexContainer gap={50} style={{ marginTop: 56 }}>
      <FlexContainer className="column align-ce">
        <PhotoFrame photo={selectedMember.photo} />
        <FlexContainer gap={24} style={{ marginTop: 48 }}>
          {selectedMember?.twitter && <TwitterIcon style={{ cursor: 'pointer', width: 32, height: 32 }} />}
          {selectedMember?.linkedin && <TwitterIcon style={{ cursor: 'pointer', width: 32, height: 32 }} />}
        </FlexContainer>
      </FlexContainer>

      <FlexContainer gap={16} className="column">
        <FlexContainer>
          <Label color="yellow" fontFamily="syncopate-regular" size="large">
            {selectedMember.firstname}&nbsp;
          </Label>
          <Label color="yellow" fontFamily="syncopate" size="large">
            {selectedMember.lastname}
          </Label>
        </FlexContainer>

        <Label color="yellow" size="normal">
          {selectedMember.role}
        </Label>

        <Label color="white" size="normal">
          {selectedMember.description}
        </Label>
      </FlexContainer>
    </FlexContainer>
  );
};

export default TeamMember;
