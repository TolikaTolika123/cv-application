import React from 'react'

const AwardItem = (props) => {
  return (
    <div>
      <h4 className='cv__award-title'>{props.title}</h4>
      <p className="cv__award-corp">{props.corp}</p>
      <p className="cv__award-text">{props.about}</p>
    </div>
  )
}

export default AwardItem