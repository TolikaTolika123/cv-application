import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import EducationPopupItem from './EducationPopupItem';
import uniqid from 'uniqid';

const CVEducationPopup = ({ states, setStates }) => {
  const [education, setEducation] = useState(structuredClone(states.education));
  useEffect(() => {
    setEducation(structuredClone(states.education));
  }, [states.education])
  const removeItem = key => {
    setEducation(education.filter(item => item.id !== key));
  }
  return (
    <SectionPopup
      title='Where did you study?'
      states={states}
      setStates={setStates}
      changedStates={{ education }}
      setChangedStates={{ setEducation }}
    >
      {education.map((elem, i) => 
        <EducationPopupItem key={elem.id} id={elem.id} elem={elem} i={i} education={education} removeItem={removeItem} />
      )}

      <button className='section__popup-add' type='button' onClick={() => {
        setEducation([...education, { subject: '', level: '', name: '', location: '', time: '', id: uniqid() }])
        }}>Add</button>
    </SectionPopup>
  )
}

export default CVEducationPopup