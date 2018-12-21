import React, { Component } from "react";

import NavBar from "./site-header/NavBar"

export default class SiteHeader extends Component {

	constructor(props) {
		super();

		this.state = {
			inAPIState: false
		};

		this.toggleAPIStateOn = this.toggleAPIStateOn.bind(this);
		this.toggleAPIStateOff = this.toggleAPIStateOff.bind(this);
	}

	toggleAPIStateOn() {
		this.setState({inAPIState: true});
	}

	/** Will get called by grandchildren (children of NavBar) */
	toggleAPIStateOff() {
		this.setState({inAPIState: false});
	}

	render() {
		console.log("Rendering " + this.constructor.name);

		if (this.state.inAPIState) {
			return (
				<div onClick={this.toggleAPIStateOn}>
					<NavBar />
				</div>
			);
		}

		// else
		return (
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

							<tr onClick={this.toggleAPIStateOn}>
								<NavBar />
							</tr>

						</table>
					</td>

				</tr>
			</table>
		);
	}
}