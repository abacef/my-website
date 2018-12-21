import React, { Component } from "react";

export default class RestAPITutorial extends Component {
	render() {
		console.log("Rendering " + this.constructor.name);
		return (
			<div>
				<h2>GOT QUESTIONS?</h2>
				<p>The easiest thing to do is post on
					our <a href="http://forum.kirupa.com">forums</a>.
				</p>
			</div>
		);
	}
}