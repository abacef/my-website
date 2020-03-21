import React, { Component } from "react";

import NavBar from "./site-header/NavBar"

export default class SiteHeader extends Component {

  render() {
    return (
        <div>

          <table>
            <tbody>
            <tr>
              <td>
                <NavBar />
              </td>
            </tr>
            </tbody>
          </table>

        </div>
    );
  }
}