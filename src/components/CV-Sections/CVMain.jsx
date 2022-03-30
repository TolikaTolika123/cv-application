import React from 'react'
import CVContact from '../CV-Main/CVContact/CVContact'
import CVEducation from '../CV-Main/CVEducation/CVEducation'
import CVSkills from '../CV-Main/CVSkills/CVSkills'
import CVExperience from '../CV-Main/CVExperience/CVExperience'

const CVMain = ({sections}) => {
  const changeableClasses = []

  if (sections.education) changeableClasses.push('education')
  if (sections.skills) changeableClasses.push('skills')
  if (sections.experience) changeableClasses.push('experience')

  return (
    <div className={`cv__main ${changeableClasses.join(' ')}`}>
      <CVContact />
      {sections.education && <CVEducation />}
      {sections.skills && <CVSkills />}
      {sections.experience && <CVExperience />}
    </div>
  )
}

export default CVMain