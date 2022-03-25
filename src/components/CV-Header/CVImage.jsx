import React from 'react'
import imgLink from '../../images/default-image.svg';

const CVImage = () => {
  return (
    <div className="cv__image">
      <img src={imgLink} alt="You" />
    </div>
  )
}

export default CVImage