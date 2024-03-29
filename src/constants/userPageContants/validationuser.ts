
import * as Yup from "yup";

export const validateUserSchema = Yup.object().shape({
  firstName: Yup.string().required("Please Enter First Name"),
  lastName:  Yup.string().required("Please Enter Last Name"),
  email: Yup.string().email('Enter a valid email').required("Please Enter Email"),
  contactNo: Yup.string().required("Please Enter Phone No"),
  password: Yup.string().required("Please Enter Password"),
  // shift: Yup.string().required("Please Select Shift Working In"),
  department: Yup.object().required('Please Select the department.'),
  shift: Yup.object().required('Please Select the shift.'),
  hourlyPay:Yup.number().required("Enter Amount Paid Hourly"),
  attendanceAction:Yup.object().required('Please select attendance action')
});
