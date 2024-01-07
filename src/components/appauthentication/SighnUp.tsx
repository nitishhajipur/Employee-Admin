import Reacrt from 'react'
import './styles.css'
import { useNavigate } from 'react-router'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
const SighnUp=(props:any)=>{
    const navigate=useNavigate()
    const validationSchema=Yup.object().shape({
        Name:Yup.string().required('! Please Enter Full Name'),
        phoneNumber:Yup.string().required(" !Enter Phone NUmber"),
        email:Yup.string().required(" ! Enter  email").email(" ! Enter valid email"),
        organizationId:Yup.string().required(" ! Enter organizationId"),
        passWord:Yup.string().required("! Enter  passWord"),
        confirmPassword:Yup.string().required(" ! Enter confirmPassword").oneOf([Yup.ref('passWord')], "! Passwords don't match"),
  // confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords don't match").required('Confirm Password is required'),


    })
    return(
        <>
        <div className='sighnUpContaoner'>
            <div className='formContainer'>
            <div className='backToSighnIn' onClick={(e:any)=>navigate('/')}>
                <span>Back to SighnIn</span>
            </div>
                <Formik
                validationSchema={validationSchema}
                initialValues={{Name:'',phoneNumber:'',email:"",organizationId:"",passWord:"",confirmPassword:""}}
                onSubmit={(values:any,{resetForm})=>{
                    alert('user Registerd Suceesfully')
                    resetForm();
                    navigate("/")

                }}
                enableReinitialize
                 >
                    {({values})=>(
                        <Form>
                            <>{console.log(values,"22...")}</>
                            <div className='registration'>
                            <div className='fieldContainer'>
                                <label>Name :</label>
                                <Field
                                type='text'
                                name='Name'
                                placeholder="Enter Your Name"
                                className="form-control"
                                
                                />
                                <div className='text-danger'><ErrorMessage name='Name'/></div>
                            </div>
                            <div className='fieldContainer'>
                                <label>phoneNumber :</label>
                                <Field
                                type='number'
                                name='phoneNumber'
                                placeholder="Enter Phone Number"
                                className="form-control"
                                
                                />
                                <div className='text-danger'><ErrorMessage name='phoneNumber'/></div>

                            </div>
                            <div className='fieldContainer'>
                                <label>Email :</label>
                                <Field
                                type='email'
                                name='email'
                                placeholder="Enter Your MailId"
                                className="form-control"
                                
                                />
                    <div className='text-danger'><ErrorMessage name='email'/></div>

                            </div>
                            <div className='fieldContainer'>
                                <label>OrgId :</label>
                                <Field
                                type='text'
                                name='organizationId'
                                placeholder="Enter Org Id"
                                className="form-control"
                                
                                />
                             <div className='text-danger'><ErrorMessage name='organizationId'/></div>

                            </div>
                            <div className='fieldContainer'>
                                <label> Password:</label>
                                <Field
                                type='password'
                                name='passWord'
                                placeholder="Enter password"
                                className="form-control"
                                
                                />
                                <div className='text-danger'><ErrorMessage name='passWord'/></div>

                            </div>
                            <div className='fieldContainer'>
                                <label>confirmPassword :</label>
                                <Field
                                type='password'
                                name='confirmPassword'
                                placeholder="Confirm Password"
                                className="form-control"
                                
                                />
                     <div className='text-danger'><ErrorMessage name='confirmPassword'/></div>

                            </div>
                            </div>
                            <div className='submission'>
                                <button type='submit' > Register New</button>

                            </div>


                        </Form>
                    )}

                </Formik>

            </div>
        </div>
        </>
    )

}
export default SighnUp