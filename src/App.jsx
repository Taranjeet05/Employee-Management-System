//import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from '../src/components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState(null);

  const handelLogin = (email, password) => {
    // Example data (you can replace this with your JSON data)
    const employees = [
      { email: "employee1@example.com", password: "Password123" },
      { email: "employee2@example.com", password: "Password456" },
      { email: "employee3@example.com", password: "Password789" },
      { email: "employee4@example.com", password: "Password101" },
      { email: "employee5@example.com", password: "Password202" },
    ];
  
    const admin = { email: "admin@example.com", password: "AdminPass123" };
  
    if (email === admin.email && password === admin.password) {
      setUser('admin');
    } else if (employees.some(emp => emp.email === email && emp.password === password)) {
      setUser('employee');
    } else {
      alert('This is invalid credentials');
    }
  };
  


  return (
     <>
 {!user ? (
      <Login handelLogin={handelLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard />
    ) : (
      <EmployeeDashboard />
    )}     
    {/*<EmployeeDashboard />  */} 
    {/*<AdminDashboard />  */ } 
     </>
  )
}

export default App