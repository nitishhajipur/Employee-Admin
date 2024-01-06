import React from 'react';
import logo from './logo.svg';
import './App.css';
import SighnIn from './components/appauthentication/SighnIn';
import { Route, Routes } from 'react-router';
import SighnUp from './components/appauthentication/SighnUp';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<SighnIn/>}></Route>
      <Route path={'/sighnUp'} element={<SighnUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
