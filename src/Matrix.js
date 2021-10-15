import React, { Component } from 'react';
import  Cell from "./Cell";

export default class Matrix extends Component {

  genRow = (vals) => {
// vals: array
    return vals.map(
      val => <div className="cell"> <Cell value={val} /></div>)
  }

  genMatrix = () => {
//  this.props.values: array of arrays
    return this.props.values.map(
      rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}



Matrix.defaultProps = {
  values : Array(10).fill(['#F00'])
}