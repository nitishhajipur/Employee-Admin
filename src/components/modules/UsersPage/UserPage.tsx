import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserData from "../../../constants/usersData.json";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";
import CustomDialog from "../../../common/CustomDialog";
import '../../../common/styles.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../../common/ReactSelect";
import { useDispatch, useSelector } from "react-redux";
import LockResetIcon from '@mui/icons-material/LockReset';
import Select, { StylesConfig } from 'react-select';
import { validateUserSchema } from "../../../constants/userPageContants/validationuser";
import CommonSearchField from "../../../common/CommonSearchField";
import CreateUser from "./CreateUser";
import { Departments, shiftopt } from "../../../constants/userPageContants/staticOptions";
import { UserInfo } from "../../../constants/userPageContants/userDataType";


function UserPage() {

  const navigate = useNavigate()
  React.useEffect(() => {

  }, []);

 

 



  const actionTemplate = (rowData:any) => {
    console.log(rowData,"12122")
    return (
      <div className="d-flex">
      <CreateUser rowData={rowData}/>|&nbsp;
       <DeleteIcon />
      </div>
    );
  };

  return (
    <>
    
          <div className="">
        <div className="d-flex justify-content-end">
          <div>
            <CommonSearchField placeholder={"Search users here..."} />
          </div>
          <div style={{ padding: "0px 6px", margin: "1rem" }}>
            <CreateUser/>
          </div>
        </div>

        <DataTable
          value={UserData}
          stripedRows
          emptyMessage="No users available to display."
          tableStyle={{ minWidth: '50rem' }}
          // paginator 
          // rows={5}
          // rowsPerPageOptions={[5, 10, 25, 50]} 
          scrollable scrollHeight="390px"
        >
          <Column field="firstName" header="User Name"></Column>
          <Column field="department" header="Department"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="contactNo" header="Phone Number"></Column>
          <Column body={actionTemplate} header="Actions"></Column>
        </DataTable>
      </div>
    </>
  );
}

export default UserPage;
