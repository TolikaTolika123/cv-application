import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput';

const CVContactPopup = ({ states, setStates }) => {
  const [phone, setPhone] = useState(states.phone);
  const [email, setEmail] = useState(states.email);
  const [adress, setAdress] = useState(states.adress);
  const [city, setCity] = useState(states.city);
  const [region, setRegion] = useState(states.region);
  const [postZip, setPostZip] = useState(states.postZip);
  const [country, setCountry] = useState(states.country);

  useEffect(() => {
    setPhone(states.phone);
    setEmail(states.email);
    setAdress(states.adress);
    setCity(states.city);
    setRegion(states.region);
    setPostZip(states.postZip);
    setCountry(states.country);
  }, [states])

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
      <PopupInput
        label='Phone'
        name='phone'
        value={phone}
        change={e => setPhone(e.target.value)}
      />
      <PopupInput
        label='Email'
        name='email'
        value={email}
        change={e => setEmail(e.target.value)}
      />
      <PopupInput
        label='Street Adress'
        name='streetAddress'
        value={adress}
        change={e => setAdress(e.target.value)}
      />
      <div className="section__popup-formGroup">
        <PopupInput
          label='City'
          name='city'
          value={city}
          change={e => setCity(e.target.value)}
        />
        <PopupInput
          label='State'
          name='state'
          value={region}
          change={e => setRegion(e.target.value)}
        />
        <PopupInput
          label='Country'
          name='country'
          value={country}
          change={e => setCountry(e.target.value)}
        />
      </div>
      <PopupInput
        label='Zip/Postal Code'
        name='postZip'
        value={postZip}
        change={e => setPostZip(e.target.value)}
      />
    </SectionPopup>
  )
}

export default CVContactPopup