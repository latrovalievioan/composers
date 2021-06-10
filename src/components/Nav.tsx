import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './Nav.css';

export const Nav = () => {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <nav className="navigation">
      {[
        { to: '/essentials', children: 'Essential Composers' },
        { to: '/popular', children: 'Popular Composers' },
        { to: '/favorites', children: 'Favorite Composers' },
      ].map((props) => (
        <li className="nav-button" key={props.to}>
          <Link
            {...props}
            onClick={() => setCurrentPage(props.to)}
            className={currentPage === props.to ? 'selected-link' : ''}
          />
        </li>
      ))}
    </nav>
  );
};
