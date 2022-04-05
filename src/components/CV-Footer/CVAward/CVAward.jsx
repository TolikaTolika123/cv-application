import React, {useState, useContext} from 'react'
import { CVContext } from '../../../context'
import AwardItem from '../../UI/AwardItem'
import EditBtn from '../../UI/EditBtn'
import CVAwardPopup from './CVAwardPopup'

const CVAward = () => {
  const [modal, setModal] = useState(false)
  const {cv: {award},  setCv:{setAward}} = useContext(CVContext);


  return (
    <div onClick={() => {setModal(true)}} className='cv__award section'>
      <h3 className="award__title regular__title">Award</h3>
      <AwardItem
        title={award.award}
        corp={award.corp}
        about={award.about}
      />
      <EditBtn />
      <CVAwardPopup {...{modal, setModal, award, setAward}}/>
    </div>
  )
}

export default CVAward