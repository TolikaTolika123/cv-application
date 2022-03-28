import React, {useState} from 'react'
import EducationItem from '../../UI/EducationItem'
import uniqid from 'uniqid';
import EditBtn from '../../UI/EditBtn'
import CVEducationPopup from './CVEducationPopup';

const CVEducation = () => {
  const [modal, setModal] = useState(false);
  const [education, setEducation] = useState([
    {subject: 'Computer Science', level: 'bachelor', name: 'University Name Here', location: 'Location', time: '2007-2010', id: uniqid()},
    {subject: 'Computer Science', level: 'master', name: 'University Name Here', location: 'Location', time: '2010-2012', id: uniqid()},
  ]);
  
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