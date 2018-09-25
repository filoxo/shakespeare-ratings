import React from 'react'
import './Review.css'

export default class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localeDate: new Date(props.publish_date).toLocaleString(),
    }
  }
  render() {
    const { rating, author, id } = this.props
    const { localeDate } = this.state
    return (
      <div className="review" id={`review-${id}`}>
        <div className="reviewContent">
          <span className="rating">{rating}</span>
          <p>
            Posted by {author} on {localeDate}
          </p>
        </div>
        <div className="reviewActions">
          <button type="button" className="reviewMoreBtn">
            See full comment
          </button>
        </div>
      </div>
    )
  }
}
