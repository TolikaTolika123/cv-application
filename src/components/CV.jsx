import React from 'react'
import CVHeader from './CV-Sections/CVHeader'
import CVMain from './CV-Sections/CVMain'
import CVFooter from './CV-Sections/CVFooter'

const CV = ({sections, cv, setCv}) => {
  return (
    <div className='cv'>
      <CVHeader cv={cv} setCv={setCv}/>
      <CVMain sections={sections} cv={cv} setCv={setCv}/>
      <CVFooter sections={sections} cv={cv} setCv={setCv}/>
    </div>
  )
}

export default CV