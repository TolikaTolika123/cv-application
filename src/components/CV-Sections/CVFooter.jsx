import React from 'react'
import CVAward from '../CV-Footer/CVAward/CVAward'
import CVReference from '../CV-Footer/CVReference/CVReference'

const CVFooter = ({sections, cv, setCv}) => {
  return (
    <div className='cv__footer'>
      {sections.award && <CVAward award={cv.award} setAward={setCv.setAward}/>}
      {sections.reference && <CVReference references={cv.references} setReferences={setCv.setReferences}/>}
    </div>
  )
}

export default CVFooter