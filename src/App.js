// App.js
import React from 'react';
import './styles.css';
import './Sidebar.css';
import MainLayout from './MainLayout';
import Contact from './Contact';
import HomePage from './HomePage';
import Writing from './Writing';
import BookShelf from './BookShelf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/BookShelf' element= {<BookShelf />}/>
        <Route path='/Writing' element= {<Writing />}/>
        <Route path='/Contact' element= {<Contact />}/>
        {/* other routes */}
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
