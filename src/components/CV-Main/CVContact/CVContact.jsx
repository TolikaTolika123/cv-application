import React, { useState } from 'react'
import ContactItem from '../../UI/ContactItem'
import EditBtn from '../../UI/EditBtn'
import CVContactPopup from './CVContactPopup'

const CVContact = ({ contact, setContact }) => {
  const [modal, setModal] = useState(false);
  
  const states = {
    modal,
    phone: contact.phone,
    email: contact.email,
    adress: contact.adress,
    region: contact.region,
    city: contact.city,
    postZip: contact.postZip,
    country: contact.country
  };

  const setStates = {
    setModal,
    setPhone: setContact.setPhone,
    setEmail: setContact.setEmail,
    setAdress: setContact.setAdress,
    setCity: setContact.setCity,
    setRegion: setContact.setRegion,
    setPostZip: setContact.setPostZip,
    setCountry: setContact.setCountry
  };

  const fullAdress = [contact.adress, contact.city, contact.region, contact.postZip, contact.country].join(', ');

  return (
    <div onClick={() => { setModal(true) }} className='cv__contact section'>
      <h3 className="contact__title regular__title">Contact</h3>
      <ul className="cv__contact-list">
        <ContactItem img='phone' content={contact.phone} />
        <ContactItem img='email' content={contact.email} />
        <ContactItem img='pin' content={fullAdress} />
      </ul>
      <EditBtn />
      <CVContactPopup states={states} setStates={setStates} />
    </div>
  )
}

export default CVContact