import React, { useState } from 'react';
import './PaginationFooter.css'; // Make sure to include the CSS

const PaginationFooter = ({ totalPages, currentPage, onPageChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(20); // Default items per page

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    onPageChange(1); // Reset to first page when items per page changes
  };

  return (
    <div className="pagination-footer">
      <div className="items-per-page">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="pagination-controls">
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          &laquo; First
        </button>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lsaquo; Prev
        </button>
        <span className="page-number">{currentPage}</span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next &rsaquo;
        </button>
        <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
          Last &raquo;
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
