import React from 'react'
import CVImage from '../CVImage'
import CVOverview from '../CVOverview'

const CVHeader = () => {
  return (
    <div className='cv__header'>
      <CVImage />
      <CVOverview />
    </div>
  )
}

export default CVHeader