import React from 'react'
import { useSelector } from 'react-redux'

const Employment = () => {
    const {company} = useSelector(state => state.employment)
    const {startYear, endYear, designation, city, companyName} = company
    return (
        <div className='section'>
            <div className="heading">
                <h3>Employment</h3>
            </div>
            <div className="content">
                <div className="information">
                    <div className="period">
                        <strong>{startYear} - {endYear} -- {designation} at {companyName} </strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit natus quo reprehenderit harum dolorem, numquam beatae ipsam atque commodi tempore, ea quae dicta consectetur soluta quam iste. Voluptatum, illo inventore.</p>
                    </div>
                    <div className="city">
                        {city}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Employment