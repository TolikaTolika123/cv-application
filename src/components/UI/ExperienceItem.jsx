import React from 'react'

const ExperienceItem = (props) => {
  return (
    <li className="cv__experience-item">
      <h4>{props.profession}</h4>
      <p className="cv__experience-item-subtitle">
        <span>{props.name} </span>
        -
        <span> {props.location} </span>
        |
        <span> {props.time}</span>
      </p>
      <p className="cv__experience-item-overview">{props.about}</p>
    </li>
  )
}

export default ExperienceItem