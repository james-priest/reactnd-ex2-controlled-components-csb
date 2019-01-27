import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    items: []
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value]
    }));
  };

  addItem2 = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === "";
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
          <form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter New Item"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button disabled={this.inputIsEmpty()}>Add</button>
          </form>
          <AddItem onAddItem={this.addItem2} />
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

class AddItem extends Component {
  state = {
    value: ""
  };
  inputIsEmpty = () => {
    return this.state.value === "";
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  addItem = e => {
    e.preventDefault();
    // this.props.onAddItem(e.target.value); // Nope! target is button
    this.props.onAddItem(this.state.value);
  };
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

export default App;
