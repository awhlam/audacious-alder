const calcPctRecommend = (reviewMetaData) => {
  let totalReviews = parseInt(reviewMetaData.recommended.true) + parseInt(reviewMetaData.recommended.false);
  return Math.round((reviewMetaData.recommended.true / totalReviews) * 100);
}

export default calcPctRecommend;