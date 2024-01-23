import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { Employesicon } from '../../../../constants/ApprovalsTabConstants/employeicons'
import '../Styles.scss'
import CustomTooltip from '../../../../common/CustomTooltip'
import { useNavigate } from 'react-router'
const SheetsDataList=(props:any)=>{
    const {data}=props
    const navigate=useNavigate()

    const [theme,setTheme]=useState("false") 
    const renderTableBody=(rowdata:any)=>{
        return(
            <div className={`d-flex cardContainer`}>
                <div className='userData'>
                    <p className='m-0'>{rowdata.userName}</p>
                        <Employesicon />
                    <p className='m-0'> Employee Id </p>
                </div>
                <div className='sumbission'>
                    <p className='m-0'> Data OF Submison</p>
                    <p className='m-0'> {rowdata.dateOfSubmisson}</p>
                </div>
                <div className='duration'>
                    <p className='m-0'> Sheet Duration</p>
                    <p className='m-0'> {rowdata.timeSheetDuration}</p>
                </div>
                {
                    rowdata?.dateOfApproval && 
                    <div className='sumbission'>
                        <p className='m-0'> Date Of Aprroval</p>
                        <p className='m-0'> {rowdata.dateOfApproval}</p>

                    </div>

                }
                <p className='viewSheet m-0'> <a onClick={(e:any)=>{navigate(`./${rowdata.id}`)}}>ViewSheet</a></p>
            </div>
        )

    }
    return(
        <>
        <DataTable
                  value={data}
                  
                  className='col-12 sheetDetailsContainer'
                  emptyMessage="No users available to display."
                  tableStyle={{ minWidth: '50rem' }}
                   paginator ={(data.length > 8)? true :false}
                   rows={8}
                  // rowsPerPageOptions={[5, 10, 25, 50]} 
                  scrollable scrollHeight="390px">
                    <Column header={props.title} body={renderTableBody}></Column>

        </DataTable>

        </>
    )
}
export default SheetsDataList