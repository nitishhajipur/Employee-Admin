
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { appTypes } from '../reducer/types';

const  ConfirmationAlert=()=> {
    const {modal}=useSelector((state:any)=>state.application)
    const dispatch=useDispatch()

    const accept = () => {
        // setVisible(false)
        modal?.onOk()
        dispatch({type:appTypes.DISPATCH_ALERT,payload:{show:false,title:"",onOk:()=>{alert("hii")},message:"",onCancel:()=>{return null}}})
        // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        modal?.onCancel()
        dispatch({type:appTypes.DISPATCH_ALERT,payload:{show:false,title:"",onOk:()=>{alert("hii")},message:"",onCancel:()=>{return null}}})

        
        // setVisible(false)
        // toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <><div>
            <ConfirmDialog   content={null}
 visible={modal?.show}  message={modal?.message} 
                header={modal?.title}  accept={accept} reject={reject} ></ConfirmDialog>
                </div>
        </>
    )
}
export default ConfirmationAlert
        