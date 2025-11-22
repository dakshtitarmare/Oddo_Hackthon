import React, { createContext, useState, useEffect } from 'react';
import { getInventory, addItem, updateItem, deleteItem } from '../utils/api';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventory();
        setInventory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  const handleAddItem = async (item) => {
    const newItem = await addItem(item);
    setInventory([...inventory, newItem]);
  };

  const handleUpdateItem = async (id, updates) => {
    const updatedItem = await updateItem(id, updates);
    setInventory(inventory.map((item) => (item.id === id ? updatedItem : item)));
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ inventory, loading, handleAddItem, handleUpdateItem, handleDeleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;