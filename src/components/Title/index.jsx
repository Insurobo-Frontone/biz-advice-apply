import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #2D2D2D;
  font-size: ${props => props.bigTitle ? '20px' : '15px'};
  font-weight: ${props => props.bigTitle ? '700' : '500'};
  padding-bottom: ${props => props.padding ? '36px' : '19px'};
  > span {
    font-size: 12.5px;
    font-weight: 300;
    display: inline-block;
    line-height: 136%;
    margin-left: 1.5px;
  }
  
  ${props => props.theme.window.mobile} {
    font-size: ${props => props.bigTitle ? '15px' : '13px'};
    padding-bottom: ${props => props.padding ? '14px' : '9px'};
    > span {
      margin-left: 0;
      line-height: 17.68px;
    }
  }
`;

const TitleComponent = ({ title, subTitle, bigTitle, padding}) => {
  return (
    <Title bigTitle={bigTitle} padding={padding}>
      {title}
      {subTitle && (
        <span>{subTitle}</span>
      )}
    </Title>
  )
}

export default TitleComponent