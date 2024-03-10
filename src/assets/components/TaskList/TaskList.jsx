import React, { Fragment, useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import FolderList from "../FolderList/FolderList";

function TaskList({ tasks, addTask, folders }) {
  const groupBy = (arr, property) => {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
    }, {});
  };

  const sortedByFolder = groupBy(tasks, "folder");
  console.log("sortedByFolder: ", sortedByFolder);

  return (
    <div className="folders-container">
      {folders.map((folder) => (
          <FolderList
            addTask={addTask}
            tasks={tasks}
            folders={folders}
            key={folder}
            folder={folder}
            sortedByFolder={sortedByFolder}
          />
      ))}
    </div>
  );
}

export default TaskList;
