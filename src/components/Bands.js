import React, { Component } from 'react';
import Band from './Band'
// import manageBand from './manageBand'

class Bands extends Component {


  render() {
    // console.log(this.props.store.getState().bands)
    const bands = this.props.store.getState().bands.map((band,index)=>{
      return <Band key={index} store={this.props.store} handleClick={this.handleClick} band={band} />
    })
    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
