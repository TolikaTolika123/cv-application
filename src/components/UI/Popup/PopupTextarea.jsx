import React from 'react'

const PopupTextarea = ({ label, name, value, change }) => {
  return (
    <div className="section__popup-textareaContainer">
      <label htmlFor={name} className='section__popup-label'>{label}</label>
      <textarea
        id={name}
        name={name}
        className='section__popup-textarea'
        value={value}
        onChange={change}
      ></textarea>
    </div>
  )
}

export default PopupTextarea