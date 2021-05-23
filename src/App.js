import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, CodeInput, Select, SearchInput } from './component';
import { CircularChart } from './component/chart';

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
    <div style={{ padding: '50px 50px' }}>
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
            results={['Apple', 'Dogple', 'Catple', 'Lol']}
            value={q}
            onChange={setQ}
          />
        </Showcase>

        <Showcase>
          <CircularChart
            chunks={[
              { color: '#E97778', value: 30 },
              { color: '#89C7B6', value: 30 },
              { color: '#FFD57E', value: 30 },
              { color: '#9C6CC9', value: 10 },
            ]}
            width={16}
          />
        </Showcase>
      </Container>
    </div>
  );
}

export default App;
