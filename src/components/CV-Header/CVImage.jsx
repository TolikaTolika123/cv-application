import React, { useState } from 'react'
import imgLink from '../../images/default-image.svg';

const CVImage = () => {
  const [selectedImage, setSelectedImage] = useState(imgLink);
  return (
    <div className="cv__image">
      <img src={selectedImage} alt="Not found" />
      <input
        title='Select Image'
        type="file"
        name="myImage"
        alt='d'
        onChange={(event) => {
          event.target.files[0].arrayBuffer().then(buf => {
            const blob = new Blob([buf], { type: 'image/png' });
            setSelectedImage(URL.createObjectURL(blob));
          })
        }}
      />
    </div>
  )
}

export default CVImage