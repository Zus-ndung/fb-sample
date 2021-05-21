import { useState, useEffect } from 'react';

import { addFirebaseItem, getFirebaseItems } from "../lib/firebase";

function useFbStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const _items = await getFirebaseItems();
    setItems(_items);
  };

  const addItem = async item => {
    const newItem = { text: item.text, done: item.done };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
  };

  return [items, addItem];
}

export default useFbStorage;
