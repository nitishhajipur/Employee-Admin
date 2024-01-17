import React from 'react'
import { useNavigate } from 'react-router-dom'
import rightPortionImage from '../../assets/leftcoverpoto.webp'
import './styles.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
const SignIn = () => {



    const sighnUp = () => {
        navigate('/signUp')

    }
    const schema = Yup.object().shape({
        userName: Yup.string().required("Please Enter UserName"),
        password: Yup.string().required("Please Enter Password")
    })

    const navigate = useNavigate()
    return (
        <>
            <div className='sighnIn'>
                <div className='authenticationContainer d-flex col-6'>
                    <div className='col-6 imgcontainer'>
                        <img src={rightPortionImage} />

                    </div>
                    <div className='col-6 credentailsContainer'>
                        <p className='primaryheader'>Welcome ! Lets get started</p>

                        <Formik
                            initialValues={{ userName: '', password: '' }}
                            validationSchema={schema}
                            onSubmit={(values: any) => {
                                navigate('/home')

                            }}>
                            {({ errors, values, touched, setFieldValue }) => {
                                <>{console.log(values, "40.....")}</>
                                return (
                                    <Form
                                        className='signInForm'>
                                        <div className='field'>

                                            <label>UserName:</label>
                                            <Field
                                                type='text'
                                                value={values?.userName}
                                                name="userName"
                                                placeholder='user name'
                                                className="form-control"
                                            />
                                            {errors?.userName && touched?.userName ? <div className='text-danger'> <ErrorMessage name='userName' /></div> : ""}
                                        </div>
                                        <div className='field'>
                                            <label>Password:</label>
                                            <Field type='password' className='form-control' name='password' placeholder='password' value={values.password} />
                                            {errors?.password && touched?.password ? <div className='text-danger'><ErrorMessage name='password' /></div> : ""}
                                        </div>
                                        <div>
                                            <button type='submit' className='login'> Sign In</button>
                                            <button type='button' onClick={sighnUp} className='sighnUp'> Sign Up</button>
                                        </div>

                                    </Form>
                                )
                            }}
                        </Formik>

                        {/* <input type='text' className='form-control' placeholder='username'></input> */}

                    </div>

                </div>

            </div>
        </>
    )

}
export default SignIn