import React from 'react'

const ContactItem = ({ img, type, content, link }) => {
  return (
    <li className={`cv__contact-item ${img}`}>
      {link
        ? <a href={`${type}:${content}`}>{content}</a>
        : <span>{content}</span>
      }
    </li>
  )
}

export default ContactItem