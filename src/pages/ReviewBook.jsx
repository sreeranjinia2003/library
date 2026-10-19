import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReviewAPI } from '../api/allApi';

function ReviewBook() {
  const { id } = useParams();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReview = () => {
    if (review.trim() === '') {
      alert('Please enter a review');
    } else if (rating === 0) {
      alert('Please select a star rating');
    } else {
      const data = {
        bookId: id,
        review: review,
        rating: rating
      };

      addReviewAPI(data)
        .then(() => {
          alert('Review added successfully');
          setReview('');
          setRating(0);
        })
        .catch(() => {
          alert('Unable to add review');
        });
    }
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-3">Give Book Review</h2>

        <label className="form-label">Your Rating</label>

        <div className="mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                fontSize: '35px',
                color: star <= rating ? 'orange' : 'lightgray',
                cursor: 'pointer',
                marginRight: '5px'
              }}
            >
              ★
            </span>
          ))}
          <p className="mb-0">
            {rating === 0 ? 'Select your rating' : `${rating} out of 5 stars`}
          </p>
        </div>

        <label className="form-label">Your Review</label>

        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button className="btn btn-success w-25 ms-5" onClick={handleReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default ReviewBook;