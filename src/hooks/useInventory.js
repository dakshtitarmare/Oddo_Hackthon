import { useContext } from 'react';
import InventoryContext from '../context/InventoryContext';

const useInventory = () => useContext(InventoryContext);

export default useInventory;