import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  width: 250px;
  height: 250px;
  max-width: 35vh;
  max-height: 35vh;
  opacity: ${({ disabled }) => (disabled ? '30%' : 1)};
`;

const ColoredBlock = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transform: ${({ isHover }) =>
    isHover ? 'translateX(5%) translateY(5%)' : null};
  transition: width 0.3s, transform 0.3s;

  z-index: -1;
  background-color: ${({ customBorder }) =>
    customBorder ? customBorder : 'none'};
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: linear-gradient(122deg, #070610 0%, #4c125a 100%);
  border: 1px solid
    ${({ customBorder }) => (customBorder ? customBorder : 'none')};

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  color: ${({ theme: { colors } }) => colors.white};
`;

const Description = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: center;
`;

const LinkContainer = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.white};

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: #fff;
    height: 3px;
  }
`;
const Link = styled.a`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 16px;
  margin-bottom: 2px;
  color: ${({ theme: { colors } }) => colors.white};

  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

const ProofDexCard = ({
  disabled,
  customBorder,
  title,
  description,
  link,
  hferLink,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      disabled={disabled}
    >
      <ColoredBlock
        customBorder={customBorder}
        isHover={disabled ? false : isHover}
      />
      <CardContainer customBorder={customBorder}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkContainer isHover={disabled ? false : isHover}>
          <Link target='black' href={hferLink || '#'}>
            {link}
          </Link>
          <div className='underline'></div>
        </LinkContainer>
      </CardContainer>
    </Wrapper>
  );
};

export default ProofDexCard;
