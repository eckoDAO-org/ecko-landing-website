import React from 'react';
import { useState } from 'react/cjs/react.development';
import { TEAM_MEMBERS } from '../../constants/team-members';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import TeamMember from './TeamMember';
import TeamMemberSmall from './TeamMemberSmall';

const DESKTOP_PIXEL = 960;
const TeamsSection = () => {
  const [width] = useWindowSize();
  const [selectedMember, seSelectedMember] = useState(TEAM_MEMBERS[0]);

  const getColor = (i) => {
    if (i % 3 === 0) {
      return 'yellow';
    } else if (i % 3 === 1) {
      return 'pink';
    }
    return 'primary';
  };
  return (
    <FlexContainer id="team" className="column" style={{ padding: '0 90px', marginTop: 150 }} mobileStyle={{ padding: '0 20px', marginTop: 100 }}>
      <Label fontFamily="syncopate" size="big">
        Team
      </Label>
      <TeamMember DESKTOP_PIXEL={DESKTOP_PIXEL} selectedMember={selectedMember} />

      <FlexContainer
        className="grid justify-sb"
        columns="auto-fill"
        px={width > DESKTOP_PIXEL ? 210 : 150}
        gridColumnGap={20}
        style={{ marginTop: 140, rowGap: 54 }}
        mobileStyle={{ marginTop: 26 }}
      >
        {TEAM_MEMBERS.sort((a, b) => a.id - b.id).map((member, i) => (
          <TeamMemberSmall
            key={i}
            color={getColor(i)}
            selectedMember={selectedMember}
            member={member}
            onClick={() => seSelectedMember(member)}
            DESKTOP_PIXEL={DESKTOP_PIXEL}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default TeamsSection;
