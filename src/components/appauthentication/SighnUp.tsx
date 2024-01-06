import Reacrt from 'react'
import './styles.css'
import { useNavigate } from 'react-router'
const SighnUp=(props:any)=>{
    const navigate=useNavigate()
    return(
        <>
        <div className='sighnUpContaoner'>
            <div className='formContainer'>
            <div className='backToSighnIn' onClick={(e:any)=>navigate('/')}>
                <span>Back to SighnIn</span>
            </div>
                <p>sighnup</p>

            </div>
        </div>
        </>
    )

}
export default SighnUp