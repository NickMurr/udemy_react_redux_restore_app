import React from 'react';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => (
  <header className="shop-header row container">
    <Link to="/">
      <h1 className="logo text-dark">Restore</h1>
    </Link>
    <Link to="/cart">
      <div className="shopping-cart">
        <div>
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems}
          {'   '}
          items ($
          {total}
)
</div>
      </div>
    </Link>
  </header>
);

export default ShopHeader;
