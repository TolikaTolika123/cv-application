import React, { useState } from 'react'
import SocialItem from '../../UI/SocialItem'
import EditBtn from '../../UI/EditBtn'
import CVOverviewPopup from './CVOverviewPopup'

const CVOverview = ({ overview, setOverview }) => {
  const [modal, setModal] = useState(false);

  const states = {
    modal,
    firstName: overview.firstName,
    lastName: overview.lastName,
    profession: overview.profession,
    about: overview.about,
    facebook: overview.facebook,
    linkedin: overview.linkedin
  };

  const setStates = {
    setModal,
    setFirstName: setOverview.setFirstName,
    setLastName: setOverview.setLastName,
    setProfession: setOverview.setProfession,
    setAbout: setOverview.setAbout,
    setFacebook: setOverview.setFacebook,
    setLinkedin: setOverview.setLinkedin
  };

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
      <CVOverviewPopup states={states} setStates={setStates} overview={overview} />
    </div>
  )
}

export default CVOverview