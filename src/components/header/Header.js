import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add Inventory</Link>
    </div>
  );
}

export default Header;
