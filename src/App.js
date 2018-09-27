import React, { Component } from 'react'
import './App.css'
import Spinner from './Spinner'
import Review from './Review'
import { getReviews, getReviewById } from './resource'

class App extends Component {
  state = {
    reviews: null,
  }
  componentDidMount() {
    getReviews()
      .then(({ data: reviews }) => {
        this.setState({ reviews })
      })
      .catch(err => {
        this.setState({ err })
      })
  }
  loadSingleReview = reviewIndex => {
    const singleReview = this.state.reviews[reviewIndex]
    getReviewById(singleReview.id).then(({ data: review }) => {
      const reviews = [...this.state.reviews]
      const { body } = review
      reviews[reviewIndex] = { ...singleReview, body }
      this.setState({ reviews })
    })
  }
  render() {
    const { reviews } = this.state
    return (
      <React.Fragment>
        {reviews === null ? (
          <Spinner />
        ) : (
          reviews.map((review, i) => (
            <Review
              key={review.id}
              loadReviewBody={() => this.loadSingleReview(i)}
              {...review}
            />
          ))
        )}
      </React.Fragment>
    )
  }
}

export default App
