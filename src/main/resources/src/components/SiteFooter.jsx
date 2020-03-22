import React, {Component} from "react";

/**
 * Footer, you know the thing that is at the bottom of a webpage that has
 * links to things and sometimes a closing statement
 */
export default class SiteFooter extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return (
        <div className={"footer"}>
          <p>
            <a href="https://github.com/abacef/my-website">This</a> site was Made by Mark Nash using <a href="http://sparkjava.com">Spark</a> and <a
              href="https://reactjs.org/">React</a>
          </p>
        </div>
    )
  }
}