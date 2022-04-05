import React, { useContext, useState } from 'react'
import EducationItem from '../../UI/EducationItem'
import EditBtn from '../../UI/EditBtn'
import CVEducationPopup from './CVEducationPopup';
import { CVContext } from '../../../context';

const CVEducation = () => {
  const [modal, setModal] = useState(false);
  const {cv: {education},  setCv:{setEducation}} = useContext(CVContext);

  const states = { education };
  const setStates = { setEducation };

  return (
    <div onClick={() => { setModal(true) }} className='cv__education section'>
      <h3 className="education__title regular__title">Education</h3>
      <ul className='cv__education-list'>
        {
          education.map(item => (
            <EducationItem subject={item.subject} level={item.level} name={item.name} location={item.location} time={item.time} key={item.id} />
          ))
        }
      </ul>
      <EditBtn />
      <CVEducationPopup {...{modal, setModal, states, setStates}} />
    </div>
  )
}

export default CVEducation