import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { ChevronDown, ChevronUp, Folder } from "lucide-react";
import TaskForm from "../TaskForm/TaskForm";
import { useActions } from "../../../hooks/useActions";

function FolderList({ folder, sortedByFolder }) {
  const [isOpen, setIsOpen] = useState(true);

  const { addTask } = useActions();

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {folder.length > 1 && (
        <p className="folder-style" onClick={handleOpenClick}>
          <span>
            <Folder /> {folder}
          </span>
          <p className="folder-line"></p>
          <span className="folder-arrow">
            {isOpen ? <ChevronDown size={60} /> : <ChevronUp size={60} />}
          </span>
          <span className={isOpen === true ? "hidden" : "checkTask"}>
            {isOpen === true ? null : sortedByFolder[folder]?.length}
          </span>
        </p>
      )}
      <div className={isOpen ? "folders" : "folders hidden"}>
        {sortedByFolder[folder]?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
        {folder.length > 1 && (
          <TaskForm add={addTask} folder={folder} text="Add task" />
        )}
      </div>
    </div>
  );
}

export default FolderList;
