import React, { useState } from 'react'
import SectionPopup from '../../UI/SectionPopup'

const CVOverviewPopup = ({ states, setStates }) => {
  const [firstName, setFirstName] = useState(states.firstName);
  const [lastName, setLastName] = useState(states.lastName);
  const [profession, setProfession] = useState(states.profession);
  const [about, setAbout] = useState(states.about);
  const [facebook, setFacebook] = useState(states.facebook);
  const [linkedin, setLinkedin] = useState(states.linkedin);

  const changedStates = {firstName, lastName, profession, about, facebook, linkedin};
  const setChangedStates = {setFirstName, setLastName, setProfession, setAbout, setFacebook, setLinkedin}

  return (
    <SectionPopup
      title='Introduce yourself'
      states={states}
      setStates={setStates}
      changedStates = {changedStates}
      setChangedStates={setChangedStates}
    >
      <div className="section__popup-formGroup">
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>First name</label>
          <input
            name='firstName'
            type="text"
            className="section__popup-input"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>Last name</label>
          <input
            name='lastName'
            type="text"
            className="section__popup-input"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="section__popup-inputContainer">
        <label htmlFor="section__popup-input" className='section__popup-label'>Profession</label>
        <input
          name='profession'
          type="text"
          className="section__popup-input"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
      </div>
      <div className="section__popup-textareaContainer">
        <label htmlFor="section__popup-input" className='section__popup-label'>About yourself</label>
        <textarea
          name="about"
          className='section__popup-textarea'
          value={about}
          onChange={e => setAbout(e.target.value)}
        ></textarea>
      </div>
      <div className="section__popup-formGroup">
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>Facebook</label>
          <input
            name='facebook'
            type="text"
            className="section__popup-input"
            value={facebook}
            onChange={e => setFacebook(e.target.value)}
          />
        </div>
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>Linkedin</label>
          <input
            name='linkedin'
            type="text"
            className="section__popup-input"
            value={linkedin}
            onChange={e => setLinkedin(e.target.value)}
          />
        </div>
      </div>
    </SectionPopup>
  )
}

export default CVOverviewPopup