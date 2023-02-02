import React from 'react'
import { img_300, unavailable } from '../config'

const Card = ({ title, id, poster }) => {
  return (
    <div key={id} className='flex justify-center m-2 w-40 sm:w-64'>
      <div className="overflow-hidden shadow-md rounded-md">
        <img src={poster ? `${img_300}${poster}` : unavailable}
          alt={title} className='' />
        <div className="px-3 sm:px-6 py-3 sm:py-4 justify-center flex">
          <h3 className='font-semibold text-lg sm:text-xl text-blue-500'>{title}</h3>
        </div>
      </div>
    </div >
  )
}

export default Card