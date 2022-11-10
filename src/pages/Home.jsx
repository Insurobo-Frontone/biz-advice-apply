import React from 'react'
import styled from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';
import Button from '../components/Button';

const Wrap = styled.div`
  background-color: ${(props) => props.theme.color.BG_GRAY};
  height: 3332px;
  padding-top: 100px;
`;

const ContentContainer = styled.div`
  max-width: 768px;
  padding: 60px 34px;
  margin: 0 auto;
  border: 1px solid #D8D8D8;
  border-radius: 21px;
  background-color: ${(props) => props.theme.color.WHITE};
  margin-bottom: 47px;
`;

function Home() {
  return (
    <Wrap>
      <ContentContainer>
        <Header />
        <Form />
      </ContentContainer>
      <Button title='가입신청' />
    </Wrap>
  )
}

export default Home