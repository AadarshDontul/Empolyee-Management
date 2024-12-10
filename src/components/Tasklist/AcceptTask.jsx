import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className='flex-shrink-0 bg-blue-400 h-full w-[300px] p-5 rounded-xl'>
        <div className='flex text-sm justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1'>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask