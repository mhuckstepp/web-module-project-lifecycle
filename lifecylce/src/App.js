import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> test </h1>
        </header>
      </div>
    );
  }
}

export default App;
