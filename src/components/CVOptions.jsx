import React from 'react';
import OptionsBtn from './UI/OptionsBtn';

const CVOptions = () => {
  return (
    <div className='cv__options'>
      <OptionsBtn text="Reset" />
      <OptionsBtn text="Print PDF" />
    </div>
  )
}

export default CVOptions