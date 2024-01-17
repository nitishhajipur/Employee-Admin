import React from 'react'
import SheetsDataList from './commonComponents/TableWithSheetList'
import sumittedSheets from '../../../constants/ApprovalsTabConstants/SubmittedSheets.json'

const SubmittedSheets=()=>{
    return(
        <>
        <SheetsDataList title={"Submitted Sheeets Table List "} data={sumittedSheets}/>
        </>
    )
}
export default SubmittedSheets