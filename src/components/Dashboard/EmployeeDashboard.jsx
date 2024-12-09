import React from 'react'
import Header from './header'
import TaskCards from './TaskCards'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
          <h1>{data.id}</h1>
          <Header/>
          <TaskCards/>
          <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard