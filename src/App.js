import React, {Component } from 'react';
import List from './components/groceries/List';
import GroceryForm from './components/groceries/GroceryForm';

class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "Apples", price: "$1.00", complete: true, },
      { id: 2, item: "Chicken", price: "$5.00", complete: false, },
      { id: 3, item: "Broccoli", price: "$3.00", complete: false, },
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
    const { groceries } = this.state;
    const grocery = { id: this.getUniqId(), item, price, complete: false }
    this.setState({ groceries: [grocery, ...groceries]});
  }

  renderGroceries = () => {
    const { groceries, } = this .state;
    return groceries.map( grocery => {
      return (
        <li key={grocery.id}>{grocery.item}: {grocery.price}</li>
      )
    })
  };
  
  render() {
    const { groceries } = this.state;
    return (
      <div>
      <GroceryForm />
      <List name="Grocery List" groceries={ groceries } handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
