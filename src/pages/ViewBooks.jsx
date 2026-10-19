
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooksAPI, deleteBookAPI } from '../api/allApi';


function ViewBooks() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from the backend
  const getBooks = async () => {
    try {
      const response = await getAllBooksAPI();
      setBooks(response.data);
    } catch (error) {
      console.log('Error fetching books:', error);
      alert('Unable to load books. Please check your server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Search books by name
  const filteredBooks = books.filter((book) =>
    (book.bookName || book.name || '')
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Delete a book from the backend
  const deleteBook = async (id) => {
    try {
      await deleteBookAPI(id);

      // Update the table after deleting
      setBooks(books.filter((book) => book.id !== id));

      alert('Book deleted successfully!');
    } catch (error) {
      console.log('Error deleting book:', error);
      alert('Unable to delete book.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">View Books</h2>

      <div className="row mb-4">
        <div className="col-md-10 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by book name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-primary w-100"
            onClick={() => setSearch(search.trim())}
          >
            Search
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading books...
                </td>
              </tr>
            ) : (
              <>
                {filteredBooks.map((book,index) => (
                  <tr key={book.id}>
                    <td>{index+1}</td>
                    <td>{book.bookName || book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.quantity}</td>
                    <td>
                      <Link
                        to={`/edit-book/${book.id}`}
                        className="btn btn-sm btn-primary me-2 mb-1"
                      >
                        Edit
                      </Link>

                      <button className="btn btn-sm btn-danger mb-1"  onClick={() => deleteBook(book.id)}>  Delete</button>
                      <Link className="btn btn-sm btn-success mb-1 ms-2"   to={`/review/${book.id}`}> Give Review</Link>
                    </td>
                  </tr>
                ))}

                {filteredBooks.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No books found.
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBooks;
