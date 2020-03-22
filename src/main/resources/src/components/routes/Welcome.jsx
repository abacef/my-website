import React, { Component } from "react";

export default class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      greeting: "Hello!",
    }
  }

  componentDidMount() {
    // fetch("/api/greet").then(function (response) {
    //   return response.text();
    // }).then((text) => {
    //   this.setState({greeting: text})
    // });
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

        <p>Welcome to my website. This is a work in progress.</p>
        <h3>Implemented:</h3>
        <ul>
          <li>Basic website design considerations</li>
          <li>You can see my most updated fuel economy for my Hyundai Elantra
            through Fuelly (RSS feed from Fuelly.com)</li>
        </ul>
        <h3>In Progress:</h3>
        <ul>
          <li>Sudoku Solver performance comparison between the browser's
            javascript, sending it to a server to be solved, and using
            WebAssembly in the browser</li>
          <li>A fictitious Bug tracker for my website (demonstration of a REST API queried microservice)</li>
        </ul>

      </div>
    );
  }

}