import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer';

function App(){
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedIn')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  
  setLocalStorage()
  
  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedIn', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employeeData.find(
        (employeeCurr) => employeeCurr.email === email && employeeCurr.password === password
      );
      if (employee) {
        setUser('employee');
        localStorage.setItem('loggedIn', JSON.stringify({ role: 'employee',data:employee}));
        setLoggedInUserData(employee); // Ensure this is set correctly
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :''}
    {user === 'admin' ? <AdminDashboard/> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App