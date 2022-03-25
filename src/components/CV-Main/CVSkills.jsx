import React from 'react'
import SkillItem from '../UI/SkillItem'

const CVSkills = () => {
  const skills = [
    {skill: 'Adobe Photoshop', proficiency: 80},
    {skill: 'Adobe InDesign', proficiency: 80},
    {skill: 'Adobe Illustartor', proficiency: 80},
    {skill: 'Microsoft Word', proficiency: 80},
    {skill: 'Wordpress', proficiency: 80},
  ]

  return (
    <div className='cv__skills'>
      <h3 className="skills__title regular__title">skills</h3>
      <ul className="cv__skills-list">
        {skills.map(skill => (
          <SkillItem skill={skill.skill} proficiency={skill.proficiency} />
        ))}
      </ul>
    </div>
  )
}

export default CVSkills