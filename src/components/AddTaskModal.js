import React, { useState } from 'react';

const AddTaskModal = ({ isOpen, closeModal, onAddTask }) => {
  const [newTask, setNewTask] = useState({
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleAdd = () => {
    if (newTask.assignedTo && newTask.status && newTask.dueDate && newTask.priority) {
      onAddTask(newTask);
      closeModal(); // Close modal after adding task
    } else {
      alert("Please fill all fields");
    }
  };

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Task</h2>
        <label>
          Assigned To:
          <input type="text" name="assignedTo" value={newTask.assignedTo} onChange={handleChange} />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={newTask.status} onChange={handleChange} />
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} />
        </label>
        <label>
          Priority:
          <input type="text" name="priority" value={newTask.priority} onChange={handleChange} />
        </label>
        <label>
          Comments:
          <textarea name="comments" value={newTask.comments} onChange={handleChange} />
        </label>
        <button onClick={handleAdd}>Add Task</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  ) : null;
};

export default AddTaskModal;
