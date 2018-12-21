import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {

	render() {
		console.log("Rendering " + this.constructor.name);
		return (
			<ul className="header">
				<li><NavLink exact to="/">Welcome</NavLink></li>
				<li><NavLink to="/stuff">Stuff</NavLink></li>
				<li><NavLink to="/bugs">Rest API Tutorial</NavLink></li>
			</ul>
		)
	}
}