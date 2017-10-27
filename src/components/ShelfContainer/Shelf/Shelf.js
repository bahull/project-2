import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Shelf extends Component {
  render () {
    return (
        <div onClick={(e) => this.props.handleOnClick('currentShelf', this.props.data)}>
        <Link to={`/bins/${this.props.data[0]}`}>
          <div>
            Shelf {this.props.data}
          </div>
        </Link>
        </div>
    )
  }
}

export default Shelf