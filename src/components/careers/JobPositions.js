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
      <AccordionsContainer className="w-100 column">
        <Accordion title="Community" gradient={['#549CCF', '#718DC8', '#8C7DC1']}>
          <Label size="normal" color="white">
            CONTENT CREATOR
          </Label>
        </Accordion>

        <Accordion title="Engineering" gradient={['#8C7DC1', '#E54DAA', '#F9588F']}>
          <a href="eckoDEX Coding Expert.pdf" target="_blank'">
            <Label size="normal" color="white">
              SENIOR CODING EXPERT
            </Label>
          </a>
          <a href="eckoDEX SERVER ARCHITECT_ADMINISTRATOR.pdf" target="_blank'">
            <Label size="normal" color="white">
              SERVER ARCHITECT-ADMINISTRATOR
            </Label>
          </a>
        </Accordion>

        <Accordion title="Marketing" gradient={['#F9588F', '#F86781', '#F77772']} />

        <Accordion title="Business Development" color="white" gradient={['#F77772', '#F58861', '#F49E4B']} />
      </AccordionsContainer>
    </FlexContainer>
  );
};

export default JobPositions;
