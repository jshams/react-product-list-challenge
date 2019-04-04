import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product'

class App extends Component {

  render() {
    const items = inventory.map(({ name, description, price }, i) => {
      return (<Product
        key={i}
        title={name}
        desc={description}
        price={price}
      />)
    })

    return (
      <div className="App" >
        <h1>Show products here</h1>

        <ul className="inventory">
          {items}
        </ul>

        <ul>
          {/* Products listed here */}
        </ul>

      </div>
    );
  }
}

export default App;
