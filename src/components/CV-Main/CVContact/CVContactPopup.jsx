import React, { useState, useEffect } from 'react'
import SectionPopup from '../../UI/Popup/SectionPopup'
import PopupInput from '../../UI/Popup/PopupInput';

const CVContactPopup = ({ contact, setContact, modal, setModal }) => {
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [adress, setAdress] = useState(contact.adress);
  const [city, setCity] = useState(contact.city);
  const [region, setRegion] = useState(contact.region);
  const [postZip, setPostZip] = useState(contact.postZip);
  const [country, setCountry] = useState(contact.country);

  useEffect(() => {
    setPhone(contact.phone);
    setEmail(contact.email);
    setAdress(contact.adress);
    setCity(contact.city);
    setRegion(contact.region);
    setPostZip(contact.postZip);
    setCountry(contact.country);
  }, [contact])

  const changedStates = { phone, email, adress, city, region, postZip, country };
  const setChangedStates = { setPhone, setEmail, setAdress, setCity, setRegion, setPostZip, setCountry };
  return (
    <SectionPopup
      title='What is you contact information?'
      states={contact}
      setStates={setContact}
      {...{changedStates, setChangedStates, modal, setModal}}
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