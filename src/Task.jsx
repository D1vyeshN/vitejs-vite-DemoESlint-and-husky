import React from "react";

const Task = ({ task }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="mt-2">{task.description}</p>
    </div>
  );
};

export default Task;
