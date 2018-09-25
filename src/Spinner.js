import React from 'react'
import './Spinner.css'

const Spinner = () => (
  <span className="spinner" aria-busy="true" role="alert">
    <span className="hideVisually">Loading...</span>
  </span>
)

export default Spinner
