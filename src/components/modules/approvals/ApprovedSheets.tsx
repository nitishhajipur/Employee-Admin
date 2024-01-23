import React, { useState } from 'react'
import SheetsDataList from './commonComponents/TableWithSheetList'
import ApprovedData from '../../../constants/ApprovalsTabConstants/ApprovedSheets.json'
import CommonSearchField from '../../../common/CommonSearchField'
const ApprovedSheetsTab=()=>{
    const [serachValue,setSearchValue]=useState('')
    return(
        <>
        <div>
            <div>
                

                <CommonSearchField placeholder={"Search By Empoyee Id "} value={serachValue} onChange={(e:any)=>{setSearchValue(e.target.value)}}></CommonSearchField>
            </div>

        <SheetsDataList title={"Approved sheets List Table"}  data={ApprovedData}/>
        </div>
        </>
    )
}
export default ApprovedSheetsTab