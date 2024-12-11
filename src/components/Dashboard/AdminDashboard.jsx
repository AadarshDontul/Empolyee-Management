import React from 'react';
import Header from './header';
import CreateTask from './CreateTask';
import AllTaskAdmin from './AllTaskAdmin';

const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-6 bg-black">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTaskAdmin/>
      
    </div>
  );
};

export default AdminDashboard;
