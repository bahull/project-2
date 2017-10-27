import React, { Component } from 'react'

class ShelfHeader extends Component {
  render () {
    return (
      <div>
        <div className="shelf-header">
          <img src="../../logo.png" className="shelf-header-logo" alt="Shelfie"/>
          <span className="shelf-header-name">
            SHELFIE
          </span>
        </div>
      </div>
    )
  }
}

export default ShelfHeader