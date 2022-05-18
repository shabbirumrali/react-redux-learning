import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { description } = useSelector(state => state.profile)
  return (
    <div className='section'>
        <div className="heading">
            <h3>Profile</h3>
        </div>
        <div className="content">
            <p>{ description } </p>
        </div>
    </div>
  )
}

export default Profile