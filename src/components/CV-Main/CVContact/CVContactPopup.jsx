import React, { useState } from 'react'
import SectionPopup from '../../UI/SectionPopup'

const CVContactPopup = ({ states, setStates }) => {
  const [phone, setPhone] = useState(states.phone);
  const [email, setEmail] = useState(states.email);
  const [adress, setAdress] = useState(states.adress);
  const [city, setCity] = useState(states.city);
  const [region, setRegion] = useState(states.region);
  const [postZip, setPostZip] = useState(states.postZip);
  const [country, setCountry] = useState(states.country);

  const changedStates = { phone, email, adress, city, region, postZip, country };
  const setChangedStates = { setPhone, setEmail, setAdress, setCity, setRegion, setPostZip, setCountry };
  return (
    <SectionPopup
      title='What is you contact information?'
      states={states}
      setStates={setStates}
      changedStates={changedStates}
      setChangedStates={setChangedStates}
    >
      <div className="section__popup-inputContainer">
        <label htmlFor="section__popup-input" className='section__popup-label'>Phone</label>
        <input
          name='phone'
          type="tel"
          className="section__popup-input"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div className="section__popup-inputContainer">
        <label htmlFor="section__popup-input" className='section__popup-label'>Email</label>
        <input
          name='email'
          type="text"
          className="section__popup-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="section__popup-inputContainer">
        <label htmlFor="section__popup-input" className='section__popup-label'>Street Aderss</label>
        <input
          name='lastName'
          type="text"
          className="section__popup-input"
          value={adress}
          onChange={e => setAdress(e.target.value)}
        />
      </div>
      <div className="section__popup-formGroup">
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>City</label>
          <input
            name='city'
            type="text"
            className="section__popup-input"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>State</label>
          <input
            name='state'
            type="text"
            className="section__popup-input"
            value={region}
            onChange={e => setRegion(e.target.value)}
          />
        </div>
        <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>Country</label>
          <input
            name='city'
            type="text"
            className="section__popup-input"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>
      </div>
      <div className="section__popup-inputContainer">
          <label htmlFor="section__popup-input" className='section__popup-label'>Zip/Postal Code</label>
          <input
            name='city'
            type="text"
            className="section__popup-input"
            value={postZip}
            onChange={e => setPostZip(e.target.value)}
          />
        </div>
    </SectionPopup>
  )
}

export default CVContactPopup