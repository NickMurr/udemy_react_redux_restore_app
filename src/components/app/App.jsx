import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar/Navbar';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </>
);

export default App;
