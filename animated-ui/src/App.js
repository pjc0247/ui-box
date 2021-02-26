import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import { Button, CodeInput, Select, SearchInput } from './component';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Showcase = styled.div`
  display: flex;

  width: 500px;
  height: 300px;

  outline: 1px solid #999;

  >div {
    margin: auto auto;
  }
`;

function App() {
  const [code, setCode] = useState('');
  const [q, setQ] = useState('');
  const [v, setV] = useState('강아지');

  return (
    <div className="App" style={{ padding: '50px 50px' }}>
      <Container>
        <Showcase>
          <CodeInput
            value={code}
            onChange={setCode}
          />
        </Showcase>

        <Showcase>
          <Select
            items={['강아지', '개', '강아지2']}
            value={v}
            onChange={setV}
          />
        </Showcase>

        <Showcase>
          <Button
          >
            asdfsadf
          </Button>
        </Showcase>

        <Showcase>
          <SearchInput
            value={q}
            onChange={setQ}
          />
        </Showcase>
      </Container>
    </div>
  );
}

export default App;
