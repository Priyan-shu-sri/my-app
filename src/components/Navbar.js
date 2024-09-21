import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Import FontAwesome
import NewTaskModal from './NewTaskModal';
  // Import the modal component

const Navbar = () => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to handle modal open and close
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-icon">
            <i className="fas fa-tasks"></i> {/* FontAwesome task icon */}
          </div>
          <div className="navbar-text">
            <h2>Tasks</h2>
            <p>All Tasks</p>
          </div>
        </div>
        <div className="navbar-right">
          <div className="button-group">
            <button className="navbar-button" onClick={openModal}>New Task</button>
            <button className="navbar-button">Refresh</button>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Search" />
            <button className="search-button">
              <i className="fas fa-search"></i> {/* FontAwesome search icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Include the modal component */}
      <NewTaskModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
