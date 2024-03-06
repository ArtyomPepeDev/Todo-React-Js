import React, { useEffect, useState } from "react";
import TaskList from "./assets/components/TaskList/TaskList";
import TaskForm from "./assets/components/TaskForm/TaskForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useActions";

function App() {
  const { addFolder } = useActions();
  console.log(addFolder);

  const tasks = useSelector((state) => state.tasks.tasks);

  const folders = useSelector((state) => state.tasks.folders);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  // const addToFolder = (id, folderName) => {
  //   if (folders.includes(folderName)) {
  //     setTasks(
  //       tasks.map((task) => {
  //         if (task.id === id) {
  //           console.log(task);
  //           return { ...task, folder: folderName };
  //         }
  //         return task;
  //       })
  //     );
  //   }
  // };

  return (
    <div className="todo-container">
      <Link className="btn-done" to="/task-done">
        Completed Task
      </Link>
      <TaskForm add={addFolder} text="Add folder" title="Create Folder" />
      <TaskList tasks={tasks} folders={folders} />
    </div>
  );
}

export default App;
