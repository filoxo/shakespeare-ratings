const API_KEY = process.env.REACT_APP_API_AUTH_TOKEN

const options = {
  headers: new Headers({
    'Authorization': API_KEY,
    'Content-Type': 'application/json',
  }),
}

export const getReviews = 
  fetch('http://shakespeare.podium.co/api/reviews', options)
    .then(res => res.json())