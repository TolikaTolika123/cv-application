import React from 'react'

const ToggleSection = ({ name, state, setState }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={state} onChange={e => setState(e.target.checked)}/>
      <span className="switch__slider"></span>
      <span className='switch__text'>{name}</span>
    </label>
  )
}

export default ToggleSection