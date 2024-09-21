import React from 'react';
import './DeleteTaskModal.css';

const DeleteTaskModal = ({ isOpen, closeModal, task, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h3>Delete</h3>
        </div>
        <div className="popup-body">
          <p>Do you want to delete task "{task?.assignedTo}"?</p>
        </div>
        <div className="popup-footer">
          <button className="btn btn-secondary" onClick={closeModal}>No</button>
          <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
