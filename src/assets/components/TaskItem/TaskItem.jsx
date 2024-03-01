import React, { useState } from "react";

function TaskItem({ task, addToFolder }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFolder(task.id, value);
  };
  return (
    <div>
      <p>{task.text}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add to Folder</button>
      </form>
    </div>
  );
}

export default TaskItem;
