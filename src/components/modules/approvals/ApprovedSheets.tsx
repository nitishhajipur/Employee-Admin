import React from 'react'
import SheetsDataList from './commonComponents/TableWithSheetList'
import ApprovedData from '../../../constants/ApprovalsTabConstants/ApprovedSheets.json'
const ApprovedSheetsTab=()=>{
    return(
        <>
        <SheetsDataList title={"Approved sheets List Table"}  data={ApprovedData}/>
        </>
    )
}
export default ApprovedSheetsTab