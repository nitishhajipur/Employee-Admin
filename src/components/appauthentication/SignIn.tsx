import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rightPortionImage from '../../assets/leftcoverpoto.webp'
import './styles.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FetchData } from '../../config/Fetch'
import { toast } from 'react-toastify'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ForgotPassword from './ForgotPassWord'
import { useDispatch } from 'react-redux'
import { appTypes } from '../../reducer/types'
import img from '../../assets/login-page.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
const SignIn = () => {
    const dispatch=useDispatch()
    const [showPassWord,setShowPassword]=useState(false)

    const sighnUp = () => {
        navigate('/signUp')

    }
    const togglePassword=()=>{
        setShowPassword(!showPassWord)
    }
    const schema = Yup.object().shape({
        userName: Yup.string().required("Please Enter UserName"),
        password: Yup.string().required("Please Enter Password")
    })

    const navigate = useNavigate()
    return (
        <>
            <div className='sighnIn row'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 loginleftContainer'>
                <div>
                     
            <p className='primaryheader'>Welcome ! Lets get started</p>
                <img src={img} alt= "login png" className='im-fluid' />
                </div>

            </div>
              
             <div  className='authenticationContainer col-lg-7 col-md-7 col-sm-12 col-xs-12 '>

                   <div className='contentContainer'>
                        <p className='primaryheader'> Sighn In </p>
                        <Formik
                            initialValues={{ userName: '', password: '' }}
                            validationSchema={schema}
                            onSubmit={(values: any) => {
                                FetchData({
                                    url: 'http://localhost:3006/api/validateAdmin',
                                    method: 'POST',
                                    data: values
                                }).then((response: any) => {
                                    if(response.data?.status === 'error'){
                                        toast.error(response.data.message)
                                    }else{
                                        sessionStorage.setItem('id',response.data.id)                                      
                                        dispatch({type:appTypes.IS_AUTHENTICATED,payload:true})
                                        navigate('/')
                                    }
                                }).catch((error: any) => {
                                    toast.error(error.message)
                                })

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
                                                Required
                                            />
                                            {errors?.userName && touched?.userName ? <div className='text-danger'> <ErrorMessage name='userName' /></div> : ""}
                                        </div>
                                        <div className='field'>
                                            <label>Password:</label>
                                            <div className='password-container'>
                                                
                                            <Field type={(!showPassWord)?"password":"text"} Required className='form-control' name='password' placeholder='password' value={values.password} 
                                            onChange={(e:any)=>{
                                                if(!e.target.value && showPassWord){setShowPassword(false)}
                                                setFieldValue("password",e.target.value)
                                            }} />
                                            {values.password &&
                                             <span onClick={togglePassword}>{!showPassWord ? <VisibilityIcon/> :<VisibilityOffIcon/>}</span>}
                                            </div>
                                        </div>
                                            {errors?.password && touched?.password ? <div className='text-danger'><ErrorMessage name='password' /></div> : ""}
                                        <div>
                                            <button type='submit' className='login'> Sign In</button>
                                            <p className='singhUp'> Don't Have Account ? <span onClick={sighnUp}> Register Now </span></p>
                                            {/* <button type='button' onClick={sighnUp} className='sighnUp'> Sign Up</button> */}
                                        </div>
                                        <div>
                                            {/* <ForgotPassword/> */}
                                            <p className='forgotPassword' onClick={(e:any)=>{navigate('/forgotPassword')    }}>Forgot Password ?.</p>
                                        </div>

                                    </Form>
                                )
                            }}
                        </Formik>
                        </div>
                        </div>

                        {/* <input type='text' className='form-control' placeholder='username'></input> */}

            </div>
        </>
    )

}
export default SignIn