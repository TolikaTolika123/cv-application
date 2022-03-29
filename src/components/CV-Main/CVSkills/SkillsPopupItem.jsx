import React, { useState } from 'react'
import PopupRangeInput from '../../UI/Popup/PopupRangeInput';

const SkillsPopupItem = ({ id, elem, skills, i, removeItem }) => {
  const [skill, setSkill] = useState(elem.skill);
  const [proficiency, setProficiency] = useState(elem.proficiency);

  skills[i] = { skill, proficiency, id };

  return (
    <div className="section__popup-formItem">
      <PopupRangeInput 
        skill={skill}
        name={skill}
        value={proficiency}
        changeTitle={e => setSkill(e.target.value)}
        changeValue={e => setProficiency(e.target.value)}
      />
      <button className='section__popup-remove' type='button' onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}

export default SkillsPopupItem