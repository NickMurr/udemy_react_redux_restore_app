import React from 'react';

const ShoppingCartTable = () => (
  <div className="shopping-cart-table">
    <h2>Your Order</h2>
    <table className="table">
      <thead>
        <th>#</th>
        <th>Item</th>
        <th>Count</th>
        <th>Price</th>
        <th>Action</th>
      </thead>

      <tbody>
        <td>1</td>
        <td>Site Reliability Engineer</td>
        <td>2</td>
        <td>$40</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-danger btn-danger bg-light"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-success bg-light"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            type="button"
            className="btn btn-outline-warning btn-warning bg-light"
          >
            <i className="fa fa-plus-circle" />
          </button>
        </td>
      </tbody>
    </table>

    <div className="total">Total: $201</div>
  </div>
);

export default ShoppingCartTable;
