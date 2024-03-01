import React, { useState } from "react";
import TaskList from "./assets/components/TaskList/TaskList";
import TaskForm from "./assets/components/TaskForm/TaskForm";

/* TODO:
 * - Убрать Инпут если задание хранится в папке
 * - проверять если есть такое задание в папке и выводить ошибку
 * - проверку на законченое задание
 * - добавить react-router
 * - сделать сохранение заданий в localStorage
 */

function App() {
  const [tasks, setTasks] = useState([]);
  const [folders, setFolders] = useState([""]);

  const addTask = (text) => {
    setTasks([...tasks, { text, id: Date.now(), folder: "" }]);
  };

  const addFolder = (name) => {
    setFolders([...new Set([...folders, name])]);
  };

  const addToFolder = (id, folderName) => {
    if (folders.includes(folderName)) {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, folder: folderName };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className="todo-container">
      <TaskForm add={addTask} text="Add task" title="Create Task" />
      <TaskForm add={addFolder} text="Add folder" title="Create Folder" />
      <TaskList tasks={tasks} folders={folders} addToFolder={addToFolder} />
    </div>
  );
}

export default App;
