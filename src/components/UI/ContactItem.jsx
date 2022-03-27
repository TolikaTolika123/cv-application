import React from 'react'

const ContactItem = ({ img, content }) => {
  return (
    <li className={`cv__contact-item ${img}`}>
      {content}
    </li>
  )
}

export default ContactItem