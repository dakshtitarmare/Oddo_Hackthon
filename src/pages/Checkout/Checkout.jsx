import React, { useState } from 'react';
import useInventory from '../../hooks/useInventory';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
// Assume api has processCheckout

const Checkout = () => {
  const { inventory } = useInventory();
  const [selectedItems, setSelectedItems] = useState([]); // Array of {id, quantity}
  const [customerInfo, setCustomerInfo] = useState({ name: '', address: '' });

  const addToCart = (itemId, qty) => {
    setSelectedItems([...selectedItems, { id: itemId, quantity: qty }]);
  };

  const onCheckout = () => {
    // Process checkout, update inventory
    alert('Checkout processed');
  };

  return (
    <div>
      <h1 className="h1 mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="h4 mb-4">Select Items</h3>
          {inventory.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} (${item.price})</span>
              <Input type="number" className="w-20" onChange={(e) => addToCart(item.id, parseInt(e.target.value) || 0)} />
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="h4 mb-4">Customer Info</h3>
          <Input placeholder="Name" value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
          <Input placeholder="Address" value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} />
          <p className="mt-4">Total: ${selectedItems.reduce((acc, s) => acc + (inventory.find(i => i.id === s.id)?.price || 0) * s.quantity, 0).toFixed(2)}</p>
          <Button onClick={onCheckout} className="mt-4">Complete Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;