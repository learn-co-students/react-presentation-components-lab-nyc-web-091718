import React, { Component } from 'react';


class SimpleComponent extends Component {
  constructor(){
  super()

  this.state = {
    mood: 'happy'
  }
}

  handleClick = () => {
  const renderedMood =  this.state.mood === 'happy' ? 'sad' : 'happy'
  this.setState({mood: renderedMood})
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }


} //end class

export default SimpleComponent;
