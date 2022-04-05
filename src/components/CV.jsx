import React from 'react'
import CVHeader from './CV-Sections/CVHeader'
import CVMain from './CV-Sections/CVMain'
import CVFooter from './CV-Sections/CVFooter'

const CV = React.forwardRef(({sections}, ref) => {
  return (
    <div ref={ref} className='cv'>
      <CVHeader />
      <CVMain sections={sections} />
      <CVFooter sections={sections} />
    </div>
  )
});

export default CV