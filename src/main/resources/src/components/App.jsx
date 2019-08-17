import React, { Component } from 'react';
import {Route} from "react-router-dom";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Welcome from "./routes/Welcome";
import Stuff from "./routes/Stuff";
import RestAPITutorial from "./routes/RestAPITutorial";
import MyCar from "./routes/MyCar";

export default class App extends Component {

  render() {
    return (
        <div>
          <SiteHeader />

          <div className="content">
            <Route exact path="/" component={Welcome}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/bugs" component={RestAPITutorial}/>
            <Route path="/my-car" component={MyCar}/>
          </div>

          <SiteFooter />
        </div>
    );
  }
}