import React from 'react'
import CVContact from '../CV-Main/CVContact'
import CVEducation from '../CV-Main/CVEducation'
import CVSkills from '../CV-Main/CVSkills'
import CVExperience from '../CV-Main/CVExperience'

const CVMain = () => {
  return (
    <div className='cv__main'>
      <CVContact />
      <CVEducation />
      <CVSkills />
      <CVExperience />
    </div>
  )
}

export default CVMain