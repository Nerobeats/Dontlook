import React, { Component } from "react";
import "./App.css";
import animals from "./Animals";
class App extends Component {
  state = {
    animal: animals[0],
    i: 0
  };
  getAnimal = () => {
    let y = this.state.i + 1 === animals.length ? 0 : this.state.i + 1;
    this.setState({
      animal: animals[y],
      i: y
    });
  };
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column bd-highlight mb-3">
          <div className="p-2 bd-highlight justify-content-center">
            <h1>dont look at the {this.state.animal.name}</h1>
          </div>
          <div className="p-2 bd-highlight justify-content-center">
            <img
              className="w-25"
              src={this.state.animal.imageUrl}
              alt="chicken"
            />
          </div>
          <div className="p-2 bd-highlight justify-content-center">
            <h2 style={{ color: "red" }}>{this.state.animal.lost}</h2>
          </div>
          <div className="p-2 bd-highlight justify-content-center">
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => this.getAnimal()}
            >
              Play another Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
