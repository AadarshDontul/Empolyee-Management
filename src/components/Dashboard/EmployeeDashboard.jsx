import React from 'react'
import Header from './header'
import TaskCards from './TaskCards'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header/>
            <TaskCards/>
        </div>
    </div>
  )
}

export default EmployeeDashboard