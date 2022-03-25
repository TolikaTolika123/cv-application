import React from 'react'

const ReferenceItem = (props) => {
  return (
    <div className='cv__reference-item'>
      <h4 className='cv__reference-item-title'>{props.name}</h4>
      <p className='cv__reference-item-position'>{props.position}</p>
      <p className='cv__reference-item-phone'><b>P. </b> {props.phone}</p>
      <p className='cv__reference-item-email'><b>E. </b> {props.email}</p>
    </div>
  )
}

export default ReferenceItem