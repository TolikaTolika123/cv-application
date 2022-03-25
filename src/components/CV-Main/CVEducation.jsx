import React from 'react'
import EducationItem from '../UI/EducationItem'
import uniqid from 'uniqid';

const CVEducation = () => {
  const ls = [
    {level: 'master-graduate/major', name: 'University Name Here', location: 'Location', time: '2007-2010'},
    {level: 'bachelour-graduate/major', name: 'University Name Here', location: 'Location', time: '2010-2012'},
  ]

  return (
    <div className='cv__education'>
      <h3 className="education__title regular__title">Education</h3>
      <ul className='cv__education-list'>
        {
          ls.map(item => (
            <EducationItem level={item.level} name={item.name} location={item.location} time={item.time} key={uniqid()}/>
          ))
        }
      </ul>
    </div>
  )
}

export default CVEducation