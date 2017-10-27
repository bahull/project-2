import React, { Component } from 'react'
import ShelfHeader from './ShelfHeader';
import Shelf from './Shelf/Shelf';

class ShelfContainer extends Component {
  render () {

  const shelves = ['A', 'B', 'C', 'D'];

  const rows = shelves.map((row) => 
    <Shelf data={row} handleOnClick={this.props.handleOnClick}/>
  )

    return (
      <div>
        <ShelfHeader />
        <div>
          { rows }
        </div>
      </div>
    )
  }
}

export default ShelfContainer