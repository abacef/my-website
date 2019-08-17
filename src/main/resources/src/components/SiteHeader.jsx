import React, { Component } from "react";

import NavBar from "./site-header/NavBar"

export default class SiteHeader extends Component {

  render() {
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
                      <NavBar />
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