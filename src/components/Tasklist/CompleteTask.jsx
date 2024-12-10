import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 bg-red-400 h-full w-[300px] p-5 rounded-xl'>
        <div className='flex text-sm justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1'>High</h3>
            <h4>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos dicta aspernatur quae similique dolor.</p>
        <div className='text-sm '>
            <button className='bg-green-500 text-white px-2 py-1 mt-5'>Complete</button>
        </div>
    </div>
  )
}

export default CompleteTask