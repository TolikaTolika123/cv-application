import React, {useState} from 'react'
import uniqid from 'uniqid'
import ReferenceItem from '../../UI/ReferenceItem'
import EditBtn from '../../UI/EditBtn'
import CVReferencePopup from './CVReferencePopup'

const CVReference = () => {
  const [modal, setModal] = useState(false)
  const [references, setReferences] = useState([
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com', id: uniqid()},
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com', id: uniqid()},
  ]);

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