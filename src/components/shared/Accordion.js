import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from './Container';
import { ArrowDownIcon } from '../../assets';
import Label from './Label';
import { getColor } from '../../styles/theme';
import './accordion.css';
const Arrow = styled(ArrowDownIcon)`
  path {
    fill: ${({ color }) => getColor(color)};
  }
`;

const AccordionContent = styled(FlexContainer)`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ maxHeight }) => maxHeight || 0}px;
  & > *:first-child {
    margin-top: 16px;
  }
`;

const Accordion = ({
  children,
  color,
  title,

  arrowStyle,
}) => {
  const [height, setHeight] = useState(0);
  const content = useRef(null);

  function toggleAccordion() {
    if (height) {
      setHeight(0);
    } else {
      setHeight(content.current.scrollHeight);
    }
  }
  return (
    <FlexContainer color={color} className="w-100 column">
      <FlexContainer
        className={`align-ce justify-sb ${children && 'pointer'}`}
        onClick={() => {
          if (children) {
            toggleAccordion();
          }
        }}
      >
        <Label color={color} size="large" fontFamily="syncopate">
          {title}
        </Label>
        {children && (
          <Arrow
            color={color}
            style={{
              transform: height ? 'rotate(-180deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease-in-out',
              marginLeft: 10,
              width: 35,
              height: 18,
              ...arrowStyle,
            }}
          />
        )}
      </FlexContainer>

      <AccordionContent reference={content} maxHeight={height} className="column">
        {children}
      </AccordionContent>
    </FlexContainer>
  );
};

export default Accordion;
