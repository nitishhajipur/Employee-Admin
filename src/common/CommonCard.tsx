import React, { ReactNode } from 'react';
import './styles.scss';

export interface cardProps {
    className?: string
    children: ReactNode
    title?:string
}

function CommonCard(props: any) {
    return (
        <React.Fragment>
            <div className={props.className ? props.className : 'Common-card'}>
                {
                    props?.title &&

                    <div className='card-title'>
                   <span> {props.title}</span>
                </div>
                }
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