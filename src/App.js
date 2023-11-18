import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio'; // This should match the filename of your Portfolio component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          {/* If you have other routes, define them here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
