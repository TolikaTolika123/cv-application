import React from 'react'

const PopupRangeInput = ({ name, skill, value, changeValue, changeTitle }) => {
  return (
    <div className="section__popup-rangeContainer">
      <input
        className='section__popup-input'
        value={skill}
        onChange={changeTitle}
      />
      <input
        className='section__popup-rangeValue'
        type="range"
        name={name}
        id={name}
        min='0'
        max='100'
        value={value}
        onChange={changeValue}
      />
    </div>
  )
}

export default PopupRangeInput