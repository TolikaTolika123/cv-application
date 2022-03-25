import React from 'react'

const EducationItem = (props) => {
  return (
    <li className='cv__education-item'>
      <h4>{props.level}</h4>
      <p>
        <span>{props.name} </span>
         - 
        <span> {props.location}</span>
      </p>
      <time>{props.time}</time>
    </li>
  )
}

export default EducationItem