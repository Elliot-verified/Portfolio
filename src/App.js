// App.js
import React from 'react';
import './styles.css';
import './Sidebar.css';
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* other routes */}
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
