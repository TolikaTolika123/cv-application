import React, { useState } from 'react'
import PopupInput from '../../UI/Popup/PopupInput'

const FormItem = ({ id, elem, education, i, removeItem }) => {
  const [subject, setSubject] = useState(elem.subject)
  const [level, setLevel] = useState(elem.level)
  const [schoolName, setSchoolName] = useState(elem.name)
  const [schoolLocation, setSchoolLocation] = useState(elem.location)
  const [timePeriod, setTimePeriod] = useState(elem.time)

  education[i] = { subject, level, name: schoolName, location: schoolLocation, time: timePeriod, id };

  return (
    <div className="section__popup-formItem">
      <PopupInput
        label='What did you study'
        name='subject'
        value={subject}
        change={e => {
          setSubject(e.target.value);
        }}
      />
      <PopupInput
        label='What degree did you get'
        name='degree'
        value={level}
        change={e => {
          setLevel(e.target.value)
        }}
      />
      <div className="section__popup-formGroup">
        <PopupInput
          label='School name'
          name='schoolName'
          value={schoolName}
          change={e => {
            setSchoolName(e.target.value)
          }}
        />
        <PopupInput
          label='School location'
          name='schoolLocation'
          value={schoolLocation}
          change={e => {
            setSchoolLocation(e.target.value)
          }}
        />
        <PopupInput
          label='time period'
          name='educationTime'
          value={timePeriod}
          change={e => {
            setTimePeriod(e.target.value)
          }}
        />
      </div>
      <button className='section__popup-remove' type='button' onClick={() => removeItem(id)}>Remove</button>
    </div>
  )
}

export default FormItem