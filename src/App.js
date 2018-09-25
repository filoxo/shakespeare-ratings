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
    getReviews.then(({ data: reviews }) => {
      this.setState({ reviews })
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
      <div className="App">
        <nav className="nav">
          <h1 className="title">Shakespeare Reviews</h1>
        </nav>
        <main>
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
        </main>
      </div>
    )
  }
}

export default App
