const calcPctRecommend = (reviewsMetaData) => {
  let totalReviews = parseInt(reviewsMetaData.recommended.true) + parseInt(reviewsMetaData.recommended.false);
  return Math.round((reviewsMetaData.recommended.true / totalReviews) * 100);
}

export default calcPctRecommend;