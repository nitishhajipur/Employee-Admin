import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserData from "../../../constants/usersData.json";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
import CustomDialog from "../../../common/CustomDialog";
import '../../../common/styles.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../../common/ReactSelect";
import { useDispatch, useSelector } from "react-redux";
import LockResetIcon from '@mui/icons-material/LockReset';
import Select, { StylesConfig } from 'react-select';
import { validateUserSchema } from "./validationuser";
// import {
//   createUser,
//   fetchAllTabs,
  
// } from "../actions/actions";

// import { validateUserSchema } from "./helpers/validate";
        

function UserPage() {
  // const [userData, setUserData] = React.useState<any>([]);
  const navigate=useNavigate()
  React.useEffect(() => {
    // dispatch(getAllUserDetails((data: any) => {
    //   console.log('38.....', data)
      // setUserData(data);
    //   dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data })
    // }))
  }, []);

  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);

  };
  const  openDialog = () => {
    setOpen(true);
  };


  const actionTemplate = () => {
    return (
      <>
       <span onClick={openDialog}><EditIcon /></span> 
         |  &nbsp;
        <DeleteIcon />
      </>
    );
  };

  return (
   <>
 
<CustomDialog
        title={"Edit User"}
        open={open}
        onClose={onClose}
        actionType={"Submit"}
        maxWidth="md"
        fullWidth={true}
        form={"createUser"}
        onSubmitHandler={() => {}}
      >
        <div>
          {error && (
            <p className="text-danger">
              Email id or Phone number already in use,Please try with another.
            </p>
          )}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              contactNo: "",
              password: "",
              org_name:"",
              role: "",
              allowedModule: "",
            }}
            validationSchema={validateUserSchema}
            onSubmit={(values: any) => console.log("value...",values)}
          >
            {({ values, errors, touched, setFieldValue }) => {
              return (
                <Form id="createUser">
                  <div className="row ">
                    <>{console.log("101....", errors)}</>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">First Name:<span className="text-danger">*</span></label>
                      <div>
                        <Field
                          id="firstName"
                          name="firstName"
                          placeholder="Enter Your First Name"
                          value={values.firstName}
                          // className={((touched?.firstName && errors.firstName) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Last Name:</label>
                      <div>
                        <Field
                          id="lastName"
                          name="lastName"
                          placeholder="Enter Your Last Name"
                          value={values.lastName}
                          // className={((touched?.lastName && errors.firstName) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Email:<span className="text-danger">*</span></label>
                      <div>
                        <Field
                          id="email"
                          name="email"
                          placeholder="Enter Your email"
                          value={values.email}
                          // className={((touched?.email && errors.email) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Phone no:<span className="text-danger">*</span></label>
                      <div>
                        <Field
                          id="number"
                          type="number"
                          name="contactNo"
                          placeholder="Enter your contact number"
                          value={values.contactNo}
                          // className={((touched?.contactNo && errors.contactNo) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="contactNo"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Pasword:<span className="text-danger">*</span></label>
                      <div>
                      {/* <span> <LockResetIcon/></span> */}
                        <Field
                          id="password"
                          name="password"
                          placeholder="Enter Your Password"
                          type="password"
                          value={values.password}
                          // className={((touched?.password && errors.password) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Organization Name:<span className="text-danger">*</span></label>
                      <div>
                      {/* <span> <LockResetIcon/></span> */}
                        <Field
                          id="org_name"
                          name="org_name"
                          placeholder="Enter Your Org_name"
                          value={values.org_name}
                          // className={((touched?.password && errors.password) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="role"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    
                  </div>
                  <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Allowed Module:<span className="text-danger">*</span></label>
                      <div>
                        <Select
                          name={"allowedModule"}
                          id={"module"}
                          // placeHolder={"Allowed module"}
                          value={values.allowedModule}
                          // options={tabOptions}
                          isMulti
                          onChange={(e: any) =>
                            setFieldValue("allowedModule", e.value)
                          }
                          // className={((touched?.allowedModule && errors.allowedModule) ? "selecterror" : "")}
                        />
                        <ErrorMessage
                          name="allowedModule"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Role:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                        //   name={"role"}
                          id={"role"}
                          placeHolder={"role"}
                        //   options={rolesOption}
                          value={values.role}
                          onChange={(e: any) => setFieldValue("role", e.value)}
                          // className={((touched?.role && errors.role) ? "selecterror" : "")}
                        />
                        <ErrorMessage name="role" component="div" className="text-danger" />
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </CustomDialog> 

    <div className="">
      
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
        <Column field="role" header="Role"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="contactNo" header="Phone Number"></Column>
        <Column body={actionTemplate} header="Actions"></Column>
      </DataTable>
    </div>
    </>
  );
}

export default UserPage;
