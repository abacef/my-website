import React, { Component } from 'react';

class App extends Component {

	constructor(props) {
		super();

		this.state = {
			greeting: "This is an unfetched greeting"
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
		return (
			<div>

				<table>
					<tr>
						<td>
							<img src="/img/me.jpg" width="150px" alt="logo"/>
						</td>
						<td>
							Mark Nash <br/>
							BS/MS Computer Science student at Rochester Institute of Technology <br/>
							Expected graduation: May 2021
						</td>
					</tr>
				</table>

				<table>
					<tr>
						<th>Projects</th>
						<th>Courses and Schedules</th>
						<th>Interests</th>
						<th>Work Experience</th>
						<th>My car</th>
						<th>{this.state.greeting}</th>
					</tr>
				</table>


			</div>



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

export default App;
