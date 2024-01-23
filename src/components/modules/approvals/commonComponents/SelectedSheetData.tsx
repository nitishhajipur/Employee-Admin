import {  KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router'
const SelectedSheetData=(props:any)=>{
    const navigate=useNavigate()
    return(
        <>
        <div className='sheetDataContainer '>
            <div className='backToDashBoard d-flex justify-content-end mx-3'>
                <span onClick={(e:any)=>{navigate("/Approvals")}}>
                    <KeyboardDoubleArrowLeft/>
                Back To Dashboard
                    </span>
            </div>

        </div>
        </>
    )
}
export default SelectedSheetData