import React from 'react'
import { Outlet, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Header from '../modules/homePage/Header';
const NavItems = () => {
    const location = useLocation();

    const { pathname }: any = location;
    console.log(pathname, "8...")
    return (
        <div className="row App-container">
            <nav className="col-2">
                <div className="nav-container">
                    <h4 className="mb-5 pt-3 ps-2"> Admin tool</h4>
                    <div className={pathname == '/home' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/home" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/users' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/users" className='nav-link'>User Management</NavLink>
                    </div>
                    <div className={pathname == '/userProfile' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/userProfile" className='nav-link'>User profile</NavLink>
                    </div>
                    <div className={pathname == '/Approvals' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/Approvals" className='nav-link'> Approvals</NavLink>
                    </div>
                </div>
            </nav>
            <div className="col-10 container-fluid p-2 body-container">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
export default NavItems