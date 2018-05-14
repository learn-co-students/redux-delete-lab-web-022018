import React, { Component } from 'react';

class Band extends Component {
  handleClick = ()=>{
    // console.log("click");
    this.props.store.dispatch({type: 'DELETE_BAND', id: this.props.band.id})
  }
  render() {
    console.log(this.props.band.id);
    return(
      <div key={this.props.index}>
        <li>
        {this.props.band.text}
        <button onClick={this.handleClick}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;
