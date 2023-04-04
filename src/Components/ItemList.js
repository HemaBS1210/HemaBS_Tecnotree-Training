import React from 'react';

function ItemList({ items }) {
  return (
    
    <ol>
        
      {items.map((item, index) => (
        <li key={index.id}>{item.name}</li>
      ))}
    </ol>
  );
}

export default ItemList;
