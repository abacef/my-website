import React, { Component } from "react";

import NavBar from "./site-header/NavBar"

export default class SiteHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inAPIState: false
    };

    this.toggleAPIStateOn = this.toggleAPIStateOn.bind(this);
    this.toggleAPIStateOff = this.toggleAPIStateOff.bind(this);
    this.navBarComponent = this.navBarComponent.bind(this);
  }

  /** Will get called by clicking anything but the rest api tutorial in the nav bar */
  toggleAPIStateOn() {
    this.setState({inAPIState: true});
  }

  /** Will get called by clicking the rest api tutorial in the nav bar */
  toggleAPIStateOff() {
    this.setState({inAPIState: false});
  }

  /**
   * Returns a nav bar component with the hooks for turning on and off the rendering of the
   * summary text and the image of my face when necessary
   */
  navBarComponent() {
    return <NavBar ifAPI={this.toggleAPIStateOn} ifNotAPI={this.toggleAPIStateOff}/>
  }

  render() {
    if (this.state.inAPIState) {
      return (
        this.navBarComponent()
      );
    }

    // else
    return (
      <table className="basic-info">
        <tbody>
          <tr>

            <td>
              <img src="/img/me.jpg" width="150px" alt="logo"/>
            </td>

            <td>
              <table>
                <tbody>

                  <tr>
                    <td>
                      <h2>Mark Nash</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h2>BS/MS Computer Science student at Rochester Institute of Technology</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h2>Expected graduation: Dec 2020</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {this.navBarComponent()}
                    </td>
                  </tr>

                </tbody>
              </table>
            </td>

          </tr>
        </tbody>
      </table>
    );
  }
}