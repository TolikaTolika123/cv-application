import React, { useState } from 'react'
import SkillItem from '../../UI/SkillItem'
import EditBtn from '../../UI/EditBtn'
import CVSkillsPopup from './CVSkillsPopup'

const CVSkills = ({skills, setSkills}) => {
  const [modal, setModal] = useState(false);

  const states = { modal, skills };
  const setStates = { setModal, setSkills };


  return (
    <div onClick={() => {setModal(true)}} className='cv__skills section'>
      <h3 className="skills__title regular__title">skills</h3>
      <ul className="cv__skills-list">
        {skills.map(skill => (
          <SkillItem key={skill.id} skill={skill.skill} proficiency={skill.proficiency} />
        ))}
      </ul>
      <EditBtn />
      <CVSkillsPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVSkills