import React from 'react'
import './styles.scss'

function UserProfile() {

  const uploadProfilePic=()=>{
    alert("image upload in process")
  }
  return (
    <div className='row d-block gx-0 gy-0 user-profile-page px-5 mb-2'>
      <div className='col-12 mx-1 user-profile-top-card'>
        <div className='profileCard'>
          <div className='pic-container'>
          <div className='profilepic'>
            <img src="https://static.tnn.in/thumb/msid-107500992,thumbsize-13174,width-1280,height-720,resizemode-75/107500992.jpg" width={"100%"} height={"100%"} />
            {/* <span>NS</span> */}
          </div>
          <label className='imgoffset' htmlFor="files">
            <span>Edit Profile
            <input type="file" id="files" accept={'image/*'} style={{visibility:"hidden"}} onChange={uploadProfilePic} />
            </span>
          </label>
          </div>
          <p className='u-Name m-0'>Gouri Shanker</p>
          <p className='m-0'> App Admin</p>        
          </div>
      </div>
      <div className='col-12 gap -3 mt-3 b-container justify-content-between d-flex'>
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