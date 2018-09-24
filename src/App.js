import React, { Component } from 'react'
import './App.css';
import Spinner from './Spinner'
import {getReviews} from './resource'

class App extends Component {
  state = {
    reviews: null,
  }
  componentDidMount() {
    getReviews.then(({data: reviews}) => {
      this.setState({reviews})
    })
  }
  render() {
    const {reviews} = this.state
    return (
      <div className="App">
        <nav className="nav">
          <h1 className="title">Shakespeare Reviews</h1>
        </nav>
        <main>
          {reviews === null 
            ? <Spinner/>
            : reviews.map(review => <div key={review.id}></div>)}
        </main>
      </div>
    );
  }
}

export default App;
