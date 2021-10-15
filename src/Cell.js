import React, { Component } from 'react';


class Cell extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    }

  }

   activateLaser() {
     this.setState(
       { color: '#333' }
     )
   }

  render() {
    return (
      <div className='cell' style={{ backgroundColor: this.state.color }} onClick={(e) => this.activateLaser() }>
      </div>
    )
  }
}



export default Cell


