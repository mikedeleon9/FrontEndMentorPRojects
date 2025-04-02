import React from 'react'

function ModalPledgeComponent({labelTitle, description}) {
  return (
    <div className='border-gray-200 border-1 p-6 rounded-lg'>
      <input id={labelTitle} type="radio" />
      <label htmlFor={labelTitle}>{labelTitle}</label>
      <p>{description}</p>
    </div>
  )
}

export default ModalPledgeComponent
