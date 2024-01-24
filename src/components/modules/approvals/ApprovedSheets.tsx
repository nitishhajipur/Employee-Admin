import React, { useState } from 'react'
import SheetsDataList from './commonComponents/TableWithSheetList'
import ApprovedData from '../../../constants/ApprovalsTabConstants/ApprovedSheets.json'
import CommonSearchField from '../../../common/CommonSearchField'
const ApprovedSheetsTab=()=>{
    return(
        <>
        <div>
           

        <SheetsDataList title={"Approved sheets List Table"}  data={ApprovedData}/>
        </div>
        </>
    )
}
export default ApprovedSheetsTab