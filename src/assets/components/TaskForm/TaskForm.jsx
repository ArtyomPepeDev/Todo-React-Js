import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";

function TaskForm({ add, folder }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      add({value, folder});
      setValue("");
    }
  };

  return (
    <>
      <form className="input-folder" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Write a folder..."
          maxLength={15}
          onChange={(e) => setValue(e.target.value)}
        />

        {/* <button type="submit">{text}</button> */}
      </form>
    </>
  );
}

export default TaskForm;
