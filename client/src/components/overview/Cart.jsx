import React, { useState, useEffect } from 'react';

const Cart = function ({ skus }) {
  const [size, setSize] = useState(null);

  const skusArray = [];
  const hash = {};
  const selectSize = 'Select Size';

  useEffect(() => {
    setSize(null)
  }, [skus])


  for (const key in skus) {
    if (key == 2275494) {
      skusArray.push({ key: {quantity: skus[key].quantity, size: 'XXL'}})
    } else {
      skusArray.push({ key: skus[key] });
    }
  }

  for (let i = 0; i < skusArray.length; i++) {
    if (!hash[skusArray[i].key.size]) {
      hash[skusArray[i].key.size] = skusArray[i].key.quantity;
    }
  }


  const renderQuantity = () => {
    const quantArray = [];
    const sizeQuant = hash[size] > 15 ? 15 : hash[size]
    if (!size) {
      return (
        <option
          disabled>
          -
        </option>
      );
    } else if (!hash) {
      return (
        <option>
          OUT OF STOCK
        </option>
      )
    }
    for (let i = 1; i <= sizeQuant; i++) {
      quantArray.push(
        <option
          key={i}>
          {i}
        </option>,
      );
    }
    return quantArray;
  };



  return (
    <div className="cartContainer">
      <select className="quantDrop">
        {renderQuantity()}
      </select>
      <select className="sizeDrop"
        value={size ? size : selectSize}
        onChange={(e) => {
          setSize(e.target.value);
        }}>
        <option
          key={selectSize}
          value={selectSize}>
          {selectSize}
        </option>
        {skusArray.map((sku, idx) => (
          <option
            key={idx}>
            {sku.key.size}
          </option>
        ))}
      </select>
      <button className="cartButton">
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
