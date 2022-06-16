import React from 'react';
import styled from 'styled-components';
import Table from './components/Table';

function App() {
  return (
    <Wrapper>
      <Title>Codibly</Title>
      <Table />
      <Credits href="https://github.com/maciekzygmunt">Made by Maciej Zygmunt</Credits>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 98vh;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
`;

const Credits = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
