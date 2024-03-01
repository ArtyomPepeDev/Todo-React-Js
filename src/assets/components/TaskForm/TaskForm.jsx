import React, { useState } from "react";

function TaskForm({ add, text, title }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    add(value);
  };
  return (
    <>
      <form className="input-folder" onSubmit={handleSubmit}>
        <h4>{title}</h4>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">{text}</button>
      </form>
    </>
  );
}

export default TaskForm;
