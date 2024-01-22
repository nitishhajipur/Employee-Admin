import React, { useEffect, useState } from 'react'
import CustomDialog from '../../common/CustomDialog'
import { ErrorMessage, Field, Form, Formik } from 'formik'
const ForgotPassword=(props:any)=>{
    const [open,setOpen]=useState(false)
    const [informData,setInformaData]=useState({verfiyMailId:false,verifyOtp:false})
    useEffect(()=>{
        setInformaData({...informData,verfiyMailId:false,verifyOtp:false})
    },[])
    const onClose=()=>{
        setOpen(false)
    }
    const validationSchema=(values:any)=>{
        let errors:any={}
        if(!informData?.verfiyMailId  && values?.email ===''){
            errors.email="Required"
        }
        return errors


    }
    const onSubmitHandler=(values:any)=>{
        if(!informData?.verfiyMailId ){
            setInformaData({...informData,verfiyMailId:true})
            
        }
        if(!informData?.verifyOtp && informData?.verfiyMailId){
            setInformaData({...informData,verifyOtp:true})

        }
        if(informData?.verifyOtp && informData?.verfiyMailId){
            onClose()

        }
    }
    const onOpen=()=>{
        setInformaData({...informData,verfiyMailId:false,verifyOtp:false})
        setOpen(true)

    }
    return(
        <>
        <p className='text-primary' onClick={(e:any)=>{
            onOpen()
            }}>Forgot Password ?.</p>
        <CustomDialog
        form={'forgotPassword'}
        open={open}
        maxWidth={"sm"}
        fullWidth={true}
        title={"Forgot Password"}
        onClose={onClose}
        actionType={'submit'}
        >
            <Formik
            initialValues={{email:"",otp:'',newpassword:'',confirmPassWord:''}}
            onSubmit={(values:any)=>{
                onSubmitHandler(values)
            }}
            validate={(values:any)=>validationSchema(values)}
            >

                {({errors,values})=>(
                    
                    <Form id='forgotPassword'>

                    { !informData?.verfiyMailId &&
                    <div className='fieldContainer'>
                        <label htmlFor='email' className='form-label'> Registered Email:</label>
                    <Field
                    type='email'
                    name={'email'}
                    className={"form-control"}
                    placeholder={'Enter Registered Mail'}

                    >
                    </Field>
                    <ErrorMessage name='email' component={'div'} className='text-danger'/>
                        </div>}
                        {
                            informData?.verfiyMailId && !informData.verifyOtp &&
                            <div className='otp'>
                            <label htmlFor='otp' className='form-label'>  OTP :</label>
                        <Field
                        type='text'
                        name={'otp'}
                        className={"form-control"}
                        placeholder={'Enter Opt '}
    
                        >
                        </Field>
                        <ErrorMessage name='otp' component={'div'} className='text-danger'/>
                            </div>
                        }
                        {
                             informData?.verifyOtp &&
                            <div className='passwoedChange Container'>
                                <div className=''>
                                    <label htmlFor='newpassword' > Enter New Password :</label>
                                    <Field
                                    name="newpassword"
                                    type="password"
                                    className={'form-control'}
                                    placeholder={"Enter New Password"}>

                                    </Field>

                                </div>
                                <div className=''>
                                    <label htmlFor='confirmPassWord' > confirm  Password :</label>
                                    <Field
                                    name="confirmPassWord"
                                    type="password"
                                    className={'form-control'}
                                    placeholder={"Confirm New Password"}>

                                    </Field>

                                </div>

                            </div> 
                        }
                </Form>
                )}

            </Formik>
           

        </CustomDialog>
            </>

    )
}
export default ForgotPassword