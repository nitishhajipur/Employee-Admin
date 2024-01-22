import React, { useEffect } from 'react';
import './App.scss';
import SignIn from './components/appauthentication/SignIn';
import { Route, Routes } from 'react-router';
import SignUp from './components/appauthentication/SignUp';
import NavItems from './components/navbar/NavbarItem';
import HomePage from './components/modules/homePage/Homepage';
import UserIndex from './components/modules/UsersPage/UsersIndex';
import UserProfile from './components/modules/UserProfile/UserProfile';
import ApprovalsIndex from './components/modules/approvals/ApprovalsTab';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appTypes } from './reducer/types';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route index element={<SignIn />}></Route>
        <Route path={"/signUp"} element={<SignUp />}></Route>
        <Route path={"/"} element={<NavItems />}>
          <Route path={"/home"} element={<HomePage />}></Route>
          <Route path={"/users"} element={<UserIndex />}></Route>
          <Route path={"/userProfile"} element={<UserProfile />}></Route>
          <Route path={"/Approvals"} element={<ApprovalsIndex/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
