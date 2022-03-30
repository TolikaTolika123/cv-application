import React from 'react'
import CVImage from '../CV-Header/CVImage'
import CVOverview from '../CV-Header/CVOverview/CVOverview'

const CVHeader = ({cv, setCv}) => {
  return (
    <div className='cv__header'>
      <CVImage image={cv.image} setImage={setCv.setImage}/>
      <CVOverview  overview={cv.overview} setOverview={setCv.setOverview}/>
    </div>
  )
}

export default CVHeader