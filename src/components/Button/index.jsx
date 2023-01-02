import React from 'react'
import styled from 'styled-components'



const Button = styled.input`
  width: 100%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.color.PRIMARY};
  > span {
    cursor: pointer;
    color: ${(props) => props.theme.color.WHITE};
    font-size: 15px;
    font-weight: 500;
  }

  ${(props) => props.theme.window.mobile} {
    height: 50px;
  }
`;

const ButtonComponent = ({ title, value, name }) => {
  return (
      <Button>
        <span>{title}</span>
        <input type='button' value={value} name={name}/>
      </Button>
        
   
  )
}

export default ButtonComponent