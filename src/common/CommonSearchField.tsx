import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './styles.scss';

function CommonSearchField(props: any) {
    return (
        <React.Fragment>
            <div className='common-search'>
                <span><SearchIcon /> | </span>
                <input type="text" placeholder={props?.placeholder} value={props?.value} onChange={(e:any)=>{props?.onChange(e)}}/>
            </div>
        </React.Fragment>
    )
}

export default CommonSearchField