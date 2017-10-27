import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Bin extends Component {
  render () {
    // console.log(this.props.date);
    return (
        <div onClick={(e) => this.props.handleOnClick('currentShelf', this.props.data)}>
          <p>{this.props.data.product_id}</p>
        </div>
    )
  }
}

export default Bin