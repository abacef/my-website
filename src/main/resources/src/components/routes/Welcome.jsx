import React, { Component } from "react";

export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: "This is an unfetched greeting. This frontend must not be communicating with the backend correctly",
    }
  }

  componentDidMount() {
    fetch("/api/greet").then(function (response) {
      return response.text();
    }).then((text) => {
      this.setState({greeting: text})
    });
  }

  render() {
    return (
      <div className={"welcome"}>
        <h2>{this.state.greeting}</h2>

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

                </tbody>
              </table>
            </td>

          </tr>
          </tbody>
        </table>

        <p>Welcome to my website. Take a look around at my interests and hobbies.</p>
        <p>
          Don't forget to check out and interact with the basic REST API (this website's bug tracker) and an example
          of the epicness of WebAssembly (Sudoku solver).
        </p>

      </div>
    );
  }

}