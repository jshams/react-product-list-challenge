import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product'
import CategoryButton from './Category-Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: null
    }
  }

  setCategory(cat) {
    console.log(cat)
    this.setState({ currentCategory: cat })
  }

  render() {
    const cats = categories.map((cat) => {
      return (
        <CategoryButton
          key={cat}
          label={cat}
          onClick={(cat) => this.setCategory(cat)}

        />
      )
    })


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
