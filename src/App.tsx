import React from 'react';
import logo from './logo.svg';
import './App.css';
import SighnIn from './components/appauthentication/SighnIn';
import { Route, Routes } from 'react-router';
import SighnUp from './components/appauthentication/SighnUp';
import NavItems from './components/navbar/NavbarItem';
import HomePage from './components/modules/homePage/Homepage';
import UserIndex from './components/modules/UsersPage/UsersIndex';
import ApprovalsIndex from './components/modules/approvals/ApprovalsTab';
// import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={'/'} element={<SighnIn/>}></Route>
      <Route path={'/sighnUp'} element={<SighnUp/>}></Route>
      <Route path={'/menu'} element={<NavItems/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path={'/menu/users'} element={<UserIndex/>}></Route>
      <Route path={'/menu/Approvals'} element={<ApprovalsIndex/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
