import React, {useState, useEffect} from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput'
import PopupTextarea from '../../UI/Popup/PopupTextarea'

const CVAwardPopup = ({modal, setModal, award: awardObj, setAward: setAwardObj}) => {
  const [award, setAward] = useState(awardObj.award);
  const [corp, setCorp] = useState(awardObj.corp);
  const [about, setAbout] = useState(awardObj.about);

  useEffect(() => {
    setAward(awardObj.award);
    setCorp(awardObj.corp);
    setAbout(awardObj.about);
  }, [awardObj])

  const changedStates = {award, corp, about};
  const setChangedStates = {setAward, setCorp, setAbout};

  return (
    <SectionPopup
      title='What is your greatest award'
      states={awardObj}
      setStates={setAwardObj}
      {...{modal, setModal, changedStates, setChangedStates}}
    >
      <PopupInput
        label='Award'
        name='award'
        value={award}
        change={e => setAward(e.target.value)}
      />
      <PopupInput
        label='Corporation'
        name='corp'
        value={corp}
        change={e => setCorp(e.target.value)}
      />
      <PopupTextarea
        label='About award'
        name='aboutAward'
        value={about}
        change={e => setAbout(e.target.value)}
      />
    </SectionPopup>
  )
}

export default CVAwardPopup