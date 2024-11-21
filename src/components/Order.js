import React, { useState } from 'react';

function Order() {
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const handleExtrasChange = (e) => {
    const value = e.target.value;
    setExtras(prev =>
      prev.includes(value) ? prev.filter(extra => extra !== value) : [...prev, value]
    );
  };

  return (
    <section id="order">
      <h2>Customize Your Order</h2>
      <form>
        <label>Select Item:</label>
        <select>
          <option value="pizza">Pizza</option>
          <option value="burger">Burger</option>
        </select>

        <label>Quantity:</label>
        <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />

        <label>Add Extras:</label>
        <input type="checkbox" value="Cheese" onChange={handleExtrasChange} /> Cheese
        <input type="checkbox" value="Bacon" onChange={handleExtrasChange} /> Bacon

        <button type="submit">Add to Cart</button>
      </form>
    </section>
  );
}

export default Order;