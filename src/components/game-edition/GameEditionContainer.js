import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameEditionWrapper } from './GameEditionWrapper';
import CustomButton from '../../shared/Button';
import { Button } from 'semantic-ui-react';

const MainContainer = styled.div`
  display: flex;
  width: 35%;
  margin-bottom: 30px;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: rgb(254, 251, 102);
  background: linear-gradient(
    180deg,
    rgba(254, 251, 102, 1) 35%,
    rgba(255, 54, 208, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  font-size: larger;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  & > *:first-child {
    margin-bottom: 13px;
  }
`;

const ButtonGroup = styled(Button.Group)`
  width: 90%;
  height: 100%;
  & > *:first-child {
    margin-bottom: 25px;
  }
`;

const GameEditionContainer = ({ children }) => {
  return (
    <MainContainer>
      <GameEditionWrapper>
        <ContentContainer>
          <ButtonContainer>
            <ButtonGroup>
              <CustomButton buttonStyle={{ width: '100%', minHeight: '120px' }}>
                Launch App
              </CustomButton>
              <CustomButton buttonStyle={{ width: '100%', minHeight: '120px' }}>
                Read Docs
              </CustomButton>
            </ButtonGroup>
          </ButtonContainer>
        </ContentContainer>
      </GameEditionWrapper>
    </MainContainer>
  );
};

export default GameEditionContainer;
