import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskTable from './TaskTable';  // Adjust the path as needed

// Mock modals
jest.mock('./EditTaskModal', () => ({ isOpen, closeModal, task, onSave }) => (
  isOpen ? <div data-testid="edit-modal">Edit Task Modal</div> : null
));
jest.mock('./DeleteTaskModal', () => ({ isOpen, closeModal, task, onDelete }) => (
  isOpen ? <div data-testid="delete-modal">Delete Task Modal</div> : null
));

describe('TaskTable', () => {
  it('renders task table and tasks correctly', () => {
    render(<TaskTable />);
    expect(screen.getByText(/Assigned To/i)).toBeInTheDocument(); // Check if table headers are present
    expect(screen.getByText(/User 1/i)).toBeInTheDocument(); // Check if task data is rendered
  });

  it('renders edit and delete buttons', () => {
    render(<TaskTable />);
    expect(screen.getAllByText(/Edit/i)).toHaveLength(10); // Assuming 10 tasks are rendered by default
    expect(screen.getAllByText(/Delete/i)).toHaveLength(10);
  });

  it('opens edit modal when edit button is clicked', () => {
    render(<TaskTable />);
    fireEvent.click(screen.getAllByText(/Edit/i)[0]); // Click on the first edit button
    expect(screen.getByTestId('edit-modal')).toBeInTheDocument(); // Check if modal opens
  });

  it('opens delete modal when delete button is clicked', () => {
    render(<TaskTable />);
    fireEvent.click(screen.getAllByText(/Delete/i)[0]); // Click on the first delete button
    expect(screen.getByTestId('delete-modal')).toBeInTheDocument(); // Check if modal opens
  });

  it('tests pagination functionality', () => {
    render(<TaskTable />);
    const nextPageButton = screen.getByText('Next'); // Assuming "Next" is the text for pagination
    fireEvent.click(nextPageButton);
    expect(screen.getByText(/User 11/i)).toBeInTheDocument(); // Ensure tasks from page 2 are loaded
  });
});
