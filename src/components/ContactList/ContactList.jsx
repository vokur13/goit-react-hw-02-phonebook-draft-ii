import React from 'react';

export const ContactList = ({ list, onDelete }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id} style={{ display: 'flex' }}>
          <p style={{ marginRight: '5px' }}>{item.name + ':'}</p>
          <p>{item.number}</p>
          <button
            type="button"
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
