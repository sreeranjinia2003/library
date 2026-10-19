import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fa-solid fa-book-open me-2"></i>
          Library Management System
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/books">
            View Books
          </Link>

          <Link className="nav-link text-white" to="/add-book">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header