import React from 'react'
import styled from 'styled-components';
import ApplyForm from '../components/Apply';
import Header from '../components/Header';

const Wrap = styled.div`
  background-color: ${(props) => props.theme.color.BG_GRAY};
  padding-top: 100px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  ${props => props.theme.window.mobile} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const ContentContainer = styled.div`
  width: 768px;
  border: 1px solid #D8D8D8;
  border-radius: 21px;
  background-color: ${(props) => props.theme.color.WHITE};

  ${props => props.theme.window.mobile} {
    width: 100%;
    border: none;
    border-radius: 0;
  }

`;

function Home() {
  return (
    <Wrap>
      <ContentContainer>
        <Header />
        <ApplyForm />
      </ContentContainer>
    </Wrap>
  )
}

export default Home