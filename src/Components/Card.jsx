import React from 'react'

export default function Card({title,image}) {
  return (
    <div className='backdrop-blur shadow-gray-500 shadow-lg
    rounded-xl bg-green-200 p-20  m-10 bg-opacity-30
    '>

        <img src={image} alt="" />

       {title}

        
        
    </div>
  )
}
