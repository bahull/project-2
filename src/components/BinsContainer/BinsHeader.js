import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BinsHeader extends Component {
  render () {
    return (
      <div className="bins-header">
        <Link to='/' >
          <div>
            <img src="../../logo.png" className="bins-header-logo" alt="Shelfie"/>
          </div>
        </Link>
        <div>
          <span className="bins-header-name">
            Shelf {this.props.currentShelf}
          </span>
        </div>
      </div>
    )
  }
}

export default BinsHeader