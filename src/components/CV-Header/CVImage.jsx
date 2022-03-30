import React, { useState } from 'react'
import imgLink from '../../images/default-image.svg';

const CVImage = ({image, setImage}) => {
  return (
    <div className="cv__image">
      <img src={image} alt="Not found" />
      <input
        title='Select Image'
        type="file"
        name="myImage"
        alt='d'
        onChange={(event) => {
          event.target.files[0].arrayBuffer().then(buf => {
            const blob = new Blob([buf], { type: 'image/png' });
            setImage(URL.createObjectURL(blob));
          })
        }}
      />
    </div>
  )
}

export default CVImage