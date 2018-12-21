import React, { Component } from 'react';

import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import SiteHeader from "./SiteHeader";

export default class AppMain extends Component {

	render() {
		console.log("Rendering " + this.constructor.name);
		return (
			<BrowserRouter>
				<div>
					<SiteHeader />
					<Routes />
				</div>
			</BrowserRouter>


			/*

<!--
						Projects
						Courses and Schedules
						Contact
						Professional Interests
						Work Experience
						My Car
						Rest API Tutorial
						WebAssembly Sudoku Solver Tutorial
						-->

			/*
			<table style="width: 100%" border=0 cellpadding=0 cellspacing=10 bgcolor="#CCCCCC" >
				<tr>
					<th align="right" >Projects</th>
							<th style="width: 157px">Courses and Schedules</th>
					<th style="width: 1px">Interests</th>
					<th style="width: 120px">Work Experience</th>
					<th align="left">My car</th>
				</tr>
			</table>

		<font size=-2>
	Made by Mark Nash using <a href="http://sparkjava.com">spark</a> and
		<a href="https://freemarker.apache.org/">freemarker</a>. Please send comments to ${commentsEmail}
		<br/>Your IP address is this just in case you were wondering
		</font>
		*/

			/*
			<div className="App-header">
				<img src="img/me.jpg" className="App-logo" alt="logo" />

				<h2>Welcome to React</h2>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload!
				</p>
				<p>{this.state.greeting}</p>
			</div>
			*/
		);
	}
}