import React from 'react'
import { Outlet, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
const NavItems=()=>{
    const location = useLocation();

    const { pathname }: any = location;
    console.log(pathname,"8...")
    return (
        <div className="row App-container">
            <nav className="col-2">
                <div className="nav-container">
                    <h6 className="mb-5 pt-3 ps-2">Admin Management</h6>
                    <div className={pathname == '/menu' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="/menu" className='nav-link'>Home</NavLink>
                    </div>
                    <div className={pathname == '/menu/users' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="./users" className='nav-link'>User Management</NavLink>
                    </div>
                    <div className={pathname == '/menu/Approvals' ? 'selected-nav' : 'nav-item'}>
                        <NavLink to="./Approvals" className='nav-link'> Approvals</NavLink>
                    </div>
                </div>
            </nav>
            <div className="col-10 container-fluid p-2 body-container">
                <Outlet />
            </div>
        </div>
    )
}
export default NavItems