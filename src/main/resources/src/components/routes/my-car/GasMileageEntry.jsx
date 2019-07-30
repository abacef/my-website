import React, { Component } from "react";
import MPGItem from "./MPGItem";

const MONTH_MAP = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class GasMileageEntry extends Component {

  constructor(props) {
    super(props);
    const item = this.props.item;

    const date = new Date(item.pubDate);
    const data = new MPGItem(item.contentSnippet);
    this.state = {
      year: date.getFullYear(),
      month: MONTH_MAP[date.getMonth()],
      day: date.getDate(),
      miles: data.miles,
      gallons: data.gallons,
      price: data.price
    }
  }

  render() {
    return (
        <div>
          <table>

            <thead>
              <tr>
                <th>{this.state.month} {this.state.day} {this.state.year}</th>
              </tr>
            </thead>

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
              <tr>
                <td>{(this.state.miles / this.state.gallons).toFixed(2)}</td>
              </tr>
            </tbody>

          </table>
        </div>
    );
  }
}