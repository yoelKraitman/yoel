import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Family from './view/components/Family';

function App() {
  const [family, setFamily] = useState({});
  return (
    <div>
      <Family />
      {/* {its wolk =down} */}
      <p>{family? <div>hoo</div> : <div>oiejoid</div>}</p>
    </div>
  );
}

export default App;
