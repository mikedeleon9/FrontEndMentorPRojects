import React from 'react'

function ModalPledgeComponent({labelTitle, description}) {
  return (
    <div className='border-gray-200 border-1 py-9 px-6 rounded-lg flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
      <input  className="w-5 h-5 text-ModerateCyan cursor-pointer accent-ModerateCyan" id={labelTitle} type="radio" />
      <label className='font-bold' htmlFor={labelTitle}>{labelTitle}</label>
      </div>
      <p className='text-DarkGray text-base/7'>{description}</p>
    </div>
  )
}

export default ModalPledgeComponent
