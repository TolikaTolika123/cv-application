import React, {useContext, useState} from 'react'
import ExperienceItem from '../../UI/ExperienceItem'
import uniqid from 'uniqid';
import EditBtn from '../../UI/EditBtn'
import CVExperiencePopup from './CVExperiencePopup';
import { CVContext } from '../../../context';

const CVExperience = () => {
  const [modal, setModal] = useState(false);
  const {cv: {experienceList},  setCv:{setExperienceList}} = useContext(CVContext);
  
  const states = {  experienceList };
  const setStates = { setExperienceList };
  return (
    <div onClick={() => {setModal(true)}} className='cv__experience section'>
      <h3 className="experience__title regular__title">Work experience</h3>
      <ul className='cv__experience-list'>
        {experienceList.map(item => (
          <ExperienceItem
            key={uniqid()}
            profession={item.profession}
            name={item.name}
            location={item.location}
            time={item.time}
            about={item.about}
          />
        ))}
      </ul>
      <EditBtn />
      <CVExperiencePopup {...{modal, setModal, states, setStates}}/>
    </div>
  )
}

export default CVExperience