import React, { useState } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import SkillsPopupItem from './SkillsPopupItem';
import uniqid from 'uniqid';

const CVSkillsPopup = ({states, setStates}) => {
  const [skills, setSkills] = useState(structuredClone(states.skills));

  const removeItem = key => {
    setSkills(skills.filter(item => item.id !== key));
  }
  return (
    <SectionPopup
      title='Where did you study?'
      states={states}
      setStates={setStates}
      changedStates={{ skills }}
      setChangedStates={{ setSkills }}
    >
      {skills.map((elem, i) => 
        <SkillsPopupItem key={elem.id} id={elem.id} elem={elem} i={i} skills={skills} removeItem={removeItem} />
      )}

      <button className='section__popup-add' type='button' onClick={() => {
        setSkills([...skills, { proficiency: 0, id: uniqid() }])
        }}>Add</button>
    </SectionPopup>
  )
}

export default CVSkillsPopup