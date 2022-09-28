import React from 'react';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
