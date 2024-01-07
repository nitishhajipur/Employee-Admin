import React from 'react';
import logo from './logo.svg';
import './App.css';
import SighnIn from './components/appauthentication/SighnIn';
import { Route, Routes } from 'react-router';
import SighnUp from './components/appauthentication/SighnUp';
import NavItems from './components/navbar/NavbarItem';
import HomePage from './components/modules/Homepage';
import UserPage from './components/modules/UserPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<SighnIn/>}></Route>
      <Route path={'/sighnUp'} element={<SighnUp/>}></Route>
      <Route path={'/menu'} element={<NavItems/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path={'/menu/users'} element={<UserPage/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
