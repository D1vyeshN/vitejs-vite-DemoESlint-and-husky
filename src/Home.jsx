import React, { useState } from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

const Home = ({ tasks }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4"/>Task Manager</h1>
      <Link to="/add" className="text-3xl font-bold mb-4">
        Task Manager

ંમમ


        
      </Link>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => <Task key={index} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Home;
