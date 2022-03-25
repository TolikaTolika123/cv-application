import React from 'react'
import CVAward from '../CV-Footer/CVAward'
import CVReference from '../CV-Footer/CVReference'

const CVFooter = () => {
  return (
    <div className='cv__footer'>
      <CVAward />
      <CVReference />
    </div>
  )
}

export default CVFooter