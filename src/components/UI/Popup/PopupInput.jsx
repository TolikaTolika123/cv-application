import React from 'react'

const PopupInput = ({ label, name, value, change }) => {
  return (
    <div className="section__popup-inputContainer">
      <label htmlFor={name} className='section__popup-label'>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="section__popup-input"
        value={value}
        onChange={change}
      />
    </div>
  )
}

export default PopupInput