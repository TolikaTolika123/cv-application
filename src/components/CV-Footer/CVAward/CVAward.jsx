import React, {useState} from 'react'
import AwardItem from '../../UI/AwardItem'
import EditBtn from '../../UI/EditBtn'
import CVAwardPopup from './CVAwardPopup'

const CVAward = () => {
  const [modal, setModal] = useState(false)
  const [award, setAward] = useState('Best employee of the year');
  const [corp, setCorp] = useState('Huge matrix corp.');
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dignissimos?');

  const states = {modal, award, corp, about};
  const setStates = {setModal, setAward, setCorp, setAbout};

  return (
    <div onClick={() => {setModal(true)}} className='cv__award section'>
      <h3 className="award__title regular__title">Award</h3>
      <AwardItem
        title={award}
        corp={corp}
        about={about}
      />
      <EditBtn />
      <CVAwardPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVAward