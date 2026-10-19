import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ViewBooks from './pages/ViewBooks';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ReviewBook from './pages/ReviewBook';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<ViewBooks />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
             <Route path="/review/:id" element={<ReviewBook />} />
          </Routes>
        

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;