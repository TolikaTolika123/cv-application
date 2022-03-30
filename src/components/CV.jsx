import React from 'react'
import CVHeader from './CV-Sections/CVHeader'
import CVMain from './CV-Sections/CVMain'
import CVFooter from './CV-Sections/CVFooter'

const CV = ({sections}) => {
  return (
    <div className='cv'>
      <CVHeader/>
      <CVMain sections={sections}/>
      <CVFooter sections={sections}/>
    </div>
  )
}

export default CV