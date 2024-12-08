import React from 'react';
import Header from './header';
import CreateTask from './CreateTask';
import AllTaskAdmin from './AllTaskAdmin';

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-6 bg-black">
      <Header />
      <CreateTask/>
      <AllTaskAdmin/>
      
    </div>
  );
};

export default AdminDashboard;
