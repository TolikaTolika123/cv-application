import React, { useContext, useState } from 'react'
import { CVContext } from '../../../context'
import ContactItem from '../../UI/ContactItem'
import EditBtn from '../../UI/EditBtn'
import CVContactPopup from './CVContactPopup'

const CVContact = () => {
  const [modal, setModal] = useState(false);
  const {cv: {contact},  setCv:{setContact}} = useContext(CVContext);

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
      <CVContactPopup {...{modal, setModal, contact, setContact}} />
    </div>
  )
}

export default CVContact