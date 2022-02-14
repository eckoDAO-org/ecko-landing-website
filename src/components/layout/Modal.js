import React from 'react';
import styled from 'styled-components/macro';
import { FlexContainer } from '../shared/Container';

const Container = styled(FlexContainer)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease-in;
  z-index: 20;

  animation: fade-in 0.5s linear;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = ({ content, open, onClose, contentStyle }) => {
  return (
    open && (
      <Container className="justify-ce align-ce" onClick={onClose}>
        {content}
      </Container>
    )
  );
};

export default Modal;
