import React, { Component } from 'react';
import BinsHeader from './BinsHeader';
import { Link } from 'react-router-dom';
import Bin from './Bin/Bin';

class BinsContainer extends Component {
  render () {
  let inventory = this.props.inventory;
  inventory = inventory.filter(bin => bin.product_id[0] == this.props.currentShelf)

  const bins = inventory.map((bin) => {
    console.log(bin)
    return <Bin data={bin}/>
  })

    return (
      <div>
        <BinsHeader currentShelf={this.props.currentShelf}/>
        <div>
        { bins }
        </div>

      </div>
    )
  }
}

export default BinsContainer