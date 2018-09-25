const AUTH_TOKEN = process.env.REACT_APP_API_AUTH_TOKEN

const options = {
  headers: new Headers({
    Authorization: AUTH_TOKEN,
    'Content-Type': 'application/json',
  }),
}

export const getReviews = fetch(
  'http://shakespeare.podium.co/api/reviews',
  options
).then(res => res.json())

export const getReviewById = id =>
  fetch(`http://shakespeare.podium.co/api/reviews/${id}`, options).then(res =>
    res.json()
  )
