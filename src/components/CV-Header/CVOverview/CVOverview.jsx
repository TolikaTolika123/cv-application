import React, {useState} from 'react'
import SocialItem from '../../UI/SocialItem'
import EditBtn from '../../UI/EditBtn'
import CVOverviewPopup from './CVOverviewPopup'

const CVOverview = () => {
  const [modal, setModal] = useState(false);

  return (
    <div onClick={() => {setModal(true)}} className='cv__overview cv__section'>
      <h1 className="cv__name">Richard davis</h1>
      <p className="cv__profession">Front-end developer</p>
      <p className="cv__about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores, ullam qui commodi quos perferendis, inarchitecto veritatis officia praesentium possimus nostrum dolore maxime quod repellendus ipsa exercitationem. Blanditiis, dolorem. Laborum quae nam vel pariatur hic eligendi. Ducimus numquam itaque, dicta animi recusandae assumenda voluptates quis esse sequi ullam non, cum odio pariatur est, quos quae laborum veritatis corporis harum?
      </p>
      <div className="cv__social">
        <SocialItem socialNetwork='Facebook' username='@richarddavsi888'/>
        <SocialItem socialNetwork='Linkedin' username='@richarddavsi888'/>
      </div>
      <EditBtn />
      <CVOverviewPopup visible={modal} setVisible={value => setModal(value)}/>
    </div>
  )
}

export default CVOverview