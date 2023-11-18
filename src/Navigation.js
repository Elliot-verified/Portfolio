// Navigation.js
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/bookshelf">Bookshelf</NavLink>
    <NavLink to="/writing">Writing</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);

export default Navigation;
