import React from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ isOpen, closeModal, task, onSave }) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the edited task
    onSave(); // Call the onSave function passed as a prop
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label><span className="required">*</span> Assigned To</label>
              <select defaultValue={task.assignedTo}>
                <option>User 1</option>
                <option>User 2</option>
                <option>User 3</option>
                <option>User 4</option>
              </select>
            </div>

            <div className="form-group">
              <label><span className="required">*</span> Status</label>
              <select defaultValue={task.status}>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Due Date</label>
              <input type="date" defaultValue={task.dueDate} />
            </div>

            <div className="form-group">
              <label><span className="required">*</span> Priority</label>
              <select defaultValue={task.priority}>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea defaultValue={task.description} placeholder="Task description..."></textarea>
          </div>

          <div className="modal-buttons">
            <button type="button" onClick={closeModal} className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
