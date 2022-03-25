import React from 'react'

const SkillItem = ({skill, proficiency}) => {
  return (
    <li className='cv__skills-item'>
      <label htmlFor={skill}>{skill}</label>
      <progress id={skill} value={proficiency} max='100'>{proficiency}%</progress>
    </li>
  )
}

export default SkillItem