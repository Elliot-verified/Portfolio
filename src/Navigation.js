// Navigation.js
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
    <NavLink to="/" className="home-link">Elliot Waxman</NavLink>
    <div className="nav-links">
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/bookshelf">Bookshelf</NavLink>
      <NavLink to="/writing">Writing</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </nav>
  
);

export default Navigation;
