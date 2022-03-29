import React, { useState } from 'react'
import PopupInput from '../../UI/Popup/PopupInput'

const ReferencePopupItem = ({ id, elem, references, i, removeItem }) => {
  const [referenceName, setReferenceName] = useState(elem.name);
  const [refrencePosition, setRefrencePosition] = useState(elem.position);
  const [referencePhone, setReferencePhone] = useState(elem.phone);
  const [referneceEmail, setReferneceEmail] = useState(elem.email);

  references[i] = { name: referenceName, position: refrencePosition, phone: referencePhone, email: referneceEmail, id };

  return (
    <div className="section__popup-formItem">
      <PopupInput
        label='Reference name'
        name='referenceName'
        value={referenceName}
        change={e => { setReferenceName(e.target.value) }}
      />
      <PopupInput
        label='Reference position'
        name='refrencePosition'
        value={refrencePosition}
        change={e => { setRefrencePosition(e.target.value) }}
      />
      <div className="section__popup-formGroup">
        <PopupInput
          label='Reference phone number'
          name='referencePhone'
          value={referencePhone}
          change={e => { setReferencePhone(e.target.value) }}
        />
        <PopupInput
          label='Reference email adress'
          name='referneceEmail'
          value={referneceEmail}
          change={e => { setReferneceEmail(e.target.value) }}
        />
      </div>
      <button className='section__popup-remove' type='button' onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}

export default ReferencePopupItem