import axios from 'axios';

const fetchReviews = (id, sort = 'helpful') => {
  console.log('sorting reviews: ', id, ' - ', sort);

  return axios.get('/reviews', {params: {
    product_id: id,
    count: 100000,
    sort: sort
  }})
}

export default fetchReviews;