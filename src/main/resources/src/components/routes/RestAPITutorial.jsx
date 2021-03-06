import React, { Component } from "react";

import TopBar from "./rest-api-tutorial/TopBar"
import Entries from "./rest-api-tutorial/Entries"
import Spinner from "../lib/Spinner";

export default class RestAPITutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      modalIsOpen: false,
      message: ""
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
    // fetch("/api/add-item", {
    //   method: "POST",
    //   body: this.state.value
    // }).then(this.addItemResponse);
    // event.preventDefault();
  }

  addItemResponse(response) {
    response.text().then(text => {
      this.setState({message: text});
    });
    if (response.status === 201) {
      this.state.items.push(this.state.value);
      this.setState({items: this.state.items})
    }
  }

  getItems() {
    // fetch("/api/get-items").then(function (response) {
    //   return response.json();
    // }).then((json) => {
    //   console.log(json);
    //   this.setState({items: json.items});
    // });
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  loadingCircleOrData() {
    if (!this.state.items) {
      return <Spinner/>
    } else {
      return <div className={"flex"}>
        {this.state.items.map(item => item)}
      </div>
    }
  }

  render() {
    return (
      <div>
        <TopBar addItem={this.addItem} handleChange={this.handleChange} message={this.state.message}/>
        <Entries loadData={this.loadingCircleOrData}/>
      </div>
    );
  }
}
