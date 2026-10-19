
import React, { useState } from 'react';
import { addBookAPI } from '../api/allApi';
import { useNavigate } from 'react-router-dom';


function AddBook() {
  const [book, setBook] = useState({bookName: '',author: '',category: '', quantity: ''});

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [edit,setedit]=useState({bookName: 'editbook',author: 'editauthor',category: 'editcategory', quantity: 'editno'})
  const navigation=useNavigate()

  const handleEdit=()=>{
    setedit()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const bookData = {...book, quantity: Number(book.quantity),  imageName: image ? image.name : '' };

      const response = await addBookAPI(bookData);

      alert('Book added successfully!');
      navigation('/books')
      console.log(response.data);

      setBook({ bookName: '', author: '', category: '', quantity: ''});

      setImage(null);
      e.target.reset();
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Check whether the server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Add New Book</h2>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Book Name</label>
                  <input type="text" className="form-control" placeholder="Enter book name" value={book.bookName} onChange={(e) => setBook({ ...book, bookName: e.target.value })} required/>
                </div>

                <div className="mb-3">
                  <label className="form-label">Author</label>
                  <input type="text"  className="form-control" placeholder="Enter author name" value={book.author} onChange={(e) =>setBook({ ...book, author: e.target.value }) }  require />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select  className="form-select" value={book.category}  onChange={(e) => setBook({ ...book, category: e.target.value })}  required>
                    <option value="" disabled>Select category </option>
                    <option>Fiction</option>
                    <option>Self Help</option>
                    <option>Programming</option>
                    <option>Science</option>
                    <option>Biography</option>
                    <option>Love Story</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" placeholder="Enter quantity" min="0" value={book.quantity} onChange={(e) => setBook({ ...book, quantity: e.target.value }) } required/>
                </div>

                <button  type="submit" className="btn btn-primary"  disabled={loading}>{loading ? 'Adding...' : 'Add Book'}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
