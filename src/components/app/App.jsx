import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { withBookStoreService } from '../hoc-helpers';
import { Home, Card } from '../pages';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/card" component={Card} />
  </Switch>
);

export default withBookStoreService()(App);
