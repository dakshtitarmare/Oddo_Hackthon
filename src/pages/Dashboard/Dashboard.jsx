import React from 'react';
import Card from '../../components/ui/Card';
import useInventory from '../../hooks/useInventory';

const Dashboard = () => {
  const { inventory } = useInventory();

  const totalItems = inventory.length;
  const lowStock = inventory.filter((item) => item.quantity < 10).length;

  return (
    <div>
      <h1 className="h1 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="h4">Total Items</h3>
          <p className="text-4xl">{totalItems}</p>
        </Card>
        <Card>
          <h3 className="h4">Low Stock</h3>
          <p className="text-4xl">{lowStock}</p>
        </Card>
        <Card>
          <h3 className="h4">Total Value</h3>
          <p className="text-4xl">${inventory.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;