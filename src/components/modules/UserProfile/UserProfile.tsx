import React from 'react'
import './styles.scss'

function UserProfile() {

  return (
    <div className='row gx-0 gy-0 user-profile-page px-5 mb-2'>
      <div className='col-12 mx-1 user-profile-top-card'>
        <div className='profileCard'>
          <div className='profilepic'>
            <span>NS</span>
          </div>
          <p className='u-Name m-0'>Gouri Shanker</p>
          <p className='m-0'> App Admin</p>
          profilecard
        </div>
      </div>
      <div className='col-12 mx-1'>
        <p>content</p>

      </div>
      
    </div>
  )
}

export default UserProfile