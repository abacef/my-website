import React, { Component } from "react";
import RSSParser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default class MyCar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: "",
    };
    this.parseGasMilageFeed = this.parseGasMilageFeed.bind(this);
  }

  componentDidMount() {
    let parser = new RSSParser();
    parser.parseURL(CORS_PROXY + "http://www.fuelly.com/car/hyundai/elantra/2008/abacef/377331/rss-us", function(err, feed) {
      console.log(feed.title);
      feed.items.forEach(function(entry) {
        console.log(entry.title + ':' + entry.link);
      })
    })
  }

  parseGasMilageFeed(xmlText) {

  }

  render() {
    return (
        <div>
          <p>Check out my fuelly gas mileage feed. I log each fill up on fuelly.com</p>
          <h2>{this.state.greeting}</h2>
        </div>
    );
  }

}