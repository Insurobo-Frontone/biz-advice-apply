import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/img/insurobo-ci.png';

const Container = styled.div`

`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.color.BLACK};
  padding: 60px 0 37px;
  ${(props) => props.theme.window.tab} {

  }
`;
function Header() {
  return (
    <Container>
      <LogoBox>
        <Logo src={logo} alt='insurobo'/>
      </LogoBox>
      <div>
        <Title>기업자문신청서</Title>
      </div>
    </Container>
    
  )
}

export default Header