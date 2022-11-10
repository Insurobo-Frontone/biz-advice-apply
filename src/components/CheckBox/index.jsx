import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

`;

const Label = styled.label`
  color: ${(props) => props.theme.color.GRAY};
  font-size: 15px;
`;
const CheckBox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #D8D8D8;
  border-radius: 50%;
  box-sizing: border-box;
  &:checked {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #5974FF;
      border-radius: 50%;
    }
  }
`;

function CheckBoxComponent({id, label, name, checked}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <CheckBox type="checkbox" id={id} name={name} checked={checked} />
    </Container>
  )
}

export default CheckBoxComponent