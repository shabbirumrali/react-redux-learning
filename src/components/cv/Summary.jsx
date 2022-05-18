import React from 'react'
import { useSelector } from 'react-redux/es/exports'

const Summary = () => {
  const { name, designation } = useSelector(state => state.summary)
  return (
    <div className='section'>
      <div className="heading">
        <h3>Summary </h3>
      </div>
      <div className="content">
        <h1>{name} </h1>
        <p>{designation}</p>
      </div>
    </div>
  )
}

export default Summary