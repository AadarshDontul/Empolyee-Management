import React from 'react';

const TaskCards = () => {
  return (
    <div className='flex mt-10 justify-between gap-4 w-full px-5'>
      <div className='rounded-xl w-[25%] py-6 px-5 bg-red-400'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-xl font-medium'>New Task</h1>
      </div>
      <div className='rounded-xl w-[25%] py-6 px-5 bg-blue-500'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-xl font-medium'>Completed</h1>
      </div>
      <div className='rounded-xl w-[25%] py-6 px-5 bg-green-500'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-xl font-medium'>Accepted</h1>
      </div>
      <div className='rounded-xl w-[25%] py-6 px-5 bg-yellow-500'>
        <h1 className='text-3xl font-semibold'>0</h1>
        <h1 className='text-xl font-medium'>Failed</h1>
      </div>
    </div>
  );
};

export default TaskCards;
