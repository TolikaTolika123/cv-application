import React from 'react'
import ExperienceItem from '../UI/ExperienceItem'
import uniqid from 'uniqid';
import EditBtn from '../UI/EditBtn'

const CVExperience = () => {
  const experienceList = [
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!'
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!'
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!'
    },
    {
      profession: 'You Profesion Here',
      name: 'Company name here',
      location: 'location',
      time: 'years',
      about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum pariatur saepe laboriosam atque quibusdam eos perspiciatis amet voluptas accusantium officia necessitatibus rem, sequi beatae eligendi praesentium voluptatem voluptatibus, ullam eveniet!'
    },
  ]

  return (
    <div className='cv__experience cv__section'>
      <h3 className="experience__title regular__title">Work experience</h3>
      <ul className='cv__experience-list'>
        {experienceList.map(item => (
          <ExperienceItem
            key={uniqid()}
            profession={item.profession}
            name={item.name}
            location={item.location}
            time={item.time}
            about={item.about}
          />
        ))}
      </ul>
      <EditBtn />
    </div>
  )
}

export default CVExperience