import React, { Component } from 'react';

class GroceryForm extends Component {
  state = { name: '', price: '' }

  handleChange = (e) => {
    const { name, price, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.price)
    this.setState({ name: '', price: ''})
  }

  render() {
   
    return (

      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
          required 
          placeholder="Add An Item" 
          />
          <br />
           <input 
          value={this.state.price}
          price="price"
          onChange={this.handleChange}
          required 
          placeholder="Add Price" 
          />
      </form>
    )
  }
}

export default GroceryForm;