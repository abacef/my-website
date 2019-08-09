import React, { Component } from "react";

export default class RestAPITutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };

    this.addEntry = this.addEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addEntry(event) {
    console.log(this.state.value)
    fetch("api/add-item", {
      method: "POST",
      body: this.state.value
    }).then(function (response) {
      console.log(response);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>

        <form onSubmit={this.addEntry}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}
