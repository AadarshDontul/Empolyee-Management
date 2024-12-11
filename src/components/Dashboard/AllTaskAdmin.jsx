import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTaskAdmin = () => {
  const authData = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60'>
      {/* Header Section */}
      <div className='bg-red-500 font-semibold mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 '>Employee Name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>
      </div>

      {/* Data Section */}
      <div className='h-[80%] overflow-auto'>
        {authData?.employeeData?.map((employee, index) => (
          <div
            key={index}
            className='flex justify-between bg-emerald-600  mb-2 py-2 px-4 rounded'
          >
            <h2 className='w-1/5 '>{employee.firstName}</h2>
            <h3 className='w-1/5 '>{employee.taskCounts.newTask}</h3>
            <h5 className='w-1/5 '>{employee.taskCounts.active}</h5>
            <h5 className='w-1/5 '>{employee.taskCounts.completed}</h5>
            <h5 className='w-1/5 '>{employee.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTaskAdmin
