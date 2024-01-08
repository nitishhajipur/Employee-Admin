import React from "react";
import * as Yup from "yup";

export const validateUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Please Enter First Name"),
  lastName:  Yup.string().required("Please Enter Last Name"),
  email: Yup.string().email('Enter a valid email').required("Please Enter Email"),
  contactNo: Yup.string().required("Please Enter Phone No"),
  password: Yup.string().required("Please Enter Password"),
  role: Yup.string().required("Please Enter Role"),
  allowedModule: Yup.array().required("Please select modules"),
});
