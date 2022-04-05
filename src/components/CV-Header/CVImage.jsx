import React, { useContext } from 'react'
import { CVContext } from '../../context'

const CVImage = () => {
  const {cv: {image},  setCv:{setImage}} = useContext(CVContext);

  return (
    <div className="cv__image">
      <img src={image} alt="Not found" />
      <input
      value=''
        type="file"
        name="myImage"
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