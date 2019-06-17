import React from 'react';
import Item from './components/grocieries/Item'

const List = ({ groceries, name, handleClick }) => (
  <div>
    <h2>{name}; {price}</h2>
    <ul>
      { groceries.map( grocery => <li key={grocery.id}>{grocery.item}: {grocery.price} handleClick={handleClick}</li>) }
    </ul>
  </div>
)


export default List;