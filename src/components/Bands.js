import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {
  render() {
    const bands = this.props.store.getState().bands.map((band,index)=> <Band band={band} store={this.props.store} key={index} index={index}/>)

    return(
      <ul>
        Bands Component
        {bands}
      </ul>
    );
  }
};

export default Bands;
