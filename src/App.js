import React, {Component } from 'react';
import List from './components/groceries/List';
import GroceryForm from './components/groceries/GroceryForm';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Apples", price: "$1.00", complete: true, },
      { id: 2, name: "Chicken", price: "$5.00", complete: false, },
      { id: 3, name: "Broccoli", price: "$3.00", complete: false, },
    ]
  };

  handleClick = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( item => {
        if(item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1)
  }

  addItem = (name, price) => {
    const { items } = this.state;
    const newItem = { id: this.getUniqId(), name, price, complete: false }
    this.setState({ items: [newItem, ...items]});
  }

  // renderGroceries = () => {
  //   const { groceries, } = this .state;
  //   return groceries.map( grocery => {
  //     return (
  //       <li key={grocery.id}>{grocery.item}: {grocery.price}</li>
  //     )
  //   })
  // };
  
  render() {
    const { items } = this.state;
    return (
      <div>
      <GroceryForm addItem={this.addItem} />
      <List name="Grocery List" items={ items } handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
