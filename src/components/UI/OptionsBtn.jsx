import React from 'react';

const OptionsBtn = ({text, onClick}) => {
  return (
    <button className='options-btn' onClick={onClick}>{text}</button>
  )
}

export default OptionsBtn