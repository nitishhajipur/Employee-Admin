import React from'react'
import { Route, Routes } from 'react-router'
import HomePage from '../modules/homePage/Homepage'
import UserIndex from '../modules/UsersPage/UsersIndex'
import UserProfile from '../modules/UserProfile/UserProfile'
import ApprovalsIndex from '../modules/approvals/ApprovalsTab'
const NavBarRoutes=()=>{
    return(
        <Routes>
            <Route path='/' element ={<HomePage/>}></Route>
            <Route path='/Approvals' element ={<ApprovalsIndex/>}></Route>
            <Route path='/userProfile' element ={<UserProfile/>}></Route>
            <Route path='/users' element ={<UserIndex/>}></Route>
        </Routes>
    )
}
export default NavBarRoutes