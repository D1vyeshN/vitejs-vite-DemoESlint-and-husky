import React from "react";
import TaskForm from "./TaskForm";
import { Link } from "react-router-dom";

const AddTask = ({ addTask }) => {
  const handleAddTask = (task) => {
    // Handle adding task here
    console.log("New Task:", task);
    addTask(task);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add New Task</h1>
      <Link to="/">Home</Link>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default AddTask;
