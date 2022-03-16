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
    <FlexContainer
      gap={72}
      mobileClassName="column"
      desktopStyle={{ marginTop: 140, padding: '0 130px' }}
      tabletStyle={{ padding: '0 50px', marginTop: 50 }}
      mobileStyle={{ padding: '0 50px', marginTop: 50 }}
    >
      <Label className="nowrap h-fit-content" fontFamily="syncopate" size="big">
        Open Job
        <br />
        position
      </Label>

      <AccordionsContainer className="w-100 column">
        <Accordion title="Engineering" color="primary">
          <a href="Kaddex Coding Expert.pdf" target="_blank'">
            <Label size="normal" color="primary">
              SENIOR CODING EXPERT
            </Label>
          </a>
          <a href="Kaddex SERVER ARCHITECT_ADMINISTRATOR.pdf" target="_blank'">
            <Label size="normal" color="primary">
              SERVER ARCHITECT-ADMINISTRATOR
            </Label>
          </a>
        </Accordion>

        <Accordion title="Marketing" color="pink" />

        <Accordion title="Business Development" color="yellow" />
      </AccordionsContainer>
    </FlexContainer>
  );
};

export default JobPositions;
