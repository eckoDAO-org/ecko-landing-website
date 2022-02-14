import React from 'react';
import Accordion from '../shared/Accordion';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import styled from 'styled-components';

const AccordionsContainer = styled(FlexContainer)`
  display: flex;

  & > *:not(:last-child) {
    border-bottom: 1px solid grey;
    padding-bottom: 48px;
  }
  & > *:not(:first-child) {
    padding-top: 48px;
  }
`;

const JobPositions = () => {
  return (
    <FlexContainer gap={72} mobileClassName="column" style={{ marginTop: 140, padding: '0 130px' }}>
      <Label className="nowrap h-fit-content" fontFamily="syncopate" size="big">
        Open Job
        <br />
        position
      </Label>

      <AccordionsContainer className="w-100 column">
        <Accordion title="Engineer" color="primary">
          <Label size="normal" color="primary">
            Engineer
          </Label>
        </Accordion>

        <Accordion title="Marketing" color="pink" />

        <Accordion title="Business Development" color="yellow" />
      </AccordionsContainer>
    </FlexContainer>
  );
};

export default JobPositions;
