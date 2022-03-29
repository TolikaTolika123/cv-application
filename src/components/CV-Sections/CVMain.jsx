import React from 'react'
import CVContact from '../CV-Main/CVContact/CVContact'
import CVEducation from '../CV-Main/CVEducation/CVEducation'
import CVSkills from '../CV-Main/CVSkills/CVSkills'
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