import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/img/insurobo-ci.png';
import Title from '../Title';

const Container = styled.div`
  padding: 60px 34px 50px;
  ${(props) => props.theme.window.mobile} {
    padding: 61px 28px 25px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  
  ${(props) => props.theme.window.mobile} {
    width: 100px;
  }
`;

const Logo = styled.img`
  max-width: 100%;
`;

const TitleBox = styled.div`
  text-align: center;
  padding-top: 60px;

  ${props => props.theme.window.mobile} {
    padding-top: 35px;
  }
`;

function Header() {
  return (
    <Container>
      <LogoBox>
        <Logo src={logo} alt='insurobo'/>
      </LogoBox>
      <TitleBox>
        <Title title='기업자문신청서' bigTitle padding />
      </TitleBox>
    </Container>
    
  )
}

export default Header