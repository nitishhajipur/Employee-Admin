import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip=(props:any)=> {
  return (
    <Tooltip title={props?.title} arrow placement={props?.position}>
      {props.children}
    </Tooltip>
  );
}
export default CustomTooltip