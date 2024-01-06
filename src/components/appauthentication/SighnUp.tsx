import Reacrt from 'react'
import './styles.css'
import { useNavigate } from 'react-router'
import { Field, Form, Formik } from 'formik'
const SighnUp=(props:any)=>{
    const navigate=useNavigate()
    return(
        <>
        <div className='sighnUpContaoner'>
            <div className='formContainer'>
            <div className='backToSighnIn' onClick={(e:any)=>navigate('/')}>
                <span>Back to SighnIn</span>
            </div>
                <Formik
                initialValues={{Name:'',phoneNumber:'',email:"",organizationId:"",passWord:"",confirmPassword:""}}
                onSubmit={(values:any)=>{

                }}
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
                            </div>
                            <div className='fieldContainer'>
                                <label>phoneNumber :</label>
                                <Field
                                type='number'
                                name='phoneNumber'
                                placeholder="Enter Phone Number"
                                className="form-control"
                                
                                />
                            </div>
                            <div className='fieldContainer'>
                                <label>Email :</label>
                                <Field
                                type='email'
                                name='email'
                                placeholder="Enter Your MailId"
                                className="form-control"
                                
                                />
                            </div>
                            <div className='fieldContainer'>
                                <label>OrgId :</label>
                                <Field
                                type='text'
                                name='organizationId'
                                placeholder="Enter Org Id"
                                className="form-control"
                                
                                />
                            </div>
                            <div className='fieldContainer'>
                                <label> Password:</label>
                                <Field
                                type='password'
                                name='passWord'
                                placeholder="Enter password"
                                className="form-control"
                                
                                />
                            </div>
                            <div className='fieldContainer'>
                                <label>confirmPassword :</label>
                                <Field
                                type='password'
                                name='confirmPassword'
                                placeholder="Confirm Password"
                                className="form-control"
                                
                                />
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