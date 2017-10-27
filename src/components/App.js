import React, { Component } from 'react';
import './App.css';
// import router from '../router.js';
import { Switch, Route } from 'react-router-dom';

// import ShelfContainer from './ShelfContainer/ShelfContainer';
import { getInventory } from '../inventory.js';

import ShelfContainer from './ShelfContainer/ShelfContainer';
import BinsContainer from './BinsContainer/BinsContainer';
import BinEdit from './BinEdit/BinEdit';
import BinAdd from './BinAdd/BinAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: [],
      currentShelf: '',
      currentBin: 'A'
    }

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    getInventory().then(result => this.setState({inventory: result}));
  }

  handleOnClick(stateToChange, nextState) {
    let key = stateToChange;
    let obj = {};
    obj[key] = nextState;
    this.setState(obj);
  }

  render() {
    // console.log(this.state.inventory);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <ShelfContainer 
              handleOnClick={this.handleOnClick}/>}/>

          <Route path="/bins/:id" render={() => <BinsContainer 
              inventory={this.state.inventory}
              currentShelf={this.state.currentShelf}/>}/>

          <Route path="/bin/:id" component={BinEdit}/>
          <Route path="/create/:id" component={BinAdd}/>
        </Switch>
      </div>
    );
  }
}

export default App;
