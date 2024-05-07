import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <Router>
      <Routes>
        <Route index element={<Home tasks={tasks} />} />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;
