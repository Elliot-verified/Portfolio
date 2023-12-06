// Navigation.js
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
    <a href="/" class="home-link">Elliot Waxman</a>

    <div className="nav-links">
      {/* <NavLink to="/projects">Projects</NavLink> */}
      <NavLink to="/bookshelf">Bookshelf</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {/* <NavLink to="/contact">Contact</NavLink> */}
    </div>
  </nav>
  
);

export default Navigation;
