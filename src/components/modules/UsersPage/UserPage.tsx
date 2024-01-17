import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DeleteIcon from "@mui/icons-material/Delete";
import '../../../common/styles.css';
import CommonSearchField from "../../../common/CommonSearchField";
import CreateUser from "./CreateUser";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';

function UserPage() {
  const [userData, setUserData] = useState<any>([])

  React.useEffect(() => {
    const url = "http://localhost:3006/api/getAllUserDetails";
    getAllUserDetails(url, (data: any) => {
      console.log('41....', data)
      setUserData(data)
    })
  }, []);

  function getAllUserDetails(url: any, callback: any) {
    axios.get(url)
      .then((response) => {
        console.log(response);
        if (callback) { callback(response.data) }
      }).catch((error: any) => {

        console.log(error)

      });
  }
  function deleteUser(url: any, callback: any) {
    axios.delete(url)
      .then((response) => {
        console.log(response);
        if (callback) { callback(response.data) }
      }).catch((error: any) => {

        console.log(error)

      });
  }

  const handleDeleteUser = (rowData: any) => {
    const url = `http://localhost:3006/api/deleteUserById/${rowData._id}`
    deleteUser(url, (data: any) => {
      console.log('65...', data)
      const url = "http://localhost:3006/api/getAllUserDetails"
      getAllUserDetails(url, (data: any) => {
        console.log('41....', data)
        setUserData(data)
      })
    })
  }

  const actionTemplate = (rowData: any) => {
    console.log(rowData, "12122")
    return (
      <div className="d-flex">
        <EditIcon />|&nbsp;
        <DeleteIcon onClick={() => handleDeleteUser(rowData)} />
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
            <CreateUser />
          </div>
        </div>
        <DataTable
          value={userData}
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
