// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component{
  state = {
    mood:"happy"
  }
  handleClick = ()=>{
    this.setState(()=>{
      if (this.state.mood === "happy"){
        return {mood:"sad"}
      }else{
        return {mood:"happy"}
      }
    })
  }
  render(){
    return(
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}
