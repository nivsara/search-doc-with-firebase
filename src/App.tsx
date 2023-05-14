import React from 'react';
import './App.scss';
import Search from './components/Search/Search';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <Search/>
    </div>
  );
}

export default App;
