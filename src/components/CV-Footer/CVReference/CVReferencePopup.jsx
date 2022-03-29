import React, { useState } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import ReferencePopupItem from './ReferencePopupItem'
import uniqid from 'uniqid';

const CVReferencePopup = ({states, setStates}) => {
  const [references, setReferences] = useState(structuredClone(states.references));

  const removeItem = key => {
    setReferences(references.filter(item => item.id !== key));
  }

  return (
    <SectionPopup
      title='Reference'
      states={states}
      setStates={setStates}
      changedStates={{ references }}
      setChangedStates={{ setReferences }}
    >
      {references.map((elem, i) => 
        <ReferencePopupItem key={elem.id} id={elem.id} elem={elem} i={i} references={references} removeItem={removeItem} />
      )}

      <button className='section__popup-add' type='button' onClick={() => {
        setReferences([...references, { proficiency: 0, id: uniqid() }])
        }}>Add</button>
    </SectionPopup>
  )
}

export default CVReferencePopup