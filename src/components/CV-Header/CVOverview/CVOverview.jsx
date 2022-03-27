import React, {useState} from 'react'
import SocialItem from '../../UI/SocialItem'
import EditBtn from '../../UI/EditBtn'
import CVOverviewPopup from './CVOverviewPopup'

const CVOverview = () => {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState('Richard');
  const [lastName, setLastName] = useState('Davis');
  const [profession, setProfession] = useState('You Profession Here');
  const [about, setAbout] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores, ullam qui commodi quos perferendis, inarchitecto veritatis officia praesentium possimus nostrum dolore maxime quod repellendus ipsa exercitationem. Blanditiis, dolorem. Laborum quae nam vel pariatur hic eligendi. Ducimus numquam itaque, dicta animi recusandae assumenda voluptates quis esse sequi ullam non, cum odio pariatur est, quos quae laborum veritatis corporis harum?');
  const [facebook, setFacebook] = useState('richarddavis888');
  const [linkedin, setLinkedin] = useState('richarddavis888');

  const states = {modal, firstName, lastName, profession, about, facebook, linkedin};
  const setStates = {setModal, setFirstName, setLastName, setProfession, setAbout, setFacebook, setLinkedin}

  return (
    <div onClick={() => {setModal(true)}} className='cv__overview section'>
      <h1 className="cv__name"><span className='first__name'>{firstName}</span> <span className='last__name'>{lastName}</span></h1>
      <p className="cv__profession">{profession}</p>
      <p className="cv__about">
        {about}
      </p>
      <div className="cv__social">
        <SocialItem socialNetwork='Facebook' username={facebook}/>
        <SocialItem socialNetwork='Linkedin' username={linkedin}/>
      </div>
      <EditBtn />
      <CVOverviewPopup states={states} setStates={setStates}/>
    </div>
  )
}

export default CVOverview