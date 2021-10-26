import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 164px;
  align-items: center;
  flex-direction: column;
  background: transparent
    linear-gradient(90deg, #e0fffe 0%, #ecfffe 63%, #f4e7e2 85%, #fff3db 100%)
    0% 0% no-repeat padding-box;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  .underline {
    width: ${({ isHover }) => (isHover ? '100%' : 0)};
    transition: width 0.3s;
    background: ${({ theme: { colors } }) => colors.purpleKDX};
    height: 6px;
  }
`;

const Title = styled.div`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 48px;
  color: ${({ theme: { colors } }) => colors.purpleKDX};
  margin: 24px 0;
`;

const Link = styled.a`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 48px;
  color: ${({ theme: { colors } }) => colors.purpleKDX};
  margin-bottom: 0px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

const DiscordContainer = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <TitleContainer isHover={isHover}>
        <Title>
          Join our{' '}
          <Link
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            href='https://discord.com/invite/QSJpHRFDcv'
            target='_blank'
          >
            Discord<div className='underline'></div>
          </Link>{' '}
          community
        </Title>
      </TitleContainer>
    </Container>
  );
};

export default DiscordContainer;

{
  /* <LinkContainer isHover={disabled ? false : isHover}>
<Link href={hferLink || '#'}>{link}</Link>
<div className='underline'></div>
</LinkContainer> */
}
