import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center py-5">
      <i className="fa-solid fa-book-open text-success display-1 mb-4"></i>

      <h1 className="fw-bold">
        Welcome to Library Management System
      </h1>

      <p className="text-secondary mt-3">
        Browse, add, edit and manage your books easily.
      </p>

      <Link to="/books" className="btn btn-success mt-3 px-4">
        View Books
      </Link>
    </div>
  );
}

export default Home;