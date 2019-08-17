import React, { Component } from "react";

export default class RestAPITutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.addItemResponse = this.addItemResponse.bind(this);
    this.getItems = this.getItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadingCircleOrData = this.loadingCircleOrData.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  addItem(event) {
    fetch("/api/add-item", {
      method: "POST",
      body: this.state.value
    }).then(this.addItemResponse);
    event.preventDefault();
  }

  addItemResponse(response) {
    console.log(response);
    if (response.status === 201) {
      this.state.items.push(this.state.value);
      this.setState({items: this.state.items})
    }
  }

  getItems() {
    fetch("/api/get-items").then(function (response) {
      return response.json();
    }).then((json) => {
      console.log(json);
      this.setState({items: json.items});
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  loadingCircleOrData() {
    if (!this.state.items) {
      return <div className="loader"/>
    } else {
      return <div className={"flex"}>
        {this.state.items.map(item => item)}
      </div>
    }
  }

  render() {
    return (
      <div>

        <form onSubmit={this.addItem}>
          <label>
            Name:
            <input type="text" 
                   value={this.state.value}
                   onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {this.loadingCircleOrData()}

      </div>
    );
  }
}
