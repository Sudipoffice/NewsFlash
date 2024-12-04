import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-full mb-8 md:mb-20 gap-8 md:gap-16'>
      <div className='w-[95%] md:w-4/5 h-full aspect-18/9 bg-gray-200'></div>
      <div className='grid grid-flow-row grid-cols-2 md:grid-cols-3 w-5/6 h-full gap-4 md:gap-16'>
      {Array.from({length: 6}).map((i)=>{
        return <div key={i} className='bg-gray-200 w-full rounded-lg aspect-4/3'>
             </div>
      })}
      </div>
    </div>
  )
}

export default Shimmer
