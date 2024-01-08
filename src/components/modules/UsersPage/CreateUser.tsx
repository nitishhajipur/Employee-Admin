import React, { useEffect } from "react";
import CustomDialog from "../../../common/CustomDialog";
import '../../../common/styles.css';
  import { Formik, Field, Form, ErrorMessage } from "formik";
import ReactSelect from "../../../common/ReactSelect";
// import { rolesOption, tabOptions } from "./SelectStaticOption";
import { useDispatch, useSelector } from "react-redux";
import LockResetIcon from '@mui/icons-material/LockReset';
// import Select, { StylesConfig } from 'react-select';

// import { validateUserSchema } from "./helpers/validate";
import CommonSearchField from "../../../common/CommonSearchField";
import { validateUserSchema } from "./validationuser";

function CreateUser() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
//   const { tabs,userDetails } = useSelector((state: any) => state.application);
  const dispatch = useDispatch();
  const onClose = () => {
    setOpen(false);
    setError(false);
  };
// console.log(tabs,"29---")
//   const tabOptions = tabs[0]?.tabs?.map((item: any, index: any) => {
//     let optionObject = { label: "", value: "" };
//     optionObject.label = item;
//     optionObject.value = item;
//     return optionObject;
//   });

  const openDialog = () => {
    setOpen(true);
  };
  useEffect(() => {
    // dispatch(
    //   fetchAllTabs((data: any) => {
    //     console.log("25....", data);
    //     dispatch({ type: Actiontypes.GET_ALL_TABS, payload: data });
    //   })
    // );
  }, []);

  const submitHandler = (values: any) => {
    console.log("17...", values);
    // dispatch(
    //   createUser(values, (data: any) => {
    //     if (data.status === "success") {
    //       onClose();

    //       dispatch(
    //         getAllUserDetails((data: any) => {
              
    //           dispatch({ type: Actiontypes.GET_ALL_USER_DATA, payload: data });
    //         })
    //       );
    //     } else if (data.status === "error") {
    //       setError(true);
    //     }
    //   })
    // );
  };

  return (
    <>
      {/* <div className="d-flex justify-content-end my-2">
        <button type="button" className="btn btn-primary " onClick={openDialog}>Create User</button>
      </div> */}
      <div className="d-flex justify-content-end">
        <div>
          <CommonSearchField placeholder={"Search users here..."} />
        </div>
        <div style={{ padding: "0px 6px", margin: "1rem" }}>
          <button type="button" className="btn btn-primary " onClick={openDialog}>Create User</button>
        </div>
      </div>
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
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              contactNo: "",
              password: "",
            //   orgName: userDetails.organization,
              role: "",
              allowedModule: [],
            }}
            validationSchema={validateUserSchema}
            onSubmit={(values: any) => submitHandler(values)}
          >
            {({ values, errors, touched, setFieldValue }) => {
              console.log('113....',values)
              return (
                <Form id="createUser">
                  <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Organization Name:<span className="text-danger">*</span></label>
                      <div>
                        {/* <span> <LockResetIcon/></span> */}
                        <Field
                          id="org_name"
                          name="org_name"
                          placeholder="Enter Your Org_name"
                        //   value={values.orgName}
                          disabled
                          // className={((touched?.password && errors.password) ? "inputerror" : "")}
                          className="form-control form-control-md text-field"
                        />
                        {/* <ErrorMessage
                          name="role"
                          component="div"
                          className="text-danger"
                        /> */}
                      </div>
                    </div>
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

                  </div>
                  <div className="row ">
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


                  </div>
                  <div className="row ">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Allowed Module:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                          name={"allowedModule"}
                          id={"module"}
                          placeHolder={"Allowed module"}
                          value={values.allowedModule}
                        //   options={tabOptions}
                          isMulti={true}
                          
                          onChange={(e: any) =>
                            {console.log('249...',e)
                            setFieldValue("allowedModule", e)}
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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <label htmlFor="firstName">Role:<span className="text-danger">*</span></label>
                      <div>
                        <ReactSelect
                          name={"role"}
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
    </>
  );
}

export default CreateUser;
