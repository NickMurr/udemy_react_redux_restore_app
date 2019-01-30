import React from 'react';

const ShopHeader = ({ numItems, total }) => (
  <header className="shop-header row container">
    <h1 className="logo-text-dark">Restore</h1>

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
  </header>
);

export default ShopHeader;
