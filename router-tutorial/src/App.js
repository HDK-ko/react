import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Routes>
    </div>
  );
}

export default App;
