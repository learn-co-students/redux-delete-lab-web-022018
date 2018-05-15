import React, { Component } from 'react';

class Band extends Component {

  clickDelete = () => {
  	this.props.store.dispatch({
  		type: 'DELETE_BAND',
  		id: this.props.band.id
  	})
  }

  render() {
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.clickDelete}>Delete Band</button>
      </div>
    );
  }
};

export default Band;
