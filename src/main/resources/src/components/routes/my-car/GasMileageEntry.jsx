import React, { Component } from "react";
import MPGItem from "./MPGItem";

const MONTH_MAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class GasMileageEntry extends Component {

  constructor(props) {
    super(props);
    const item = this.props.item;

    const date = new Date(item.title.split(" on ")[1]);
    const fillUpData = new MPGItem(item.contentSnippet);
    this.state = {
      year: date.getFullYear(),
      month: MONTH_MAP[date.getMonth()],
      day: date.getDate(),
      miles: fillUpData.miles,
      gallons: fillUpData.gallons,
      price: fillUpData.price
    };
  }

  render() {
    return (
        <div className="mpg-entry">
          <p>{this.state.month} {this.state.day} {this.state.year}</p>
          <table>

            <tbody>
              <tr>
                <td>Miles</td>
                <td>Gallons</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>{this.state.miles}</td>
                <td>{this.state.gallons}</td>
                <td>{this.state.price}</td>
              </tr>
            </tbody>

          </table>
          <p>{(this.state.miles / this.state.gallons).toFixed(2)}</p>
        </div>
    );
  }
}