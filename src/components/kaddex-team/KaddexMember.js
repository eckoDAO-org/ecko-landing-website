import React from 'react';
import styled from 'styled-components/macro';
import { LinkedinIcon, TwitterIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import { FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import PhotoFrame from './PhotoFrame';

const Container = styled(FlexContainer)`
  .social-icon {
    cursor: pointer;
    width: 32px;
    height: 32px;
    @media (max-width: ${({ MOBILE_PIXEL }) => `${MOBILE_PIXEL}px`}) {
      width: 16px;
      height: 16px;
    }
    path {
      fill: #fff;
    }
  }
`;

const KaddexMember = ({ DESKTOP_PIXEL, MOBILE_PIXEL, selectedMember }) => {
  const [width] = useWindowSize();

  const getSize = () => {
    if (width >= 1200) {
      return 'huge';
    }
    if (width < 1200 && width >= DESKTOP_PIXEL) {
      return 'big';
    }

    if (width < DESKTOP_PIXEL && width >= MOBILE_PIXEL) {
      return 'normal';
    }

    if (width < MOBILE_PIXEL && width >= 420) {
      return 'small';
    }
    if (width < 420) {
      return 'nano';
    }
  };
  return (
    <Container
      gap={50}
      style={{ marginBottom: 140 }}
      desktopPixel={DESKTOP_PIXEL}
      MOBILE_PIXEL={MOBILE_PIXEL}
      tabletClassName="column"
      mobileClassName="column"
      mobileStyle={{ marginBottom: 26 }}
    >
      {width >= DESKTOP_PIXEL ? (
        <FlexContainer className="column align-ce">
          <PhotoFrame photo={selectedMember.photo} size={getSize()} />
          <KaddexMemberSocials selectedMember={selectedMember} style={{ marginTop: 48 }} />
        </FlexContainer>
      ) : (
        <FlexContainer gap={24}>
          <PhotoFrame size={getSize()} photo={selectedMember.photo} />
          <FlexContainer className="column justify-sa">
            <KaddexMemberHeader selectedMember={selectedMember} MOBILE_PIXEL={MOBILE_PIXEL} />
            <KaddexMemberSocials selectedMember={selectedMember} />
          </FlexContainer>
        </FlexContainer>
      )}

      <FlexContainer gap={16} className="column">
        {width >= DESKTOP_PIXEL && <KaddexMemberHeader selectedMember={selectedMember} MOBILE_PIXEL={MOBILE_PIXEL} />}

        <Label color="white" size="normal" style={{ lineHeight: '28px' }} mobilePixel={MOBILE_PIXEL}>
          {selectedMember.description}
        </Label>
      </FlexContainer>
    </Container>
  );
};

const KaddexMemberSocials = ({ selectedMember, style }) => {
  return (
    <FlexContainer gap={24} style={style}>
      {selectedMember?.twitter && <TwitterIcon className="social-icon" />}
      {selectedMember?.linkedin && <LinkedinIcon className="social-icon" />}
    </FlexContainer>
  );
};

const KaddexMemberHeader = ({ selectedMember, MOBILE_PIXEL }) => {
  return (
    <>
      <FlexContainer>
        <Label color="yellow" fontFamily="syncopate-regular" mobilePixel={MOBILE_PIXEL} size="medium">
          {selectedMember.firstname}&nbsp;
        </Label>
        <Label color="yellow" fontFamily="syncopate" mobilePixel={MOBILE_PIXEL} size="medium">
          {selectedMember.lastname}
        </Label>
      </FlexContainer>

      <Label color="primary" size="normal" mobilePixel={MOBILE_PIXEL}>
        {selectedMember.role}
      </Label>
    </>
  );
};

export default KaddexMember;
