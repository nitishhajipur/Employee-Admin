import React, { useEffect } from 'react'
import CommonCard from '../../../common/CommonCard'
import './styles.scss'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import timeSheetsData from '../../../constants/timeSheets.json'
import { FetchData } from '../../../config/Fetch'
import { toast } from 'react-toastify'
const HomePage = () => {
    const id = sessionStorage.id;
    useEffect(() => {
        FetchData({
            url: `http://localhost:3006/api/findAdminById/${id}`,
            method: 'GET',
            data: ''
        }).then((response: any) => {
            console.log('resppp', response.data)
        }).catch((error: any) => {
            toast.error(error.message)
        })
    })
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='adminDashboard d-flex col-12'>

                    <div className='col-4 cardContainer '>
                        <CommonCard title="Total Employes Working">
                            <div>
                                <p className='m-0'> Software Department - 50 </p>
                                <p className='m-0'> HR & Finance Department - 10 </p>
                                <p className='m-0'> Sales & IT - 5</p>
                                <p className='m-0'> Marketing - 25</p>
                            </div>
                        </CommonCard>

                    </div>
                    <div className='col-4 cardContainer'>
                        <CommonCard title="Total Time Sheet Submitted">
                            <div>
                                <p className='m-0'> Software Department - 45 </p>
                                <p className='m-0'> HR & Finance Department - 4 </p>
                                <p className='m-0'> Sales & IT - 5</p>
                                <p className='m-0'> Marketing - 23</p>
                            </div>
                        </CommonCard>

                    </div>
                    <div className='col-4 cardContainer'>
                        <CommonCard title='Time Sheets To Be Approved'>
                            <div>
                                <p className='m-0'> Software Department - 3 </p>
                                <p className='m-0'> HR & Finance Department - 2 </p>
                                <p className='m-0'> Sales & IT - 0</p>
                                <p className='m-0'> Marketing - 10</p>
                            </div>
                        </CommonCard>
                    </div>
                </div>
                <div className='col-12 timesheetsTable'>
                    <CommonCard title="Recently Uploaded Time Sheets">
                        <DataTable
                            value={timeSheetsData}
                            // stripedRows 
                            emptyMessage="No timesheets  available to display."
                            tableStyle={{ minWidth: '50rem' }}
                            paginator rows={6}
                        >

                            <Column field="name" header="Employee Name"></Column>
                            <Column field="department" header="Department"></Column>
                            <Column field="SubmiteedOn" header="Submitted On"></Column>
                            <Column field="status" header="Current Status"></Column>
                            <Column header="Actions" body={() => { return (<a href="#"> View Sheet</a>) }}></Column>
                        </DataTable>
                    </CommonCard>

                </div>
            </div>

        </div>
    )
}
export default HomePage