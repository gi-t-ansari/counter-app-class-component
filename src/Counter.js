import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <div id="container">
        <h1>COUNTER APP</h1>
        <h2 id="counter">{`Count: ${this.state.counter}`}</h2>
        <button onClick={this.increment} className="button increment">Increment</button>
       <button onClick={this.decrement} className="button decrement">Decrement</button>
        <button onClick={this.reset} className="button reset">Reset</button>
      </div>
    );
  }
}

export default Counter;
