import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [taskAssignTo, setTaskAssignTo] = useState('');
  const [newTask,setNewTask] = useState({});


  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    setNewTask({taskAssignTo,taskCategory,taskDate,taskDescription,taskTitle,'active':false,'completed':false,'failed':false,'newTask':true});
    
    const data = userData;
    console.log(data);

    data.forEach((element)=>{ 
      if(taskAssignTo == element.firstName){ 
        element.tasks.push(newTask);
        element.taskCounts.newTask += 1;
      }
    })

    setUserData(data);
    console.log(userData);
    

    setTaskAssignTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');


  };

  return (
    <div className="mt-8 bg-gray-900 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-300 mb-6">Create New Task</h2>
      <form 
        onSubmit={submitHandler} // Pass the function reference, not invoke it
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label htmlFor="task-title" className="block text-sm font-medium text-gray-400">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              id="task-title"
              placeholder="Design an UI"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="deadline-date" className="block text-sm font-medium text-gray-400">
              Deadline Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              id="deadline-date"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="assign-to" className="block text-sm font-medium text-gray-400">
              Assign To
            </label>
            <input
              value={taskAssignTo}
              onChange={(e) => setTaskAssignTo(e.target.value)}
              type="text"
              id="assign-to"
              placeholder="Employee name"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-400">
              Category
            </label>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              type="text"
              id="category"
              placeholder="Dev, QA, UI/UX"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-400">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            id="description"
            cols="30"
            rows="10"
            placeholder="Describe the task..."
            className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-right md:col-span-2">
          <button
            type="submit" // Ensure type is submit
            className="px-6 py-2 bg-blue-700 text-gray-200 font-medium rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
