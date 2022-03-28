import React, { useState } from 'react'
import SectionPopup from '../../UI/SectionPopup'
import FormItem from '../../UI/FormItem';
import uniqid from 'uniqid';

const CVEducationPopup = ({ states, setStates }) => {
  const [education, setEducation] = useState(structuredClone(states.education));
  console.log(states.education[0])
  console.log(education[0])
  const removeItem = key => {
    setEducation(education.filter(item => {
      console.log(key);
      console.log(item.id)
      return item.id !== key
    }))
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
        <FormItem key={elem.id} elem={elem} i={i} education={education} removeItem={removeItem} />
      )}

      <button type='button' onClick={() => setEducation([...education, { subject: '', level: '', name: '', location: '', time: '' }])}>Add</button>
    </SectionPopup>
  )
}

export default CVEducationPopup