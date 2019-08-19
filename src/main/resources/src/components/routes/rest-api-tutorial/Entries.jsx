import React, {Component} from "react";

export default class Entries extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        this.props.loadData()
    );
  }
}