const filterReviews = (reviews, filter = 'none') => {
  if (filter === 'none') {
    return reviews;
  }
  return reviews.filter(review => review.rating === filter);
}

export default filterReviews;