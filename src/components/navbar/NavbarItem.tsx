import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from '../modules/homePage/Header';
import NavBarRoutes from './Index';
const NavItems = () => {
    const location = useLocation();
    const [theme,setTheme]=useState('light')

    const { pathname }: any = location;
    return (
        <div className={`row gx-0  App-container-${theme}`}>
            <nav className="col-2">
                <div className="nav-container">
                    <h4 className="mb-5 pt-3 ps-2"> Admin tool</h4>
                    <div className={pathname == '/' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/users' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/users" className='nav-link'>User Management</NavLink>
                    </div>
                    <div className={pathname == '/userProfile' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/userProfile" className='nav-link'>User profile</NavLink>
                    </div>
                    <div className={pathname.split("/").includes('Approvals') ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/Approvals" className='nav-link'> Approvals</NavLink>
                    </div>
                </div>
            </nav>
            <div className="col-10 container-fluid gx-0 gy-0 body-container">
                <Header />
                <NavBarRoutes/>
                <Outlet />
            </div>
        </div>
    )
}
export default NavItems