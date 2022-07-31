import React from 'react';
import styled, { css } from 'styled-components/macro';
import { STYColumnContainer, STYRowContainer } from '../components/layout/Containers';
import { theme } from '../styles/theme';

const STYText = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  z-index: 1;
  color: ${({ theme: { colors }, labelColor }) => labelColor || colors.white};
  ${({ inverted, theme: { colors } }) =>
    inverted &&
    css`
      color: ${colors.primary};
    `}
  font-size:${({ fontSize }) => fontSize}px;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobileSmallPixel}px`}) {
    ${({ fontSize }) => {
      if (fontSize >= 24) {
        return css`
          font-size: 24px;
        `;
      }
    }}
  }
`;

const STYIconContainer = styled.div`
  margin-right: 8px;
`;

const Label = ({ className, children, label, labelColor, fontFamily = 'bold', fontSize = 16, labelStyle, inverted, onClick }) => {
  return (
    <STYText
      className={className}
      labelColor={labelColor}
      inverted={inverted}
      fontSize={fontSize}
      onClick={onClick}
      style={{ fontFamily: theme.fontFamily[fontFamily], ...labelStyle }}
    >
      {children || label || '-'}
    </STYText>
  );
};

export default Label;

export const LabelWithIcon = ({ className, icon, label, labelColor, fontFamily = 'bold', fontSize = 16, labelStyle, containerStyle, iconStyle }) => {
  return (
    <STYRowContainer style={containerStyle}>
      {icon && <STYIconContainer style={iconStyle}>{icon}</STYIconContainer>}

      <Label className={className} labelColor={labelColor} fontSize={fontSize} fontFamily={fontFamily} style={{ ...labelStyle }}>
        {label}
      </Label>
    </STYRowContainer>
  );
};

export const SpacebetweenLabel = ({ leftLabel, rightLabel, fontSize = 13, style }) => {
  return (
    <STYRowContainer style={{ justifyContent: 'space-between', ...style }}>
      <Label label={leftLabel} fontFamily="regular" fontSize={fontSize} />
      <Label label={rightLabel} fontSize={fontSize} labelStyle={{ textAlign: 'right' }} />
    </STYRowContainer>
  );
};

export const LabelColumn = ({ id, value, containerStyle }) => {
  return (
    <STYColumnContainer style={containerStyle}>
      <Label label={id} fontFamily="regular" labelColor={`${theme.colors.white}99`} />
      <Label label={value} fontFamily="regular" />
    </STYColumnContainer>
  );
};
