import React, { useState } from 'react'
import './styles.scss'

function UserProfile() {
  const [src,setSrc]=useState('https://static.tnn.in/thumb/msid-107500992,thumbsize-13174,width-1280,height-720,resizemode-75/107500992.jpg')

  const uploadProfilePic=(files:any)=>{
    // alert("image upload in process")
    setSrc('https://i.pinimg.com/564x/ac/55/47/ac5547f0bd276cbbad2fb5aa6cf8cf34.jpg')
    console.log(files,"8files")
  }
  return (
    <div className='row d-block gx-0 gy-0 user-profile-page px-5 mb-2'>
      <div className='col-12 mx-1 user-profile-top-card'>
        <div className='profileCard'>
          <div className='pic-container'>
          <div className='profilepic'>
            <img src={src} width={"100%"} height={"100%"} />
            {/* <span>NS</span> */}
          </div>
          <label className='imgoffset' htmlFor="files">
            <span>Edit Profile
            <input type="file" id="files" accept={'image/*'} style={{visibility:"hidden"}} onChange={(e:any)=>{uploadProfilePic(e)}} />
            </span>
          </label>
          </div>
          <p className='u-Name m-0'>Gouri Shanker</p>
          <p className='m-0'> App Admin</p>        
          </div>
      </div>
      <div className='col-12 gap -3 mt-1 b-container justify-content-between d-flex'>
        <div className='left-container mx-2'>
          <p>Left Portion</p>
        </div>
        <div className='right-container'>
          <p>Right Portion</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile