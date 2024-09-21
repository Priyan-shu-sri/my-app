import React, { useState, useEffect } from 'react';

const TaskForm = ({ currentTask, onSave, onCancel }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    description: ''
  });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={task.status}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Priority</label>
        <input
          type="text"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default TaskForm;
