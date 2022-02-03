import React from 'react';
import { STYColumnContainer } from '../shared/Container';
import Label from '../shared/Label';
import RadiusBackground from '../shared/RadiusBackground';

const FeatureSection = () => {
  return (
    <STYColumnContainer className="relative w-100">
      <Label fontSize={40} fontFamily="syncopate">
        unique
        <br />
        features
      </Label>
    </STYColumnContainer>
  );
};

export default FeatureSection;
