import React, { Component } from "react";

export default class Welcome extends Component {

  constructor(props) {
    super();

    this.state = {
      greeting: "This is an unfetched greeting. This frontend must not be communicating with the backend correctly",
    }
  }

  componentDidMount() {
    fetch("/greet").then(function (response) {
      return response.text();
    }).then((text) => {
      this.setState({greeting: text})
    });
  }

  render() {
    console.log((this.state._mounted ? "Re-" : "") + "Rendering " + this.constructor.name);
    return (
      <div>
        <h2>{this.state.greeting}</h2>
        <p>Welcome to my website. Take a look around at my interests and hobbies.</p>
        <p>
          Don't forget to check out and interact with the basic REST API (this website's bug tracker) and an example
          of the epicness of WebAssembly (Sudoku solver).
        </p>
      </div>
    );
  }

}