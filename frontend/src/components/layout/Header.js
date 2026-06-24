import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header style={{ padding: '10px 20px', background: '#f0f0f0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '20px', fontWeight: 'bold' }}>Task Manager</Link>
      <nav>
        {isAuthenticated ? (
          <button onClick={logout} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer', fontSize: '16px' }}>Logout</button>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;