import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShelfContainer from './components/ShelfContainer/ShelfContainer';
import BinsContainer from './components/BinsContainer/BinsContainer';
import BinEdit from './components/BinEdit/BinEdit';
import BinAdd from './components/BinAdd/BinAdd';


export default (
  <Switch>
    <Route exact path="/" component={ShelfContainer}/>
    <Route path="/bins/:id" component={BinsContainer}/>
    <Route path="/bin/:id" component={BinEdit}/>
    <Route path="/create/:id" component={BinAdd}/>
  </Switch>
)