import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput';
import PopupTextarea from '../../UI/Popup/PopupTextarea';

const CVOverviewPopup = ({ overview, setOverview, modal, setModal }) => {
  const [firstName, setFirstName] = useState(overview.firstName);
  const [lastName, setLastName] = useState(overview.lastName);
  const [profession, setProfession] = useState(overview.profession);
  const [about, setAbout] = useState(overview.about);
  const [facebook, setFacebook] = useState(overview.facebook);
  const [linkedin, setLinkedin] = useState(overview.linkedin);

  useEffect(() => {
    setFirstName(overview.firstName);
    setLastName(overview.lastName);
    setProfession(overview.profession);
    setAbout(overview.about);
    setFacebook(overview.facebook);
    setLinkedin(overview.linkedin);
  }, [overview])
  
  const changedStates = { firstName, lastName, profession, about, facebook, linkedin };
  const setChangedStates = { setFirstName, setLastName, setProfession, setAbout, setFacebook, setLinkedin }
  
  return (
    <SectionPopup
      title='Introduce yourself'
      states={overview}
      setStates={setOverview}
      {...{changedStates, setChangedStates, modal, setModal}}
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