import React, {useState} from 'react'

const FormItem = ({id, elem, i, education, removeItem}) => {
  console.log(elem)
  const [subject, setSubject] = useState(elem.subject)
  const [level, setLevel] = useState(elem.level)
  const [schoolName, setSchoolName] = useState(elem.name)
  const [schoolLocation, setSchoolLocation] = useState(elem.location)
  const [timePeriod, setTimePeriod] = useState(elem.time)

  education[i] = {subject, level, name: schoolName, location: schoolLocation, time: timePeriod};
  return (
    <div className="section__popup-formItem">
          <div className="section__popup-inputContainer">
            <label htmlFor="section__popup-input" className='section__popup-label'>What did you study</label>
            <input
              name='subject'
              type="text"
              className="section__popup-input"
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="section__popup-inputContainer">
            <label htmlFor="section__popup-input" className='section__popup-label'>What degree did you get</label>
            <input
              name='degree'
              type="text"
              className="section__popup-input"
              value={level}
              onChange={e => {
                setLevel(e.target.value)
              }}
            />
          </div>
          <div className="section__popup-formGroup">
            <div className="section__popup-inputContainer">
              <label htmlFor="section__popup-input" className='section__popup-label'>School name</label>
              <input
                name='schoolName'
                type="text"
                className="section__popup-input"
                value={schoolName}
                onChange={e => {
                  setSchoolName(e.target.value)
                }}
              />
            </div>
            <div className="section__popup-inputContainer">
              <label htmlFor="section__popup-input" className='section__popup-label'>School location</label>
              <input
                name='schoolLocation'
                type="text"
                className="section__popup-input"
                value={schoolLocation}
                onChange={e => {
                  setSchoolLocation(e.target.value)
                }}
              />
            </div>
            <div className="section__popup-inputContainer">
              <label htmlFor="section__popup-input" className='section__popup-label'>time period</label>
              <input
                name='educationTime'
                type="text"
                className="section__popup-input"
                value={timePeriod}
                onChange={e => {
                  setTimePeriod(e.target.value)
                }}
              />
            </div>
          </div>
          <button type='button' onClick={() => removeItem(id)}>Remove</button>
        </div>
  )
}

export default FormItem