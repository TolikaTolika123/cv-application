import React, {useState} from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import ExperiencePopupItem from './ExperiencePopupItem';
import uniqid from 'uniqid';

const CVExperiencePopup = ({states, setStates}) => {
  const [experienceList, setExperienceList] = useState(structuredClone(states.experienceList));

  const removeItem = key => {
    setExperienceList(experienceList.filter(item => item.id !== key));
  }

  return (
    <SectionPopup
      title='What are your relevant experiences?'
      states={states}
      setStates={setStates}
      changedStates={{ experienceList }}
      setChangedStates={{ setExperienceList }}
    >
      {experienceList.map((elem, i) => 
        <ExperiencePopupItem key={elem.id} id={elem.id} elem={elem} i={i} experience={experienceList} removeItem={removeItem} />
      )}

      <button className='section__popup-add' type='button' onClick={() => {
        setExperienceList([...experienceList, {profession: '', name: '', location: '', time: '', about: '', id: uniqid() }])
        }}>Add</button>
    </SectionPopup>
  )
}

export default CVExperiencePopup