import React, { Component } from "react";

import NavBar from "./site-header/NavBar"

export default class SiteHeader extends Component {

	constructor(props) {
		super();

		this.state = {
			inAPIState: false
		}

	}

	render() {

		if (this.state.inAPIState) {
			return <NavBar/>;
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

							<tr>
								<NavBar />
							</tr>

						</table>
					</td>

				</tr>
			</table>
		);
	}
}