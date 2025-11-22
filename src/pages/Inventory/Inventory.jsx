import React, { useState } from 'react';
import useInventory from '../../hooks/useInventory';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Loader from '../../components/ui/Loader';
import { validateQuantity } from '../../utils/validators';

const Inventory = () => {
  const { inventory, loading, handleAddItem, handleUpdateItem, handleDeleteItem } = useInventory();
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, price: 0 });

  const onAdd = () => {
    if (newItem.name && validateQuantity(newItem.quantity) && newItem.price > 0) {
      handleAddItem(newItem);
      setNewItem({ name: '', quantity: 0, price: 0 });
    } else {
      alert('Invalid item details');
    }
  };

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="h1 mb-6">Inventory Management</h1>
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="h4 mb-4">Add New Item</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input placeholder="Item Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
          <Input type="number" placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })} />
          <Input type="number" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) || 0 })} />
          <Button onClick={onAdd}>Add Item</Button>
        </div>
      </div>
      <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-[var(--alice-blue)]">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Quantity</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.quantity}</td>
              <td className="p-4">${item.price.toFixed(2)}</td>
              <td className="p-4 space-x-2">
                <Button variant="secondary" onClick={() => handleUpdateItem(item.id, { quantity: item.quantity + 1 })}>Increment</Button>
                <Button variant="secondary" onClick={() => handleUpdateItem(item.id, { quantity: Math.max(0, item.quantity - 1) })}>Decrement</Button>
                <Button variant="danger" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;