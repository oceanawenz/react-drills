import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      dogs: ["Labrador", "Siberian Husky", "Border Collie", "Australian Shepard", "Minni Ausie"]
    }
  }

  render() {
    let dogsToDisplay = this.state.dogs.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">{dogsToDisplay}</div>
    );
  }
}

export default App;


/* <h2>{this.state.dogs[0]}</h2>
       <h2>{this.state.dogs[1]}</h2>
       <h2>{this.state.dogs[2]}</h2>
       <h2>{this.state.dogs[3]}</h2>
       <h2>{this.state.dogs[4]}</h2> */