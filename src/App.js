import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product'
import CategoryButton from './Category-Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCategory: 'Sports'
    }
  }

  setCategory(cat) {
    this.setState({ currentCategory: cat })
    // this.state.currentCategory = cat
  }

  filterByCat(item) {
    // this.currentCategory = 'Toys'
    console.log(this.state.currentCategory)
    if (this.state.currentCategory == null) return true
    return item.category === this.state.currentCategory
  }

  render() {
    const cats = categories.map((cat) => {
      return (
        <CategoryButton
          key={cat}
          label={cat}
          onClick={(cat) => {
            this.setCategory(cat)
          }}

        />
      )
    })

    // if (currcat === null) return true
    // return currcat === item.cat

    // .filter((item) => { !currentCategory ? pass : item.category === currentCategory)
    // .filter((item) => {item.category == "Toys})

    const items = inventory.filter((item) => this.filterByCat(item)).map(({ name, description, price, category }, i) => {
      return (<Product
        key={i}
        cat={category}
        title={name}
        desc={description}
        price={price}
      />)
    })

    return (
      <div className="App" >
        <h1>PRODUCTS</h1>

        <div className="cat-btns"> {cats} </div>
        <button
          onClick={() => this.setCategory(null)}
          className="reset-filters"
        >Reset filters</button>

        <ul className="inventory">
          {items}
        </ul>


      </div >
    );
  }
}

export default App;
