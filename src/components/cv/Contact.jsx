import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const {number, email, address} = useSelector(state => state.contact)
  // console.log(address);
  return (
    <div className='section'>
        <div className="heading">
            <h3>Contact</h3>
        </div>
        <div className="content">
            <ul>
                <li><p> { address.houseName }, { address.area } {address.colony}, {address.city}({address.pinCode})</p></li>
                <li><p> { email }</p></li>
                <li><p> { number }</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Contact