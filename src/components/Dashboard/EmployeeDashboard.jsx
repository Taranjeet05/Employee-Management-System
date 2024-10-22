//import React from 'react'
import PropTypes from "prop-types"
import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header data={data}/>
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

EmployeeDashboard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EmployeeDashboard

