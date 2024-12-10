import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='overflow-x-auto items-center justify-start gap-4 w-full h-[55%] mt-8 flex'>
      {data.tasks.map((task,idx)=>{
        if(task.active){
          return <AcceptTask key={idx} data={task}/>
        }
        if(task.newTask){
          return <NewTask key={idx} data={task}/>
        }
        if(task.completed){
          return <CompleteTask key={idx} data={task}/>
        }
        if(task.failed){
          return <FailedTask key={idx} data={task}/>
        }
      })}
        
    </div>
  )
}

export default TaskList