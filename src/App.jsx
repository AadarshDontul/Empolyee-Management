import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App(){
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedIn')
    if(loggedInUser){
      setUser(JSON.parse(loggedInUser).role)
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@ex.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedIn', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employeeData.find(
        (employee) => employee.email === email && employee.password === password
      );
      if (employee) {
        setUser('employee');
        localStorage.setItem('loggedIn', JSON.stringify({ role: 'employee' }));
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