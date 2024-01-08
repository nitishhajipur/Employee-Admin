import React, { ReactNode } from 'react';
import './styles.css';

export interface cardProps {
    className?: string
    children: ReactNode
}

function CommonCard(props: any) {
    return (
        <React.Fragment>
            <div className={props.className ? props.className : 'Common-card'}>
                <div className='card-title'>
                    {props.title}
                </div>
                <div className='card-body'>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default CommonCard