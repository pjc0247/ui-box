import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CodeInput } from './component';

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="App">
      <CodeInput
        value={code}
        onChange={setCode}
      />
    </div>
  );
}

export default App;
