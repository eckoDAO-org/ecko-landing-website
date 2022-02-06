import React from 'react';
import styled from 'styled-components/macro';
import { StripeIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

const STYStripesContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  line-height: 0;
`;

const Stripes = ({ desktopPixel, tabletPixel, iconStyle, desktopIconStyle, tabletIconStyle, mobileIconStyle }) => {
  const [width] = useWindowSize();
  return (
    <STYStripesContainer>
      <StripeIcon
        style={{
          ...iconStyle,
          ...(width >= (desktopPixel && theme.mediaQueries.desktopPixel) && desktopIconStyle),
          ...(width < (tabletPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletIconStyle),
          ...(width < theme.mediaQueries.mobilePixel && mobileIconStyle),
        }}
      />
    </STYStripesContainer>
  );
};

export default Stripes;
