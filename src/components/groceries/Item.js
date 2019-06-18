import React from 'react';

const Item = ({ id, name, price, complete, handleClick}) => (
  <li
    style={ complete ? { ...styles.item, ...styles.complete } : styles.item }
    onClick={ () => handleClick(id) }
  >
    { name }: { price }
  </li>
)

const styles = {
  item: {cursor: 'pointer'}, 
  complete: { color: 'grey', textDecoration: 'line-through' },
}

export default Item;
