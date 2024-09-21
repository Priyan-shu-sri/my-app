import React, { useState } from 'react';
import './TaskList.css';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import PaginationFooter from './PaginationFooter'; // Import the PaginationFooter component

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', comments: 'This task is good' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '18/08/2024', priority: 'Low', comments: 'This task is good' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '12/06/2024', priority: 'Normal', comments: 'This task is good' },
    { id: 5, assignedTo: 'User 5', status: 'In Progress', dueDate: '22/09/2024', priority: 'Low', comments: 'This task is good' },
  ]);

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [dropdownOpenId, setDropdownOpenId] = useState(null); // Track the dropdown state for each task

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(20); 
  const totalPages = Math.ceil(tasks.length / tasksPerPage); 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setTasksPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleTaskSelection = (taskId) => {
    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.includes(taskId)
        ? prevSelectedTasks.filter(id => id !== taskId)
        : [...prevSelectedTasks, taskId]
    );
  };

  const handleSelectAll = () => {
    if (selectedTasks.length === tasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(tasks.map(task => task.id));
    }
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setEditModalOpen(true);
    setDropdownOpenId(null); // Close the dropdown
  };

  const handleDeleteClick = (task) => {
    setCurrentTask(task);
    setDeleteModalOpen(true);
    setDropdownOpenId(null); // Close the dropdown
  };

  const handleSaveTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    setDeleteModalOpen(false);
  };

  const toggleDropdown = (taskId) => {
    setDropdownOpenId(dropdownOpenId === taskId ? null : taskId);
  };

  return (
    <div className="task-table-container">

      <table className="task-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedTasks.length === tasks.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map(task => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => handleTaskSelection(task.id)}
                />
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>
                <div className="comments-cell">
                  <span>{task.comments}</span>
                  <div className="dropdown-icon">
                    {/* Dropdown button (down arrow icon) */}
                    <button onClick={() => toggleDropdown(task.id)} className="dropdown-toggle">
                      &#9660; {/* Down arrow icon */}
                    </button>
                    {dropdownOpenId === task.id && (
                      <div className="dropdown-menu">
                        <button onClick={() => handleEditClick(task)}>Edit</button>
                        <button onClick={() => handleDeleteClick(task)}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditTaskModal
        isOpen={isEditModalOpen}
        closeModal={() => setEditModalOpen(false)}
        task={currentTask}
        onSave={handleSaveTask}
      />

      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        closeModal={() => setDeleteModalOpen(false)}
        task={currentTask}
        onDelete={handleDeleteTask}
      />

      <PaginationFooter
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        itemsPerPage={tasksPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default TaskTable;
