import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

const SplitMe = React.lazy(()=> import('./SplitMe'));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className='App'>
      
    </div>
  )
}

export default App;
