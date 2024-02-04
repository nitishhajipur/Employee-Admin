import React, { useEffect } from "react";
import CustomDialog from "../../../common/CustomDialog";
import '../../../common/styles.scss';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../../common/ReactSelect";
import { validateUserSchema } from "../../../constants/userPageContants/validationuser";
import { UserInfo } from "../../../constants/userPageContants/userDataType";
import { Departments, attendanceActionOpt, shiftopt } from "../../../constants/userPageContants/staticOptions";
import EditIcon from "@mui/icons-material/Edit";
import { FetchData } from "../../../config/Fetch";
import { CreateNewUser, GetAllUserData, updateUser } from "./actions";
import { useDispatch } from "react-redux";
import CustomTooltip from "../../../common/CustomTooltip";
import { toast } from "react-toastify";


function CreateUser(props: any) {
  const { rowData, setUserData } = props
  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()

  const onClose = () => {
    setOpen(false);
    setError(false);
  };



  const submitHandler = (values: any) => {
    console.log("17...", values);
    const data = {
      ...values,
      department: values.department.value,
      shift: values.shift.value,
      attendanceAction: values.attendanceAction.value
    }
    if (!rowData?._id) {

      dispatch(CreateNewUser(data, (response: any) => {
        if (response.status === 'success') {
          toast.success(response.message)
          dispatch(GetAllUserData((data: any) => {
            console.log('41....', data)
            setUserData(data)
            onClose();
          }))

        }
        else {
          toast.error(response.message)
        }


      }))
    }
    else {
      dispatch(updateUser(data, (response: any) => {
        if (response.status === 'success') {
          toast.success(response.message)
          dispatch(GetAllUserData((userData: any) => {
            setUserData(userData)
            onClose();
          }))

        }
        else {
          toast.error(response.message)
        }
       
      }))

    }
  };
  const openDialog = () => {
    setOpen(true);
  };



  return (
    <>

      {rowData?._id ?
        <span onClick={openDialog}><CustomTooltip title={"Edit"} position={'top'}>
          <EditIcon />
        </CustomTooltip>
        </span> :
        <button type="button" className="btn btn-primary " onClick={openDialog}>Create User</button>
      }
      <CustomDialog
        title={(rowData?._id) ? "Update User" : "Create User"}
        open={open}
        onClose={onClose}
        actionType={(rowData?._id) ? "Update" : "Submit"}
        maxWidth="md"
        fullWidth={true}
        form={"createUser"}
      // onSubmitHandler={() => { }}
      >
        <div>
          {error && (
            <p className="text-danger">
              Email id or Phone number already in use,Please try with another.
            </p>
          )}
          <Formik
            initialValues={(rowData?._id) ? rowData : UserInfo}
            validationSchema={validateUserSchema}
            onSubmit={(values: any) => submitHandler(values)}
          >
            {({ values, errors, touched, setFieldValue }) => {
              console.log('113....', values, rowData)
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
                            setFieldValue("department", e)
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
                          onChange={(e: any) => setFieldValue("shift", e)}
                        // className={((touched?.role && errors.role) ? "selecterror" : "")}
                        />
                        <ErrorMessage name="shift" component="div" className="text-danger" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="attendaceAction">Attendace action:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                          name={"attendaceAction"}
                          id={"attendaceAction"}
                          placeHolder={"Select Attendance action"}
                          options={attendanceActionOpt}
                          value={values?.attendanceAction}
                          onChange={(e: any) => setFieldValue("attendanceAction", e)}
                        // className={((touched?.role && errors.role) ? "selecterror" : "")}
                        />
                        <ErrorMessage name="attendanceAction" component="div" className="text-danger" />
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
