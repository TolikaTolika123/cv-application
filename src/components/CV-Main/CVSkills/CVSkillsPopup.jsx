import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import SkillsPopupItem from './SkillsPopupItem';
import uniqid from 'uniqid';

const CVSkillsPopup = ({modal, setModal, states, setStates}) => {
  const [skills, setSkills] = useState(structuredClone(states.skills));

  useEffect(() => {
    setSkills(structuredClone(states.skills));
  }, [states.skills]);
  

  const removeItem = key => {
    setSkills(skills.filter(item => item.id !== key));
  }
  return (
    <SectionPopup
      title='What are your stand-out skills?'
      {...{states, setStates, modal, setModal}}
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