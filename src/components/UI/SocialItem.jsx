import React from 'react'

const SocialItem = ({socialNetwork, username}) => {
  return (
    <div className="cv__social-item">
      <b>{socialNetwork}. </b>
      <span>{username}</span>
    </div>
  )
}

export default SocialItem