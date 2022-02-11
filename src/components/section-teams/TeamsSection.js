import React from 'react';
import { useState } from 'react/cjs/react.development';
import { TEAM_MEMBERS } from '../../constants/team-members';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import TeamMember from './TeamMember';
import TeamMemberSmall from './TeamMemberSmall';

const TeamsSection = () => {
  const [selectedMember, seSelectedMember] = useState(TEAM_MEMBERS[0]);
  return (
    <FlexContainer id="team" className="column" style={{ padding: '0 50px', marginTop: 150 }} mobileStyle={{ padding: '0 20px', marginTop: 100 }}>
      <Label fontFamily="syncopate" size="huge">
        Team
      </Label>
      <TeamMember selectedMember={selectedMember} />

      <FlexContainer className="grid justify-ce" columns="auto-fill" px={210} gap={80} style={{ marginTop: 140, rowGap: 54 }}>
        {TEAM_MEMBERS.map((member, i) => (
          <TeamMemberSmall key={i} member={member} onClick={() => seSelectedMember(member)} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default TeamsSection;
