import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/icon/close-button-icon.png';

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .35);
  z-index: 99;
`;

const ButtonContainer = styled.div`
  position: absolute;
  padding: 7px;
  display: flex;
  justify-content: flex-end;
  top: 6%;
  width: 600px;

  ${props => props.theme.window.mobile} {
    top: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  display: block;
  width: 20px;
  height: 20px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${props => props.theme.window.mobile} {
    width: 15px;
    height: 15px;
    background-size: contain;
    
  }
`;

function Popup({ children, onClick }) {
  return (
    <Container>
      {children}
      <ButtonContainer>
        <Button onClick={onClick}></Button>
      </ButtonContainer>
    </Container>
  )
}

export default Popup