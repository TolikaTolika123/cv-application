import React, { useState, useContext } from 'react'
import SocialItem from '../../UI/SocialItem'
import EditBtn from '../../UI/EditBtn'
import CVOverviewPopup from './CVOverviewPopup'
import { CVContext } from '../../../context'

const CVOverview = () => {
  const [modal, setModal] = useState(false);

  const {cv: {overview},  setCv:{setOverview}} = useContext(CVContext);

  return (
    <div onClick={() => { setModal(true) }} className='cv__overview section'>
      <h1 className="cv__name"><span className='first__name'>{overview.firstName}</span> <span className='last__name'>{overview.lastName}</span></h1>
      <p className="cv__profession">{overview.profession}</p>
      <p className="cv__about">
        {overview.about}
      </p>
      <div className="cv__social">
        <SocialItem socialNetwork='Facebook' username={overview.facebook} />
        <SocialItem socialNetwork='Linkedin' username={overview.linkedin} />
      </div>
      <EditBtn />
      <CVOverviewPopup {...{overview, setOverview, modal, setModal}} />
    </div>
  )
}

export default CVOverview