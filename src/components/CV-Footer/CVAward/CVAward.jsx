import React, {useState} from 'react'
import AwardItem from '../../UI/AwardItem'
import EditBtn from '../../UI/EditBtn'
import CVAwardPopup from './CVAwardPopup'

const CVAward = ({award, setAward}) => {
  const [modal, setModal] = useState(false)

  const states = {modal, award: award.award, corp: award.corp, about: award.about};
  const setStates = {setModal, setAward: setAward.setAward, setCorp: setAward.setCorp, setAbout: setAward.setAbout};

  return (
    <div onClick={() => {setModal(true)}} className='cv__award section'>
      <h3 className="award__title regular__title">Award</h3>
      <AwardItem
        title={award.award}
        corp={award.corp}
        about={award.about}
      />
      <EditBtn />
      <CVAwardPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVAward