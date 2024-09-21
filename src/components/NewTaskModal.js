import React from 'react';
import './NewTaskModal.css';

const NewTaskModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Task</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label><span className="required">*</span> Assigned To</label>
              <select>
                <option>User 1</option>
                <option>User 2</option>
                <option>User 3</option>
                <option>User 4</option>
                <option>User 5</option>
              </select>
            </div>

            <div className="form-group">
              <label><span className="required">*</span> Status</label>
              <select>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Due Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label><span className="required">*</span> Priority</label>
              <select>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea placeholder="Task description..."></textarea>
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

export default NewTaskModal;
