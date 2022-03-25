import React from 'react'
import CVImage from '../CV-Header/CVImage'
import CVOverview from '../CV-Header/CVOverview'

const CVHeader = () => {
  return (
    <div className='cv__header'>
      <CVImage />
      <CVOverview />
    </div>
  )
}

export default CVHeader