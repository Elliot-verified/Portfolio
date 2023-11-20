// MainLayout.js
import Navigation from './Navigation';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Navigation />
    <div className="content-area">
      
      <main>{children}</main>
    </div>
  </div>
);

export default MainLayout;

