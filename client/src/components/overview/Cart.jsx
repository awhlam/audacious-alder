import React from 'react';

const Cart = function () {
  return (
    <div className="box">
      <h4>Cart</h4>
      <select>
        <option value="one">
          1
        </option>
        <option value="two">
          2
        </option>
        <option value="three">
          3
        </option>
      </select>
      <select>
        <option value="extra-small">
          XS
        </option>
        <option value="small">
          S
        </option>
        <option value="medium">
          M
        </option>
        <option value="large">
          L
        </option>
        <option value="extra-large">
          XL
        </option>
      </select>
      <button>
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
