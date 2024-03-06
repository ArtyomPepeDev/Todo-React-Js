import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaskDone() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const folders = useSelector((state) => state.tasks.folders);

  console.log(tasks);

  const completedTasks = tasks.filter((task) => task.completed === true);
  return (
    <div>
      <h1>Completed Task</h1>
      <div>
        {completedTasks.map((task) => (
          <p className="completed-task" key={task.id}>{task.text} from {task.folder}</p>
        ))}
      </div>
      <Link className="" to="/">Go Back</Link>
    </div>
  );
}

export default TaskDone;
