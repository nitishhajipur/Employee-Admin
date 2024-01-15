import React, { useEffect } from "react";
import CustomDialog from "../../../common/CustomDialog";
import '../../../common/styles.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../../common/ReactSelect";
import axios from 'axios';
import { validateUserSchema } from "../../../constants/userPageContants/validationuser";
import { UserInfo } from "../../../constants/userPageContants/userDataType";
import { Departments, shiftopt } from "../../../constants/userPageContants/staticOptions";

function CreateUser(props: any) {

  const { open, setOpen } = props
  const [error, setError] = React.useState(false);

  const onClose = () => {
    setOpen(false);
    setError(false);
  };

  function Fetch(param: any,callback:any) {
    axios.post(param.url, param.values)
      .then((response) => {
        console.log(response);
        if(callback){callback(response.status)}
      }).catch((error: any) => {

        console.log(error)

      });
  }

  const submitHandler = (values: any) => {
    console.log("17...", values);
    const url = "http://localhost:3006/api/createUser"
    const payload={url:url,values:values}
    Fetch(payload,(data:any)=>{
      onClose();
    })
  };



  return (
    <>
      {/* <div className="d-flex justify-content-end my-2">
        <button type="button" className="btn btn-primary " onClick={openDialog}>Create User</button>
      </div> */}
      {/* <div className="d-flex justify-content-end">
        <div>
          <CommonSearchField placeholder={"Search users here..."} />
        </div>
        <div style={{ padding: "0px 6px", margin: "1rem" }}>
          <button type="button" className="btn btn-primary " onClick={openDialog}>Create User</button>
        </div>
      </div> */}
      <CustomDialog
        title={"Create User"}
        open={open}
        onClose={onClose}
        actionType={"Submit"}
        maxWidth="md"
        fullWidth={true}
        form={"createUser"}
        onSubmitHandler={() => { }}
      >
        <div>
          {error && (
            <p className="text-danger">
              Email id or Phone number already in use,Please try with another.
            </p>
          )}
          <Formik
            initialValues={UserInfo}
            validationSchema={validateUserSchema}
            onSubmit={(values: any) => submitHandler(values)}
          >
            {({ values, errors, touched, setFieldValue }) => {
              console.log('113....', values)
              return (
                <Form id="createUser">
                  <div className="row ">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="hourlyPay">Hourly Pay:<span className="text-danger">*</span></label>
                      <div>
                        <Field
                          id="hourlyPay"
                          type="number"
                          name="hourlyPay"
                          placeholder="Enter Amount"
                          value={values.hourlyPay}
                          // className={((touched?.contactNo && errors.contactNo) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                      </div>
                      <ErrorMessage
                        name="hourlyPay"
                        component="div"
                        className="text-danger"
                      />
                    </div>


                  </div>
                  <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Employee Id:<span className="text-danger">*</span></label>
                      <div>
                        {/* <span> <LockResetIcon/></span> */}
                        <Field
                          id="password"
                          name="employeeId"
                          placeholder="Enter Employee Id"
                          type="text"
                          value={values.employeeId}
                          // className={((touched?.password && errors.password) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        <ErrorMessage
                          name="employeeId"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="department">Department:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                          name={"department"}
                          id={"department"}
                          placeHolder={"department"}
                          value={values.department}
                          options={Departments}
                          isMulti={false}

                          onChange={(e: any) => {
                            console.log('249...', e)
                            setFieldValue("department", e.value)
                          }
                          }
                        // className={((touched?.allowedModule && errors.allowedModule) ? "selecterror" : "")}
                        />
                        <ErrorMessage
                          name="department"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="shiftDetails">Shift Details:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                          name={"shift"}
                          id={"shiftDetails"}
                          placeHolder={"Select Shift"}
                          options={shiftopt}
                          value={values.shift}
                          onChange={(e: any) => setFieldValue("shift", e.value)}
                        // className={((touched?.role && errors.role) ? "selecterror" : "")}
                        />
                        <ErrorMessage name="shift" component="div" className="text-danger" />
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </CustomDialog>
    </>
  );
}

export default CreateUser;
