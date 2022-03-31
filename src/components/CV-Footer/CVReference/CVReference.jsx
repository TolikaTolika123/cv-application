import React, {useState} from 'react'
import ReferenceItem from '../../UI/ReferenceItem'
import EditBtn from '../../UI/EditBtn'
import CVReferencePopup from './CVReferencePopup'

const CVReference = ({references, setReferences}) => {
  const [modal, setModal] = useState(false)

  const states = {modal, references};
  const setStates = {setModal, setReferences}

  return (
    <div onClick={() => {setModal(true)}} className='cv__reference section'>
      <h3 className="reference__title regular__title">Reference</h3>
      <div className="cv__reference-content">
        {references.map(item => (
          <ReferenceItem key={item.id} name={item.name} position={item.position} phone={item.phone} email={item.email}/>
        ))}
      </div>
      <EditBtn />
      <CVReferencePopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVReference