import React from 'react';
import Header from './Header';
import TaskCards from './TaskCards';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = (props) => {
  const { data } = props; // Destructure `data` from props

  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskCards data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
