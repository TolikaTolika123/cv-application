import React from 'react'
import CVHeader from './CV-Sections/CVHeader'
import CVMain from './CV-Sections/CVMain'
import CVFooter from './CV-Sections/CVFooter'

const CV = React.forwardRef(({sections, cv, setCv}, ref) => {
  return (
    <div ref={ref} className='cv'>
      <CVHeader cv={cv} setCv={setCv}/>
      <CVMain sections={sections} cv={cv} setCv={setCv}/>
      <CVFooter sections={sections} cv={cv} setCv={setCv}/>
    </div>
  )
});

export default CV