import React from 'react'
import CVContact from '../CV-Main/CVContact/CVContact'
import CVEducation from '../CV-Main/CVEducation/CVEducation'
import CVSkills from '../CV-Main/CVSkills/CVSkills'
import CVExperience from '../CV-Main/CVExperience/CVExperience'

const CVMain = ({sections, cv, setCv}) => {
  const changeableClasses = []

  if (sections.education) changeableClasses.push('education')
  if (sections.skills) changeableClasses.push('skills')
  if (sections.experience) changeableClasses.push('experience')

  return (
    <div className={`cv__main ${changeableClasses.join(' ')}`}>
      <CVContact contact={cv.contact} setContact={setCv.setContact}/>
      {sections.education && <CVEducation  education={cv.education} setEducation={setCv.setEducation}/>}
      {sections.skills && <CVSkills skills={cv.skills} setSkills={setCv.setSkills} />}
      {sections.experience && <CVExperience experienceList={cv.experienceList} setExperienceList={setCv.setExperienceList} />}
    </div>
  )
}

export default CVMain