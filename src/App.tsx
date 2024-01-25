import React, { Suspense, useEffect, useState } from 'react';
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
import PageNotFound from './common/NoPageFound';
import SelectedSheetData from './components/modules/approvals/commonComponents/SelectedSheetData';
import { PublicRoutes } from './constants/PublicRoutes';
import PublicRoute from './routes/PublicRoutes';
import { privateRoutes } from './constants/PrivateRoutes';
import PrivateRoute from './routes/PrivateRoutes';


function App() {
  const {isAuthenticated}=useSelector((state:any)=>state.application)
  
  return (
    <div className="App">
      <Suspense fallback="...loading">
      <ToastContainer/>
      <Routes>
        {
          !isAuthenticated &&
          PublicRoutes?.map((item:any,index:number)=>{
            return(
              <Route path={item.pathName} 
              element={<PublicRoute to={'/home'} isAuthenticated={isAuthenticated}>
                <item.component/>
              </PublicRoute>}>
              </Route>
            )
          })
        }
        {
          privateRoutes?.map((item:any,index:number)=>{
            return(
              <Route path={item.pathName} key={index}
              element={<PrivateRoute to={'/'} isAuthenticated={isAuthenticated}> 
              <item.component/>
              </PrivateRoute>}
              >{item?.renderChildren && item?.children?.map((childRoute:any,cIndex:number)=>{
                return(
                  <Route path={childRoute.pathName} 
                  key={cIndex}
                  
                  element={<PrivateRoute to={'/'} isAuthenticated={isAuthenticated}>
                    {<childRoute.component/>}</PrivateRoute>}></Route>
                )
              })}
              </Route>
            )
          })
        }
      </Routes>
      </Suspense>

      {/* <Routes>
        <Route index element={<SignIn />}></Route>
        <Route path={"/signUp"} element={<SignUp />}></Route>
        <Route path={"/"} element={<NavItems />}>
          <Route path={"/home"} element={<HomePage />}></Route>
          <Route path={"/users"} element={<UserIndex />}></Route>
          <Route path={"/userProfile"} element={<UserProfile />}></Route>
          <Route path={"/Approvals"} element={<ApprovalsIndex/>}></Route>
          <Route path={"/Approvals/:sheetId"} element={<SelectedSheetData/>}></Route>
        </Route>
          <Route path={"*"} element={<PageNotFound/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
