import React, { Component } from 'react';
import {
	Route,
	NavLink,
	BrowserRouter
} from "react-router-dom";
import Welcome from "./Welcome";
import Stuff from "./Stuff";
import Contact from "./Contact";

export default class App extends Component {

	constructor(props) {
		super();
	}

	render() {
		console.log("rendering " + this.constructor.name);
		return (
			<BrowserRouter>
				<div>
					<table className="basic-info">
						<tr>
							<td>
								<img src="/img/me.jpg" width="150px" alt="logo"/>
							</td>
							<td>
								<table>
									<tr>
										<h2>Mark Nash</h2>
									</tr>
									<tr>
										<h2>BS/MS Computer Science student at Rochester Institute of Technology</h2>
									</tr>
									<tr>
										<h2>Expected graduation: May 2021</h2>
									</tr>
									<tr>
										<ul className="header">
											<li><NavLink exact to="/">Welcome</NavLink></li>
											<li><NavLink to="/stuff">Stuff</NavLink></li>
											<li><NavLink to="/contact">Contact</NavLink></li>
										</ul>
									</tr>
								</table>
							</td>
						</tr>
					</table>

					<div className="content">
						<Route exact path="/" component={Welcome}/>
						<Route path="/stuff" component={Stuff}/>
						<Route path="/contact" component={Contact}/>
					</div>
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