import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router';
import GroupIcon from '@mui/icons-material/Group';
import { InputSwitch } from 'primereact/inputswitch';
import { NavLink } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { appTypes } from '../../../reducer/types';
import { FetchData } from '../../../config/Fetch';
import NavBarRoutes from '../../navbar/Index';
import CustomTooltip from '../../../common/CustomTooltip';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(props:any) {
    const {setTheme,theme}=props
    const location=useLocation()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [userName,setUserName]=useState<any>()
    const open = Boolean(anchorEl);
    const {pathname}=location
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const dispatch=useDispatch()
    const id = sessionStorage.id;
    useEffect(()=>{
        FetchData({
            url: `http://localhost:3006/api/findAdminById/${id}`,
            method: 'GET',
            data: ''
        }).then((response: any) => {
            dispatch({type:appTypes.USER_DETAILS,payload:response.data})
            let userId=(response?.data?.firstName+ " "+response?.data?.lastName).toUpperCase()
            setUserName(userId.split(" "))
        }).catch((error: any) => {
            // toast.error(error.message)
        })
        
    },[])
    console.log(userName,"57.....usernamer")
    
    const handleClose = (param: any) => {
        setAnchorEl(null);
        if(param == 'profile'){
            navigate('/menu/userProfile')
        }
        if(param == 'logout'){
            navigate('/')
            sessionStorage.setItem('id','')
            dispatch({type:appTypes.IS_AUTHENTICATED,payload:false})
        }
    };
    return (
        <div className='container-fluid gx-0'>

        <header className='d-flex mainContainer '>
            <div className='appHeading'>
                <p className='m-0'>Admin Portal </p>
            </div>
            <div className='header'>


            <div className='headerContainer'>
                <CustomTooltip title={"Home Tab"} position={"top"}>

                <NavLink to="/" className={pathname == '/' ? 'selectedItem' : 'menuItem'}>
                    <HomeIcon/>
                </NavLink>
                </CustomTooltip>
                <CustomTooltip title={"User Tab"} position={"top"}>
                <NavLink to="/users" className={pathname == '/users' ? 'selectedItem' : 'menuItem'}>
                    <AssignmentIndIcon/>
                </NavLink>
                </CustomTooltip>
                <CustomTooltip title={"Profile"} position={"top"}>

                <NavLink to="/userProfile" className={pathname == '/userProfile' ? 'selectedItem' : 'menuItem'}>
                    <GroupIcon/>
                </NavLink>
                </CustomTooltip>
                <CustomTooltip title={"Approvals Tab "} position={"top"}>
                <NavLink to="/Approvals" className={pathname == '/Approvals' ? 'selectedItem' : 'menuItem'}>
                    <AppRegistrationIcon/>
                </NavLink>
                </CustomTooltip>
            </div>
            </div>
            <div className='d-flex justify-content-end align-items-center header-left-panel '>
                <span>Welcome {userName?.length>0?userName[0]+userName[1]  :""} !</span>
                <span className='icon'><NotificationsIcon/></span>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            >
                            <Avatar sx={{ width: "fit-content" ,maxHeight: "50px" ,padding:"0.5rem"}}>{(userName?.length>0?userName[0][0]+userName[1][0]:"")}</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                    <MenuItem onClick={() => handleClose('profile')}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={() => handleClose('logout')}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                    <MenuItem>
                    <ListItemIcon className='d-flex justify-content-between'>
                        <label className='mx-2'>Light</label>
                    <InputSwitch  checked={(theme === 'dark') ? true:false} onChange={(e) =>{
                        console.log(e,"99values")
                        if(e.value){
                            setTheme('dark')
                        }
                        else{
                            
                            setTheme('light')}
                        }
                } />
                <label className='mx-2'> Dark</label>
                    </ListItemIcon>
                    </MenuItem>
                </Menu>
            </div>
        </header>
        <NavBarRoutes/>
    </div>
    )
}

export default Header