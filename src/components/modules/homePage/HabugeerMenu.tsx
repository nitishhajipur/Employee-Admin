import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location=useLocation()
    const {pathname}=location
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='ham-memu'>
      <Button
        id="ham-bugeer-button"
        aria-controls={open ? 'hem-bugger-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        className='ham-menu-container'
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem onClick={handleClose}>
        <NavLink to="/" className={pathname == '/' ? 'selectedItem' : 'menuItem'}>
                Home
            </NavLink>
            
        </MenuItem>
        <MenuItem onClick={handleClose}>            <NavLink to="/users" className={pathname == '/users' ? 'selectedItem' : 'menuItem'}>
                Users 
            </NavLink></MenuItem>
        <MenuItem onClick={handleClose}>            <NavLink to="/userProfile" className={pathname == '/userProfile' ? 'selectedItem' : 'menuItem'}>
                My Profile
            </NavLink></MenuItem>
            <MenuItem onClick={handleClose}>           
            <NavLink to="/Approvals" className={pathname.split("/").includes('Approvals') ? 'selectedItem' : 'menuItem'}>
                Approvals
            </NavLink>
            </MenuItem>
      </Menu>
    </div>
  );
}
