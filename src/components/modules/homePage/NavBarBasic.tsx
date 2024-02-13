import React from 'react'
import CustomTooltip from '../../../common/CustomTooltip'
import { NavLink, useLocation } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';

const MainNavBarContainer=()=>{
    const location=useLocation()
    const {pathname}=location

    return(
        <div className='header'>


        <div className='headerContainer'>
            <CustomTooltip title={"Home Tab"} position={"top"}>

            <NavLink to="/" className={pathname == '/' ? 'selectedItem' : 'menuItem'}>
                <span><HomeIcon/> Home </span>
            </NavLink>
            </CustomTooltip>
            <CustomTooltip title={"User Tab"} position={"top"}>
            <NavLink to="/users" className={pathname == '/users' ? 'selectedItem' : 'menuItem'}>
                <span><AssignmentIndIcon/> Users</span>
            </NavLink>
            </CustomTooltip>
            <CustomTooltip title={"Profile"} position={"top"}>

            <NavLink to="/userProfile" className={pathname == '/userProfile' ? 'selectedItem' : 'menuItem'}>
                <span>

                <GroupIcon/> Profile
                </span>
            </NavLink>
            </CustomTooltip>
            <CustomTooltip title={"Approvals Tab "} position={"top"}>
            <NavLink to="/Approvals" className={pathname.split("/").includes('Approvals') ? 'selectedItem' : 'menuItem'}>
                <span>

                <AppRegistrationIcon/>
                Approvals
                </span>
            </NavLink>
            </CustomTooltip>
        </div>
        </div>

    )
}
export default MainNavBarContainer