import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from './Container';
import Label from './Label';

const Arrow = ({ id, gradientColors, style }) => {
  return (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" width="34.91" height="20.947" viewBox="0 0 34.91 20.947" style={style}>
      <defs>
        <linearGradient id={`linear-gradient-${id}`} y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color={gradientColors[2]} />
          <stop offset="1" stop-color={gradientColors[0]} />
          {/* <stop class="stop-2" offset="1" stop-color={gradientColors[2]} /> */}
        </linearGradient>
      </defs>
      <path
        id="arrow"
        d="M16.1.553.561,15.914a1.882,1.882,0,0,0,0,2.681L2.373,20.39a1.934,1.934,0,0,0,2.709,0L17.455,8.22,29.828,20.393a1.934,1.934,0,0,0,2.709,0L34.349,18.6a1.882,1.882,0,0,0,0-2.681L18.813.56A1.934,1.934,0,0,0,16.1.553Z"
        transform="translate(0 0.001)"
        fill={`url(#linear-gradient-${id})`}
      />
    </svg>
  );
};

const AccordionContent = styled(FlexContainer)`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ maxHeight }) => maxHeight || 0}px;
  & > *:first-child {
    margin-top: 16px;
  }
`;

const Accordion = ({ children, color, title, gradient, arrowStyle }) => {
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
        <Label color={color} className="rainbow" gradientColors={gradient} size="large" fontFamily="syncopate">
          {title}
        </Label>
        {children && (
          <Arrow
            id={title}
            color={color}
            gradientColors={gradient}
            style={{
              transform: height ? 'rotate(0deg)' : 'rotate(180deg)',
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
