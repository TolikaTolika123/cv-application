import React from 'react'
import ContactItem from '../UI/ContactItem'
import EditBtn from '../UI/EditBtn'
const CVContact = () => {
  return (
    <div className='cv__contact cv__section'>
      <h3 className="contact__title regular__title">Contact</h3>
      <ul className="cv__contact-list">
        <ContactItem link={true} img='phone' type='tel' content='+00 223 555 9980'/>
        <ContactItem link={true} img='email' type='mailto' content='infoaccount@gmail.com'/>
        <ContactItem link={false} img='pin' type='' content='123 Street Adress, CityTown, State/Country, PostZip, Country'/>
      </ul>
      <EditBtn />
    </div>
  )
}

export default CVContact