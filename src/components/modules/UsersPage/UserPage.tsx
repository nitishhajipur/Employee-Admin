import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DeleteIcon from "@mui/icons-material/Delete";
import '../../../common/styles.scss';
import CommonSearchField from "../../../common/CommonSearchField";
import CreateUser from "./CreateUser";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DeleteUser, GetAllUserData } from "./actions";
import { appTypes } from "../../../reducer/types";
import CustomTooltip from "../../../common/CustomTooltip";
import { toast } from "react-toastify";

function UserPage() {
  const [userData, setUserData] = useState<any>([])
  const isLoaded=useRef(false)
  // const {allUserData}=useSelector((state:any)=>state.application)
  const dispatch=useDispatch()

  React.useEffect(() => {
    if(!isLoaded.current){

      dispatch(GetAllUserData((response:any)=>{
       
        setUserData(response)
        // dispatch({type:appTypes.ALL_USER_DATA,payload:response})
      }))
      isLoaded.current=true
    }
  }, []);
  const handleDeleteUser = (rowData: any) => {
    const payload={id:rowData._id}
    dispatch(DeleteUser(payload, (response: any) => {
      if(response.status === "success"){
        toast.success(response.message)

      }
      else{
        toast.error(response.message)
      }

      dispatch(GetAllUserData((data: any) => {
        setUserData(data)
      }))
    }))
  }

  const actionTemplate = (rowData: any) => {
    console.log(rowData, "12122")
    return (
      <div className="d-flex">
       <CreateUser rowData={rowData} setUserData={setUserData}/>|&nbsp;
        <CustomTooltip title={"Delete"} position={"top"}>
          <DeleteIcon onClick={() => handleDeleteUser(rowData)} />
          </CustomTooltip>
      </div>
    );
  };

  return (
    <>
      <div className="">
        <div className="d-flex justify-content-end">
          <div>
            <CommonSearchField placeholder={"Search users here..."} onChange={(e:any)=>{}}/>
          </div>
          <div style={{ padding: "0px 6px", margin: "1rem" }}>
            <CreateUser setUserData={setUserData} />
          </div>
        </div>
        <DataTable
          value={userData}
          stripedRows
          emptyMessage="No users available to display."
          tableStyle={{ minWidth: '50rem' }}
           paginator ={(userData?.length >8 )?true:false}
           rows={8}
          // rowsPerPageOptions={[5, 10, 25, 50]} 
          scrollable scrollHeight="390px"
        >
          <Column field="firstName" header="User Name"></Column>
          <Column field="department.label" header="Department"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="contactNo" header="Phone Number"></Column>
          <Column body={actionTemplate} header="Actions"></Column>
        </DataTable>
      </div>
    </>
  );
}

export default UserPage;
