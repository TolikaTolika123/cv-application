import React, { useState } from 'react'
import uniqid from 'uniqid'
import SkillItem from '../../UI/SkillItem'
import EditBtn from '../../UI/EditBtn'
import CVSkillsPopup from './CVSkillsPopup'

const CVSkills = () => {
  const [modal, setModal] = useState(false);
  const [skills, setSkills] = useState([
    { skill: 'Adobe Photoshop', proficiency: 80, id: uniqid() },
    { skill: 'Adobe InDesign', proficiency: 80, id: uniqid() },
    { skill: 'Adobe Illustartor', proficiency: 80, id: uniqid() },
    { skill: 'Microsoft Word', proficiency: 80, id: uniqid() },
    { skill: 'Wordpress', proficiency: 80, id: uniqid() },
  ])

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