const calcAvgTotalReviews= (reviewsMeta) => {
  let stars = 0;
  let reviews = 0;

  for (let key in reviewsMeta.ratings) {
    stars += Number(reviewsMeta.ratings[key]) * Number(key)
    reviews += Number(reviewsMeta.ratings[key])
  }

  return {
    avgStars: (stars/reviews).toFixed(1),
    reviews: reviews
  }
}

export default calcAvgTotalReviews;