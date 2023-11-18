// MainLayout.js
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Navigation />
    <div className="content-area">
      <Sidebar />
      <main>{children}</main>
    </div>
  </div>
);

export default MainLayout;

