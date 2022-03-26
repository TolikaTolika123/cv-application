import React from 'react'
import uniqid from 'uniqid'
import SkillItem from '../UI/SkillItem'
import EditBtn from '../UI/EditBtn'

const CVSkills = () => {
  const skills = [
    {skill: 'Adobe Photoshop', proficiency: 80},
    {skill: 'Adobe InDesign', proficiency: 80},
    {skill: 'Adobe Illustartor', proficiency: 80},
    {skill: 'Microsoft Word', proficiency: 80},
    {skill: 'Wordpress', proficiency: 80},
  ]

  return (
    <div className='cv__skills cv__section'>
      <h3 className="skills__title regular__title">skills</h3>
      <ul className="cv__skills-list">
        {skills.map(skill => (
          <SkillItem key={uniqid()} skill={skill.skill} proficiency={skill.proficiency} />
        ))}
      </ul>
      <EditBtn />
    </div>
  )
}

export default CVSkills