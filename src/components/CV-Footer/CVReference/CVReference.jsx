import React, {useState, useContext} from 'react'
import ReferenceItem from '../../UI/ReferenceItem'
import EditBtn from '../../UI/EditBtn'
import CVReferencePopup from './CVReferencePopup'
import { CVContext } from '../../../context'

const CVReference = () => {
  const [modal, setModal] = useState(false)
  const {cv: {references},  setCv:{setReferences}} = useContext(CVContext);

  const states = { references };
  const setStates = { setReferences }

  return (
    <div onClick={() => {setModal(true)}} className='cv__reference section'>
      <h3 className="reference__title regular__title">Reference</h3>
      <div className="cv__reference-content">
        {references.map(item => (
          <ReferenceItem key={item.id} name={item.name} position={item.position} phone={item.phone} email={item.email}/>
        ))}
      </div>
      <EditBtn />
      <CVReferencePopup {...{modal, setModal, states, setStates}}/>
    </div>
  )
}

export default CVReference