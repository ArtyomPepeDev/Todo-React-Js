import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { BadgeX } from "lucide-react";

function TaskItem({ task }) {
  const { tasks } = useSelector((state) => state);

  const { taskDone, removeTask } = useActions();

  console.log(tasks);
  return (
    <div className="task-item">
      <input
        onChange={() => taskDone(task.id)}
        type="checkbox"
        checked={task.completed}
      />
      <p>{task.text}</p>
      <BadgeX onClick={() => removeTask(task.id)} />
    </div>
  );
}

export default TaskItem;
