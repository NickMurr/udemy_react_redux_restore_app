import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../layout/Navbar/Navbar';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import '../scss/style.scss';
import ShopHeader from '../layout/ShopHeader/ShopHeader';

const App = () => (
  <main role="main" className="container">
    <Navbar />
    <ShopHeader numItems={5} total={210} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </main>
);

export default App;
