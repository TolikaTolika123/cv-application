import React from 'react'
import ReferenceItem from '../UI/ReferenceItem'

const CVReference = () => {
  const references = [
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com'},
    {name: 'Reference name', position: 'Position within company', phone: '+00 222 555 9880', email: 'infoaccount@gmail.com'},
  ]

  return (
    <div className='cv__reference'>
      <h3 className="reference__title regular__title">Reference</h3>
      <div className="cv__reference-content">
        {references.map(item => (
          <ReferenceItem name={item.name} position={item.position} phone={item.phone} email={item.email}/>
        ))}
      </div>
    </div>
  )
}

export default CVReference