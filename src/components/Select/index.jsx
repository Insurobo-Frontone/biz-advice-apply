import React, { Children } from 'react'
import styled from 'styled-components';
import icon from '../../assets/icon/select-icon.png';

const Container = styled.div`
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: column;
`;

const SelectBox = styled.div`
  position: relative;
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
`;

const Select = styled.select`
  width: ${props => props.width || '100%'};
  height: 50px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  background: none;
  /* background: url(${icon}) no-repeat 97% 50%/24px; */
  /* padding: 13px 14px;  */
`;

const Options = styled.option`
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${icon});
  position: absolute;
  top: calc(50% - 24px / 2);
  right: 14px;
 
`;

const SelectComponent = ({label, title, width, children}) => {
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
      <SelectBox>
        <Select>
          {Children.toArray(children).map((child, index) => (
            <Options
              key={index}
              value={child?.props?.value}
              children={child?.props?.children}
            />
          ))}
        </Select>
        <Icon />
      </SelectBox>
    </Container>
  )
}

export default SelectComponent