import React, { useState } from 'react'
import PopupInput from '../../UI/Popup/PopupInput';
import PopupTextarea from '../../UI/Popup/PopupTextarea';

const ExperiencePopupItem = ({ id, elem, experience, i, removeItem }) => {
  const [profession, setProfession] = useState(elem.profession);
  const [companyName, setCompanyName] = useState(elem.name);
  const [companyLocation, setCompanyLocation] = useState(elem.location);
  const [experienceTime, setExperienceTime] = useState(elem.time);
  const [aboutExperience, setAboutExperience] = useState(elem.about)

  experience[i] = { profession, name: companyName, location: companyLocation, time: experienceTime, about: aboutExperience, id }
  return (
    <div className="section__popup-formItem">
      <PopupInput
        label='Your Profession'
        name='profession'
        value={profession}
        change={e => { setProfession(e.target.value) }}
      />
      <PopupInput
        label='Company name'
        name='companyName'
        value={companyName}
        change={e => { setCompanyName(e.target.value) }}
      />
      <div className="section__popup-formGroup">
        <PopupInput
          label='Company location'
          name='companyLocation'
          value={companyLocation}
          change={e => { setCompanyLocation(e.target.value) }}
        />
        <PopupInput
          label='Experience time'
          name='experienceTime'
          value={experienceTime}
          change={e => { setExperienceTime(e.target.value) }}
        />
      </div>
      <PopupTextarea
        label='About job'
        name='aboutExperience'
        value={aboutExperience}
        change={e => setAboutExperience(e.target.value)}
      />
      <button className='section__popup-remove' type='button' onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}

export default ExperiencePopupItem