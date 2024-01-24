import { Popover, Typography } from '@mui/material'
import React from 'react'
import { Button } from 'react-bootstrap'
const PopOverContainer=(props:any)=>{
    const {anchor,children} = props;
    const open = Boolean(anchor);
    const id = open ? 'simple-popover' : undefined;
  
return(
    <>
    <div>
<Popover
  id={id}
  open={open}
  anchorEl={anchor}
  onClose={props?.onClose}
  anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    className='my-3'
>
  <Typography sx={{ p: 2 }} >
  {children}
    </Typography>
</Popover>
    </div>
    </>
    )
}
export default PopOverContainer