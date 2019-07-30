import React, { Component } from "react";
import RSSParser from "rss-parser";
import GasMileageEntry from "./my-car/GasMileageEntry";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const FUELLY_RSS_LINK = "http://www.fuelly.com/car/hyundai/elantra/2008/abacef/377331/rss-us";

export default class MyCar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      linkToMyCar: "",
      items: []
    };

    this.extractDataFromFeed = this.extractDataFromFeed.bind(this);
  }

  componentDidMount() {
    let parser = new RSSParser();
    parser.parseURL(CORS_PROXY + FUELLY_RSS_LINK, this.extractDataFromFeed)
  }

  extractDataFromFeed(err, feed) {
    this.setState({
      linkToMyCar: feed.link,
      items: feed.items
    });

  }

  render() {
    return (
        <div>
          <p>Check out my fuelly gas mileage feed. I log each fill up on fuelly.com</p>
          {this.state.items.map(item => <GasMileageEntry item={item}/>)}
        </div>
    );
  }

}