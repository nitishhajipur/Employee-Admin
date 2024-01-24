import {  KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, QuestionAnswer } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import '../Styles.scss'
import PopOverContainer from '../../../../common/PopoverContainer'
import { useSelector } from 'react-redux'
const SelectedSheetData=(props:any)=>{
    const navigate=useNavigate()
    const [anchor,setAnchor]=useState<any>(null)
    const {currentSheetDetails}=useSelector((state:any)=>state.application)
        
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(event.currentTarget);
    };
    const onClose=()=>{
        setAnchor(null)
    }
    return(
        <>
        <div className='sheetDetailing col-12'>
            <div className='backToDashBoard d-flex justify-content-end mx-3'>
                <span onClick={(e:any)=>{navigate("/Approvals")}}>
                    <KeyboardDoubleArrowLeft/>Back To Dashboard
                </span>
            </div>
            <div className={'detailsSheet'}>
                <p className='SheetHeader'> Weely Time-Sheet of 12/04/24  to 18/04/24</p>
               <div className={`viewComentsIcon ${(anchor !==null ? 'active':'hide' )}`} onClick={(e:any)=>handleClick(e)}>
                <QuestionAnswer  />
                </div> 
                <PopOverContainer anchor={anchor} setAnchor={setAnchor} onClose={onClose}>
                    <p>Commets On Current Sheet</p>
                </PopOverContainer>

            </div>


        </div>
        </>
    )
}
export default SelectedSheetData