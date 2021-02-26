import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CodeInput, Select } from './component';

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="App" style={{ padding: '50px 50px' }}>
      {/*}
      <CodeInput
        value={code}
        onChange={setCode}
      />
  */}

      <Select
        items={['1', 'b', 'c']}
        value={'1'}
        onChange={() => {}}
      />
    </div>
  );
}

export default App;
