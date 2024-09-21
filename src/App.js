import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList />
      {/* You can add the rest of the app's content here */}
    </div>
  );
}

export default App;
