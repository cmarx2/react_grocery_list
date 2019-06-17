import React from 'react';

class GroceryForm extends React.Component {
  state = { item: '', price: '' }

  handleChange = (e) => {
    const { item, price, value } = e.target
    this.setState({ [item]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item, this.state.price)
    this.setState({ item: '', price: ''})
  }

  render() {
   
    return (

      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.item}
          item="item"
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