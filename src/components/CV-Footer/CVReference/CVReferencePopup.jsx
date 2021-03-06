import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import ReferencePopupItem from './ReferencePopupItem'
import uniqid from 'uniqid';

const CVReferencePopup = ({modal, setModal, states, setStates}) => {
  const [references, setReferences] = useState(structuredClone(states.references));

  useEffect(() => {
    setReferences(structuredClone(states.references))
  }, [states.references])

  const removeItem = key => {
    setReferences(references.filter(item => item.id !== key));
  }

  return (
    <SectionPopup
      title='Reference'
      {...{states, setStates, modal, setModal}}
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