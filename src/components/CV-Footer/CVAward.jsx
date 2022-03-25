import React from 'react'
import AwardItem from '../UI/AwardItem'

const CVAward = () => {
  return (
    <div className='cv__award'>
      <h3 className="award__title regular__title">Award</h3>
      <AwardItem
        title={'Best employee of the year'}
        corp={'Huge matrix corp.'}
        about={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dignissimos?'}
      />
    </div>
  )
}

export default CVAward