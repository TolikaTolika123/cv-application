import React, {useState} from 'react'
import ContactItem from '../../UI/ContactItem'
import EditBtn from '../../UI/EditBtn'
import CVContactPopup from './CVContactPopup'

const CVContact = () => {
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState('+00 223 555 9980');
  const [email, setEmail] = useState('infoaccount@gmail.com');
  const [adress, setAdress] = useState('123 Street Adress');
  const [city, setCity] = useState('CityTown');
  const [region, setRegion] = useState('State');
  const [postZip, setPostZip] = useState('PostZip');
  const [country, setCountry] = useState('Country');

  const states = {modal, phone, email, adress, region, city, postZip, country};
  const setStates = {setModal, setPhone, setEmail, setAdress, setCity, setRegion, setPostZip, setCountry};
  const fullAdress = [adress, city, region, postZip, country].join(', ');
  return (
    <div onClick={() => {setModal(true)}} className='cv__contact section'>
      <h3 className="contact__title regular__title">Contact</h3>
      <ul className="cv__contact-list">
        <ContactItem img='phone' content={phone}/>
        <ContactItem img='email' content={email}/>
        <ContactItem img='pin' content={fullAdress}/>
      </ul>
      <EditBtn />
      <CVContactPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVContact