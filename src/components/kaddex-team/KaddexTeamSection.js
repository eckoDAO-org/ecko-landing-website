import React, { useState } from 'react';
import { KADDEX_TEAM_MEMBERS } from '../../constants/kaddex-members';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import TeamMember from './KaddexMember';
import TeamMemberSmall from './KaddexMemberSmall';

const DESKTOP_PIXEL = 960;
const MOBILE_PIXEL = 560;

const KaddexTeamSection = () => {
  const [width] = useWindowSize();
  const [selectedMember, seSelectedMember] = useState();

  return (
    <FlexContainer
      id="team"
      className="scroll-mt column"
      style={{ padding: '0 90px', marginTop: 150 }}
      mobileStyle={{ padding: '0 20px', marginTop: 100 }}
    >
      <Label fontFamily="syncopate" size="big" style={{ marginBottom: 56, marginLeft: 30 }}>
        Team
      </Label>
      {selectedMember && <TeamMember DESKTOP_PIXEL={DESKTOP_PIXEL} MOBILE_PIXEL={MOBILE_PIXEL} selectedMember={selectedMember} />}

      <FlexContainer className="grid justify-sb" columns="auto-fill" px={width > DESKTOP_PIXEL ? 210 : 150} gridColumnGap={20} style={{ rowGap: 54 }}>
        {KADDEX_TEAM_MEMBERS.sort((a, b) => a.id - b.id).map((member, i) => (
          <TeamMemberSmall
            key={i}
            gradientColors={colors[i]}
            member={member}
            selectedMember={selectedMember}
            onClick={() => {
              seSelectedMember(member);
            }}
            DESKTOP_PIXEL={DESKTOP_PIXEL}
            MOBILE_PIXEL={MOBILE_PIXEL}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

const colors = [
  ['#66C7E3', '#71BEDA'],
  ['#71BEDA', '#7BB6D2'],
  ['#7BB6D2', '#86ADC9'],
  ['#86ADC9', '#90A4C1'],
  ['#90A4C1', '#9B9CB8'],
  ['#9B9CB8', '#A593B0'],
  ['#A593B0', '#B08AA7'],
  ['#B08AA7', '#BA829F'],
  ['#BA829F', '#BC809D'],
  ['#BC809D', '#C57996'],
  ['#C57996', '#C57596'],
  ['#C57596', '#CB8294'],
  ['#CB8294', '#D08C92'],
  ['#D08C92', '#D69590'],
  ['#D69590', '#DB9F8E'],
  ['#DB9F8E', '#E1A88D'],
  ['#E1A88D', '#E6B28B'],
  ['#E6B28B', '#ECBB89'],
  ['#ECBB89', '#F1C587'],
  ['#F1C587', '#F7CE85'],
  ['#F7CE85', '#F7EA99'],
  ['#F7EA99', '#F8EF99'],
  ['#F8EF99', '#F9FE99'],
];

export default KaddexTeamSection;
