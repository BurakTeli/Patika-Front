// src/components/Layout.tsx

// Import required modules from React Router and CSS
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

// Layout component that defines the main structure of the app
const Layout = () => {
  return (
    <>
      {/* Navigation bar with links to different pages */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/authors">Yazarlar</Link></li>
          <li><Link to="/books">Kitaplar</Link></li>
          <li><Link to="/categories">Kategoriler</Link></li>
          <li><Link to="/publishers">Yayınevleri</Link></li>
          <li><Link to="/borrows">Ödünç Alma</Link></li>
        </ul>
      </nav>

      {/* Main content area where nested routes will be rendered */}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
