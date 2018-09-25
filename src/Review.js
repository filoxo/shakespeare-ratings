import React from 'react'
import './Review.css'

export default class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localeDate: new Date(props.publish_date).toLocaleString(),
      loadingBody: false,
    }
  }
  loadBody = () => {
    this.setState({ loadingBody: true }, this.props.loadReviewBody)
  }
  render() {
    const { rating, author, id, body } = this.props
    const { localeDate, loadingBody } = this.state
    return (
      <div className="review" id={`review-${id}`}>
        <div className="reviewContent">
          <span className="rating">{rating}</span>
          <p>
            Posted by {author} on {localeDate}
          </p>
        </div>
        {!body ? (
          <div className="reviewActions">
            <button
              type="button"
              className="reviewMoreBtn"
              disabled={loadingBody}
              onClick={this.loadBody}
            >
              See full comment
            </button>
          </div>
        ) : (
          <p className="reviewBody">{body}</p>
        )}
      </div>
    )
  }
}
