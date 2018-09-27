const AUTH_TOKEN = process.env.REACT_APP_API_AUTH_TOKEN

const options = {
  headers: new Headers({
    Authorization: AUTH_TOKEN,
    'Content-Type': 'application/json',
  }),
}

const handleFetchError = errorMsg => {
  return res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(errorMsg)
    }
  }
}

export const getReviews = () =>
  fetch('http://shakespeare.podium.co/api/reviews', options).then(
    handleFetchError('Error loading reviews')
  )

export const getReviewById = id =>
  fetch(`http://shakespeare.podium.co/api/reviews/${id}`, options).then(
    handleFetchError(`Error loading body for ${id}`)
  )
