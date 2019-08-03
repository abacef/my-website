import React, { Component } from 'react';

import { HashRouter } from "react-router-dom";

import Routes from "./Routes";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default class AppMain extends Component {

  render() {
    return (
        <div>
          <HashRouter>
            <div>
              <SiteHeader />
              <Routes />
            </div>
          </HashRouter>
          <SiteFooter />
        </div>


      /*

<!--
            WebAssembly Sudoku Solver Tutorial
            -->

      /*
      <table style="width: 100%" border=0 cellpadding=0 cellspacing=10 bgcolor="#CCCCCC" >
        <tr>
          <th align="right" >Projects</th>
              <th style="width: 157px">Courses and Schedules</th>
          <th style="width: 1px">Interests</th>
          <th style="width: 120px">Work Experience</th>
          <th align="left">My car</th>
        </tr>
      </table>
    */
    );
  }
}