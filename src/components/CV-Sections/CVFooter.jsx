import React from 'react'
import CVAward from '../CV-Footer/CVAward/CVAward'
import CVReference from '../CV-Footer/CVReference/CVReference'

const CVFooter = ({sections}) => {
  return (
    <div className='cv__footer'>
      {sections.award && <CVAward />}
      {sections.reference && <CVReference />}
    </div>
  )
}

export default CVFooter