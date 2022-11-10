import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const InputBox = styled.div`
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #2D2D2D;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 19px;
`;
const Label = styled.label`
  color: #585858;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 9px;
`;

const Input = styled.input`
  padding: 13px 16px;
  height: 100%;
  font-size: 13px;
  box-sizing: border-box;
  border: none;
  background: none;
  ::placeholder {
    color: ${(props) => props.theme.color.INPUT_GRAY};
  }
`;

const InputComponent = ({label, title, width, placeholder, value}) => {
  
  const handleChange = ({ target: { value }}) => {

  }

  return (
    <Container width={width}>
      {title && (
        <Title>{title}</Title>
      )}
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <InputBox>
        <Input placeholder={placeholder} value={value} onChange={handleChange}/>
      </InputBox>
    </Container>
  )
}

export default InputComponent