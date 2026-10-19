
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getBookByIdAPI, editBookAPI } from '../api/allApi';


function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch the selected book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookByIdAPI(id);
        const book = response.data;

        setBookName(book.bookName || book.name || '');
        setAuthor(book.author || '');
        setCategory(book.category || '');
        setQuantity(book.quantity ?? '');
      } catch (error) {
        console.log('Error fetching book:', error);
        alert('Unable to fetch book details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  // Update the selected book
 const handleSubmit = async (e) => {
  e.preventDefault();

  const updatedBook = {
    bookName,
    author,
    category,
    quantity: Number(quantity)
  };

  try {
    await editBookAPI(id, updatedBook);
    alert('Book updated successfully!');
    navigate('/books');
  } catch (error) {
    alert('Unable to update book');
    console.log(error);
  }
};
  if (loading) {
    return (
      <div className="container py-4">
        <h4>Loading book details...</h4>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">Edit Book</h2>

      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Book Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Self Help">Self Help</option>
                    <option value="Programming">Programming</option>
                    <option value="Science">Science</option>
                    <option value="Biography">Biography</option>
                    <option value="love Story">Love Story</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="0"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary me-2" onClick={handleSubmit}>
                  Update Book
                </button>

                <Link to="/books" className="btn btn-secondary">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
