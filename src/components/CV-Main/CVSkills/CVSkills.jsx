import React, { useContext, useState } from 'react'
import SkillItem from '../../UI/SkillItem'
import EditBtn from '../../UI/EditBtn'
import CVSkillsPopup from './CVSkillsPopup'
import { CVContext } from '../../../context'

const CVSkills = () => {
  const [modal, setModal] = useState(false);
  const {cv: {skills},  setCv:{setSkills}} = useContext(CVContext);

  const states = {  skills };
  const setStates = { setSkills };


  return (
    <div onClick={() => {setModal(true)}} className='cv__skills section'>
      <h3 className="skills__title regular__title">skills</h3>
      <ul className="cv__skills-list">
        {skills.map(skill => (
          <SkillItem key={skill.id} skill={skill.skill} proficiency={skill.proficiency} />
        ))}
      </ul>
      <EditBtn />
      <CVSkillsPopup {...{modal, setModal, states, setStates}}/>
    </div>
  )
}

export default CVSkills