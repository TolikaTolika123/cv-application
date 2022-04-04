import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput';
import PopupTextarea from '../../UI/Popup/PopupTextarea';

const CVOverviewPopup = ({ states, setStates }) => {
  const [firstName, setFirstName] = useState(states.firstName);
  const [lastName, setLastName] = useState(states.lastName);
  const [profession, setProfession] = useState(states.profession);
  const [about, setAbout] = useState(states.about);
  const [facebook, setFacebook] = useState(states.facebook);
  const [linkedin, setLinkedin] = useState(states.linkedin);

  useEffect(() => {
    setFirstName(states.firstName);
    setLastName(states.lastName);
    setProfession(states.profession);
    setAbout(states.about);
    setFacebook(states.facebook);
    setLinkedin(states.linkedin);
  }, [states])
  
  const changedStates = { firstName, lastName, profession, about, facebook, linkedin };
  const setChangedStates = { setFirstName, setLastName, setProfession, setAbout, setFacebook, setLinkedin }
  
  return (
    <SectionPopup
      title='Introduce yourself'
      states={states}
      setStates={setStates}
      changedStates={changedStates}
      setChangedStates={setChangedStates}
    >
      <div className="section__popup-formGroup">
        <PopupInput
          label='First name'
          name='firstName'
          value={firstName}
          change={e => setFirstName(e.target.value)}
        />
        <PopupInput
          label='Last name'
          name='lastName'
          value={lastName}
          change={e => setLastName(e.target.value)}
        />
      </div>
      <PopupInput
        label='Profession'
        name='profession'
        value={profession}
        change={e => setProfession(e.target.value)}
      />
      <PopupTextarea
        label='About yourself'
        name='about'
        value={about}
        change={e => setAbout(e.target.value)}
      />
      <div className="section__popup-formGroup">
        <PopupInput
          label='Facebook'
          name='facebook'
          value={facebook}
          change={e => setFacebook(e.target.value)}
        />
        <PopupInput
          label='Linkedin'
          name='linkedin'
          value={linkedin}
          change={e => setLinkedin(e.target.value)}
        />
      </div>
    </SectionPopup>
  )
}

export default CVOverviewPopup