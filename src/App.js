import React, { Component } from "react";
import "./App.css";
import AddItem from "./AddItem";

class App extends Component {
  state = {
    items: []
  };

  // addItem = event => {
  //   event.preventDefault();
  //   this.setState(oldState => ({
  //     items: [...oldState.items, this.state.value]
  //   }));
  // };

  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - Contolled Components</p>
        </header>
        <main className="App-main">
          <h2>Shopping List</h2>
          <AddItem onAddItem={this.addItem} />
          <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
            Delete Last Item
          </button>

          <p className="items">Items</p>
          <ol className="item-list">
            {this.state.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </main>
      </div>
    );
  }
}

export default App;
