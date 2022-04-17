import React from 'react';
import { Container, ModaBody } from './styles';

function Modal({ children, status, setStatus }) {

  function handleModalClick(e){
    if(e.target.classList.contains('modalBg')){
      setStatus(false);
    }
  }

  return (
    <Container
      className="modalBg"
      status={status}
      onClick={handleModalClick}
    >
      <ModaBody>
        { children } 
      </ModaBody>
    </Container>
  );
};

export default Modal;
