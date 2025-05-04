import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ logoSrc }) {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logoSrc} alt="Logo" style={{ height: '40px' }} />
      </Link>
    </div>
  );
}

export default Logo;