import React from 'react';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';

const JobPositions = () => {
  return (
    <FlexContainer mobileClassName="column" style={{ marginTop: 140, padding: '0 130px' }}>
      <Label fontFamily="syncopate" size="big">
        Open Job
        <br />
        position
      </Label>
    </FlexContainer>
  );
};

export default JobPositions;
