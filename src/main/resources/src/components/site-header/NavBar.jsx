import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {

  // constructor(props) {
  // 	super(props);
  // }

  render() {
    return (
        <ul className="header">
          <li onClick={this.props.ifNotAPI}><NavLink exact to="/">Welcome</NavLink></li>
          <li onClick={this.props.ifNotAPI}><NavLink to="/stuff">Stuff</NavLink></li>
          <li onClick={this.props.ifAPI}><NavLink to="/bugs">Rest API Tutorial</NavLink></li>
          <li onClick={this.props.ifNotAPI}><NavLink to="/my-car">My Car</NavLink></li>
        </ul>
    )
  }
}