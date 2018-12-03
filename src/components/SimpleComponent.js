// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
  state = { mood: 'happy' }

  handleClick = () => {
    const changeMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({ mood: changeMood })
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }


} // end of Component


export default SimpleComponent;
