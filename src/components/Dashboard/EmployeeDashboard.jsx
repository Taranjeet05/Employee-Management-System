//import React from 'react'
import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (data) => {
  console.log(data)
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard

