import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { ChevronDown, ChevronUp, Folder } from "lucide-react";

function FolderList({ addToFolder, folder, sortedByFolder }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenClick = (index) => {
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
          {isOpen ? <ChevronDown size={60} /> : <ChevronUp size={60} />}
        </p>
      )}
      <div
        className={isOpen ? "folders-container" : "folders-container hidden"}
      >
        {sortedByFolder[folder]?.map((task) => (
          <TaskItem key={task.id} task={task} addToFolder={addToFolder} />
        ))}
      </div>
    </div>
  );
}

export default FolderList;
