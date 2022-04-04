import React, {useState, useEffect} from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput'
import PopupTextarea from '../../UI/Popup/PopupTextarea'

const CVAwardPopup = ({states, setStates}) => {
  const [award, setAward] = useState(states.award);
  const [corp, setCorp] = useState(states.corp);
  const [about, setAbout] = useState(states.about);

  useEffect(() => {
    setAward(states.award);
    setCorp(states.corp);
    setAbout(states.about);
  }, [states])

  const changedStates = {award, corp, about};
  const setChangedStates = {setAward, setCorp, setAbout};

  return (
    <SectionPopup
      title='What is your greatest award'
      states={states}
      setStates={setStates}
      changedStates={changedStates}
      setChangedStates={setChangedStates}
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