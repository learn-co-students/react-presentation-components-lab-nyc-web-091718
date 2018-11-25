// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy',
    }
  }

  handleClick = () => {
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}, ()=>console.log('updated state', this.state)) : this.setState({mood: 'happy'}, ()=>console.log('updated state', this.state))
  }

  render(){
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
