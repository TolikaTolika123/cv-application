import React from 'react'
import CVHeader from './CV-Sections/CVHeader'
import CVMain from './CV-Sections/CVMain'
import CVFooter from './CV-Sections/CVFooter'

const CV = () => {
  return (
    <div className='cv'>
      <CVHeader/>
      <CVMain/>
      <CVFooter/>
    </div>
  )
}

export default CV