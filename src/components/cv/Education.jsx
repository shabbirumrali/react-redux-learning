import React from 'react'
import { useSelector } from 'react-redux'

const Education = () => {
    const {univercity, startYear, endYear, degree, city} = useSelector(state => state.education)
  return (
    <div className='section'>
        <div className="heading">
            <h3>Education</h3>
        </div>
        <div className="content">
            <div className="information">
                <div className="period">
                    <strong> {startYear}-{endYear} - {univercity} </strong>
                    <p>{degree}</p>
                </div>
                <div className="city">
                    {city}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education