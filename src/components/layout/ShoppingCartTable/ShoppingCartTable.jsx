import React from 'react';

const ShoppingCartTable = () => (
  <div className="shopping-cart-table">
    <h2>Your Order</h2>
    <table className="table">
      <thead>
        <tr>
          <td>#</td>
          <td>Item</td>
          <td>Count</td>
          <td>Price</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Site Reliability Engineer</td>
          <td>2</td>
          <td>$40</td>
          <td className="text-right">
            <button
              type="button"
              className="btn btn-outline-danger btn-danger bg-light"
            >
              <i className="fa fa-minus-circle" />
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
              <i className="fa fa-trash" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <h5 className="total">Total: $201</h5>
  </div>
);

export default ShoppingCartTable;
