import React from 'react'
import uniqid from 'uniqid'
import ReferenceItem from '../UI/ReferenceItem'
import EditBtn from '../UI/EditBtn'

const CVReference = () => {
  const references = [
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com'},
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com'},
  ]

  return (
    <div className='cv__reference section'>
      <h3 className="reference__title regular__title">Reference</h3>
      <div className="cv__reference-content">
        {references.map(item => (
          <ReferenceItem key={uniqid()} name={item.name} position={item.position} phone={item.phone} email={item.email}/>
        ))}
      </div>
      <EditBtn />
    </div>
  )
}

export default CVReference