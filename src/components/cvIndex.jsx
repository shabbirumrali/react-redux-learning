import React from 'react'
import Contact from './cv/Contact'
import Education from './cv/Education'
import Employment from './cv/Employment'
import Profile from './cv/Profile'
import SoftSkill from './cv/SoftSkill'
import Summary from './cv/Summary'
import TechnicalSkills from './cv/TechnicalSkills'

const CvIndex = () => {
  return (
    <div>
        <Summary />
        <Contact />
        <Profile />
        <Education />
        <Employment />
        <SoftSkill />
        <TechnicalSkills />
    </div>
  )
}

export default CvIndex