import Reacrt from 'react'
import './styles.scss'
import { useNavigate } from 'react-router'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FetchData } from '../../config/Fetch'
import { toast } from 'react-toastify'
const SignUp = (props: any) => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('! Please Enter first Name'),
        lastName: Yup.string().required('! Please Enter last Name'),
        contactNo: Yup.string().required(" !Enter Phone Number"),
        email: Yup.string().required(" ! Enter  email").email(" ! Enter valid email"),
        userName: Yup.string().required(" ! Enter user name"),
        password: Yup.string().required("Enter  password"),
        confirmPassword: Yup.string().required(" Enter confirm Password").oneOf([Yup.ref('password')], "! Passwords don't match"),
        // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),


    })
    function toastAlert(props: any, callback: any) {
        if (props.status == 'error') {
            toast.error(props.message)
        } else {
            if (callback) callback()
            toast.success(props.message)
        }
    }
    const handleSubmit = (values: any) => {
        delete values.confirmPassword
        console.log('20...', values)
        FetchData({
            url: 'http://localhost:3006/api/registerAdmin',
            method: 'POST',
            data: values
        }).then((response: any) => {
            console.log('resppp', response.data)
            toastAlert(response.data, navigate("/"))
        }).catch((error: any) => {
            toast.success(error.message)
        })

    }

    return (
        <>
            <div className='sighnUpContaoner'>
                <div className='formContainer'>

                    <Formik
                        validationSchema={validationSchema}
                        initialValues={{ firstName: '', lastName: '', contactNo: '', email: "", userName: "", password: "", confirmPassword: '' }}
                        onSubmit={(values: any, { resetForm }) => {
                            handleSubmit(values)
                            resetForm();
                        }}
                        enableReinitialize
                    >
                        {({ values, errors }) => (
                            <Form>
                                <>{console.log(errors, "22...")}</>
                                <div className='registration'>
                                    <h4>Register Admin</h4>
                                    <div className='fieldContainer'>
                                        <label>User Name :</label>
                                        <Field
                                            type='text'
                                            name='userName'
                                            placeholder="Enter User name"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='userName' /></div>

                                    </div>
                                    <div className='fieldContainer'>
                                        <label>First Name :</label>
                                        <Field
                                            type='text'
                                            name='firstName'
                                            placeholder="Enter Your First name"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='firstName' /></div>
                                    </div>
                                    <div className='fieldContainer'>
                                        <label>Last Name :</label>
                                        <Field
                                            type='text'
                                            name='lastName'
                                            placeholder="Enter Your last name"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='lastName' /></div>
                                    </div>
                                    <div className='fieldContainer'>
                                        <label>Phone number :</label>
                                        <Field
                                            type='number'
                                            name='contactNo'
                                            placeholder="Enter Phone Number"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='contactNo' /></div>
                                    </div>
                                    <div className='fieldContainer'>
                                        <label>Email :</label>
                                        <Field
                                            type='email'
                                            name='email'
                                            placeholder="Enter Your MailId"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='email' /></div>

                                    </div>

                                    <div className='fieldContainer'>
                                        <label> Password:</label>
                                        <Field
                                            type='password'
                                            name='password'
                                            placeholder="Enter password"
                                            className="form-control"

                                        />
                                        <div className='text-danger'><ErrorMessage name='password' /></div>

                                    </div>
                                    <div className='fieldContainer'>
                                        <label>confirmPassword :</label>
                                        <Field
                                            type='password'
                                            name='confirmPassword'
                                            placeholder="Confirm Password"
                                            className="form-control"


                                        />
                                        <div className='text-danger'><ErrorMessage name='confirmPassword' /></div>

                                    </div>
                                </div>
                                <div className='m-2'>
                                    <button className='btn btn-outline-warning me-1' onClick={(e: any) => navigate('/')}>Back to Sign-In</button>
                                    <button type='submit' className='btn btn-success'> Register New</button>
                                </div>
                            </Form>
                        )}

                    </Formik>

                </div>
            </div>
        </>
    )

}
export default SignUp