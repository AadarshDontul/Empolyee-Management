import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 bg-blue-400 h-full w-[300px] p-5 rounded-xl'>
        <div className='flex text-sm justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1'>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='text-sm '>
            <button className='bg-green-500 text-white px-2 py-1 mt-5'>Failed</button>
        </div>
    </div>
  )
}

export default FailedTask