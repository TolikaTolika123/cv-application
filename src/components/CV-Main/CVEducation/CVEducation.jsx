import React, {useState} from 'react'
import EducationItem from '../../UI/EducationItem'
import uniqid from 'uniqid';
import EditBtn from '../../UI/EditBtn'
import CVEducationPopup from './CVEducationPopup';

const CVEducation = ({education, setEducation}) => {
  const [modal, setModal] = useState(false);
  
   const states = {modal, education};
   const setStates = {setModal, setEducation};

  return (
    <div onClick={() => {setModal(true)}} className='cv__education section'>
      <h3 className="education__title regular__title">Education</h3>
      <ul className='cv__education-list'>
        {
          education.map(item => (
            <EducationItem subject={item.subject} level={item.level} name={item.name} location={item.location} time={item.time} key={item.id}/>
          ))
        }
      </ul>
      <EditBtn />
      <CVEducationPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVEducation